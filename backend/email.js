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
    subject: `Registration Confirmed - ID: ${participant.registrationId}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Welcome to Magnus 2k26!</h2>
        <p>Hi ${participant.name},</p>
        <p>Your on-spot registration is confirmed.</p>
        
        <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Registration ID:</strong> ${participant.registrationId}</p>
            <p><strong>Total Paid:</strong> ₹${totalAmount}</p>
            <p><strong>Events:</strong></p>
            <ul>${eventListHtml}</ul>
        </div>
        
        <p>Please show this email at the event entry.</p>
        <br/>
        <p>Best Regards,<br/>Magnus Organizing Team</p>
      </div>
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
