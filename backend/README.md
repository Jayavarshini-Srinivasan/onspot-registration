# Magnus On-Spot Registration Backend

This folder contains the **backend-only** code for the on-spot registration system. 
It is built using Firebase Cloud Functions, Firestore, and Nodemailer.

## Folder Structure
- `functions/` - Contains all server-side Node.js logic.
- `firestore.rules` - Security rules for the database.
- `firebase.json` - Firebase project configuration.

## Prerequisites
- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)
- **Firebase Blaze Plan** (Required for Cloud Functions) -> [Upgrade Here](https://console.firebase.google.com/project/_/usage/details)

## Setup & Deployment

1. **Navigate to backend**:
   ```bash
   cd backend
   ```

2. **Install Dependencies**:
   ```bash
   cd functions
   npm install
   ```

3. **Set Environment Variables**:
   You must set the email credentials in Firebase environment config:
   ```bash
   firebase functions:config:set email.user="your-email@gmail.com" email.pass="your-app-password"
   ```

4. **Deploy**:
   ```bash
   firebase deploy --only functions,firestore
   ```

## Development (Offline)
To run tests (if implemented) or lint:
```bash
cd functions
npm test
```

## Security
- **Authentication**: All endpoints and DB access require a valid Firebase Auth user (volunteer).
- **Immutability**: Registrations cannot be edited or deleted once created.
