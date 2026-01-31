const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Prevent multiple initializations
if (!admin.apps.length) {
  try {
    const serviceAccountPath = path.join(__dirname, 'service-account.json');
    
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      // Production / Vercel: Use Env Var
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    } else if (fs.existsSync(serviceAccountPath)) {
      // Local Dev: Use file
      const serviceAccount = require(serviceAccountPath);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log('✅ Initialized Firebase Admin using service-account.json');
    } else {
      // Fallback (Google Cloud auto-discovery)
      admin.initializeApp();
      console.warn('⚠️  Initialized Firebase Admin with default credentials.');
    }
  } catch (error) {
    console.error('❌ Firebase Admin Initialization Failed:', error);
  }
}

module.exports = admin;
