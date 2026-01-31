require('dotenv').config();
const { sendConfirmationEmail } = require('./email');

async function testEmail() {
    console.log("🔍 Testing Email Template...");
    
    // Dummy Data
    const participant = {
        name: "tejesh", // User requested name
        email: "tejeshdevelopers@gmail.com", // User requested email
        registrationId: "REG-TEST-" + Math.floor(Math.random() * 1000),
        paymentMode: "UPI"
    };

    const events = [
        { eventName: "AI Workshop", price: 350 },
        { eventName: "Paper Presentation", price: 200 }
    ];

    const totalAmount = 550;

    console.log(`Sending styled email to: ${participant.email}`);
    
    try {
        const info = await sendConfirmationEmail(participant, events, totalAmount);
        
        if (info) {
            console.log("🎉 Styled Email Sent Successfully!");
            console.log("Message ID:", info.messageId);
            console.log("Check your inbox/spam folder.");
        } else {
            console.log("❌ Email function returned null (check previous errors).");
        }

    } catch (error) {
        console.error("❌ Test Failed:", error);
    }
}

testEmail();
