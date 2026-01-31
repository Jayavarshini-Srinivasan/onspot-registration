const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
// Credentials must be set via env vars: EMAIL_USER and EMAIL_PASS
const getTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  // Remove any spaces from the password (common copy-paste issue with App Passwords)
  const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

  if (!emailUser || !emailPass) {
    console.error("Email credentials not set in environment variables!");
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

/**
 * Sends a confirmation email to the participant.
 * @param {Object} participant - Participant details (name, email, registrationId)
 * @param {Array} events - List of registered events
 * @param {number} totalAmount - Total amount paid
 */
const sendConfirmationEmail = async (participant, events, totalAmount) => {
  const transporter = getTransporter();
  
  if (!transporter) {
    console.error("Skipping email: No transporter available.");
    return;
  }

  const eventListHtml = events.map(e => `<li>${e.eventName} - ₹${e.price}</li>`).join('');

  const mailOptions = {
    from: '"Magnus Registration Team" <noreply@magnus.internal>',
    to: participant.email,
    subject: `Magnus 2026 registration confirmed`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #121212; }
          .container { max-width: 600px; margin: 20px auto; background-color: #1c1c1c; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #a800ff 0%, #6a00f4 100%); padding: 40px 20px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 32px; letter-spacing: 2px; text-transform: uppercase; }
          .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 40px 30px; color: #ffffff; }
          .greeting { font-size: 18px; margin-bottom: 20px; color: #e0e0e0; }
          .details-card { background-color: #252525; border-radius: 8px; padding: 25px; margin: 25px 0; border: 1px solid #333; }
          .detail-row { display: flex; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid #333; padding-bottom: 8px; }
          .detail-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
          .label { color: #888; font-size: 14px; }
          .value { color: #fff; font-weight: 600; font-size: 14px; }
          .event-list { list-style: none; padding: 0; margin: 0; }
          .event-item { background: #1c1c1c; padding: 12px; margin-bottom: 8px; border-radius: 4px; border-left: 3px solid #a800ff; display: flex; justify-content: space-between; font-size: 14px; }
          .footer { background-color: #000; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .button { display: inline-block; padding: 12px 24px; background: #a800ff; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>MAGNUS 2026</h1>
            <p>National Level Technical Symposium</p>
          </div>
          
          <div class="content">
            <p class="greeting">Hello <strong>${participant.name}</strong>,</p>
            <p style="color: #b0b0b0; line-height: 1.6;">Thank you for registering! ${participant.paymentMode ? 'Your payment has been successfully verified by our volunteers.' : 'Your registration has been confirmed.'}</p>
            
            ${participant.paymentMode ? `
            <div class="details-card">
              <div class="detail-row">
                <span class="label">Total Paid</span>
                <span class="value">₹${totalAmount}</span>
              </div>
              <div class="detail-row">
                <span class="label">Payment Mode</span>
                <span class="value">${participant.paymentMode}</span>
              </div>
            </div>
            ` : ''}

            <p style="color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Registered Events</p>
            <ul class="event-list">
              ${events.map(e => `
                <li class="event-item">
                  <span>${e.eventName}</span>
                </li>
              `).join('')}
            </ul>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #b0b0b0; font-size: 14px;">Please show this email at the event venue.</p>
            </div>
          </div>

          <div class="footer">
            <p>&copy; 2026 Magnus Organizing Team. All rights reserved.</p>
            <p>Chennai Institute of Technology</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    return null;
  }
};

module.exports = { sendConfirmationEmail };
