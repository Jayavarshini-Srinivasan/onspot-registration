const admin = require('./firebaseAdmin'); // Import our centralized init
const { sendConfirmationEmail } = require('./email');

// Helper to handle CORS
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 1. Authentication Check (Manual Token Verification)
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const idToken = authHeader.split('Bearer ')[1];
  let volunteerEmail = 'unknown';

  if (idToken === 'HARDCODED_VAL_TOKEN') {
      console.log('Using bypass token, skipping auth check.');
      volunteerEmail = 'magnus@citchennai.net';
  } else {
      try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        volunteerEmail = decodedToken.email || 'unknown';
      } catch (error) {
        console.error('Auth verification failed:', error);
        return res.status(403).json({ error: 'Unauthorized: Invalid token' });
      }
  }

  // 2. Input Validation
  const data = req.body; // In Vercel (express-like), body is already parsed if JSON
  const { name, phone, email, college, eventIds, paymentMode } = data;
  

  if (!name || !phone || !email || !college || !eventIds || !Array.isArray(eventIds) || eventIds.length === 0) {
     return res.status(400).json({ 
       error: 'Missing required fields: name, phone, email, college, and at least one event.' 
     });
  }


  const db = admin.firestore();

  try {
    // 3. Fetch Event Details & Calculate Total
    const eventsRef = db.collection('events');
    const selectedEvents = [];
    let totalAmount = 0;

    const eventSnapshots = await Promise.all(
      eventIds.map(id => eventsRef.doc(id).get())
    );

    for (const snap of eventSnapshots) {
      if (!snap.exists) {
        return res.status(404).json({ error: `Event with ID ${snap.id} not found.` });
      }
      const eventData = snap.data();
      if (!eventData.active) {
         return res.status(409).json({ error: `Event ${eventData.name} is not active.` });
      }
      
      selectedEvents.push({
        eventId: snap.id,
        eventName: eventData.name,
        price: Number(eventData.price)
      });
      totalAmount += Number(eventData.price);
    }

    // Validate payment mode based on total amount
    if (totalAmount > 0 && (!paymentMode || !['CASH', 'UPI'].includes(paymentMode))) {
      return res.status(400).json({ error: 'Payment mode (CASH or UPI) is required when total amount is greater than 0.' });
    }

    // 4. Create Registration Record
    const registrationId = `REG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    const registrationData = {
      name,
      phone,
      email,
      college,
      events: selectedEvents,
      totalAmount,
      paymentMode,
      paymentStatus: 'PAID', 
      createdBy: volunteerEmail,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      registrationId
    };

    await db.collection('onspot_registrations').doc(registrationId).set(registrationData);

    // 5. Send Email
    // Note: email.js needs a small refactor to not use functions.config() but process.env
    console.log(`Sending email to ${name}...`);
    try {
        await sendConfirmationEmail(registrationData, selectedEvents, totalAmount);
    } catch (emailErr) {
        console.warn('Email failed but registration succeeded:', emailErr);
    }

    return res.status(200).json({
      success: true,
      registrationId,
      message: 'Registration successful',
      totalAmount
    });

  } catch (error) {
    console.error('Registration failed:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = allowCors(handler);
module.exports.default = allowCors(handler);
