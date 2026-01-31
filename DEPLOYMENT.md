# Quick Deployment Checklist

## Step 1: Deploy Backend
1. Login to Vercel: https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your repository or use CLI
4. Set **Root Directory** to `backend`
5. Add 3 environment variables:
   - `FIREBASE_SERVICE_ACCOUNT_KEY` (entire service-account.json as one line)
   - `EMAIL_USER`: magnus@citchennai.net
   - `EMAIL_PASS`: imzbjowutifztwup
6. Deploy and copy URL

## Step 2: Update Frontend Config
1. Edit `frontend/.env.production`
2. Replace `your-backend.vercel.app` with actual backend URL

## Step 3: Deploy Frontend
1. Same as backend, but set **Root Directory** to `frontend`
2. Add environment variable:
   - `VITE_API_URL`: https://your-backend.vercel.app/api
3. Deploy

## Step 4: Seed Events
```bash
cd backend
node seedEvents.js
```

## Done!
Test your app at the frontend URL

See `vercel-deployment-guide.md` for detailed instructions.
