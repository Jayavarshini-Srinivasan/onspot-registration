const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // Frontend is 3000, so use 3001

app.use(cors());
app.use(bodyParser.json());

// Import the Vercel handler
const registerHandler = require('./api/register');

// Wrapper to adapt Vercel/Nextjs handler (req, res) to Express
const adaptHandler = (handler) => async (req, res) => {
    // Vercel handlers are async, Express handles them fine but we must catch errors
    try {
        await handler(req, res);
    } catch (err) {
        console.error("Handler Error:", err);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

// Routes
app.post('/api/register', adaptHandler(registerHandler));

app.listen(PORT, () => {
    console.log(`
🚀 Backend Server running on http://localhost:${PORT}
👉 API Endpoint: http://localhost:${PORT}/api/register
    `);
});
