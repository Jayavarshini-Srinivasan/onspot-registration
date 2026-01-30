require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log("🔍 Testing Email Configuration...");

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user) {
        console.error("❌ Error: EMAIL_USER is missing in .env");
        return;
    }
    if (!pass) {
        console.error("❌ Error: EMAIL_PASS is missing in .env");
        return;
    }

    console.log(`✅ User: ${user}`);
    console.log(`🔑 Password Length: ${pass.length}`);
    console.log(`   First char: ${pass[0]}`);
    console.log(`   Last char: ${pass[pass.length - 1]}`);
    console.log(`   Has spaces? ${pass.includes(' ') ? 'YES' : 'NO'}`);
    
    // Test if removing spaces changes length
    const cleanPass = pass.replace(/\s+/g, '');
    console.log(`   Length after stripping spaces: ${cleanPass.length}`);

    console.log("Testing connection...");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            // Use the raw pass first to test if spaces are actually required by Google (usually they are IGNORED by Google if app password, but let's test)
            // Wait, standard App Passwords often have spaces 'abcd efgh'. Google usually expects them WITHOUT spaces or handles them.
            // My email.js strips them. Let's test with STRIPPED password first as that's what email.js does.
            pass: cleanPass 
        },
        tls: {
            rejectUnauthorized: false // Keep the bypass just in case
        }
    });

    try {
        // 1. Verify connection
        await transporter.verify();
        console.log("✅ Connection / Authentication Successful!");

        // 2. Send Test Email
        console.log("Attempting to send test email...");
        const info = await transporter.sendMail({
            from: user,
            to: user, // Send to self
            subject: "Test Email from Debug Script",
            text: "If you see this, email sending is working!"
        });

        console.log("🎉 Test Email Sent Successfully!");
        console.log("Message ID:", info.messageId);

    } catch (error) {
        console.error("❌ Email Test Failed:");
        console.error(error);
        
        if (error.code === 'EAUTH') {
            console.log("\n💡 TIP: Check if 'App Password' is correct. Do not use your normal login password.");
            console.log("   Go to: Google Account > Security > 2-Step Verification > App Passwords");
        }
    }
}

testEmail();
