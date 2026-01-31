const admin = require('./firebaseAdmin');
const { getFirestore } = require('firebase-admin/firestore');

async function seed() {
  const db = getFirestore();
  const eventsCollection = db.collection('events');

  const sampleEvents = [
    // Technical Events
    { name: "Proto Pitch", price: 0, category: "technical", active: true },
    { name: "Logic Rush", price: 0, category: "technical", active: true },
    { name: "Ideathon", price: 0, category: "technical", active: true },
    { name: "Tech Trade Wars", price: 0, category: "technical", active: true },
    { name: "Podcast Monologue", price: 0, category: "technical", active: true },
    { name: "Techie XO", price: 0, category: "technical", active: true },
    { name: "Tech Tamasha", price: 0, category: "technical", active: true },
    { name: "Code Euphoria", price: 0, category: "technical", active: true },
    { name: "Accuracy Arena", price: 0, category: "technical", active: true },
    { name: "Prompt Pixel", price: 0, category: "technical", active: true },
    { name: "Paper Presentation", price: 0, category: "technical", active: true },
    
    // Workshops
    { name: "Blockchain", price: 100, category: "workshop", active: true },
    { name: "Cloud Quest Azure", price: 50, category: "workshop", active: true },
    { name: "Hacking GPT", price: 100, category: "workshop", active: true },
    { name: "Agentic AI", price: 100, category: "workshop", active: true },
    { name: "Adya AI", price: 0, category: "workshop", active: true },
    { name: "Computer Vision", price: 100, category: "workshop", active: false }
  ];

  console.log("🌱 Seeding events...");

  try {
    for (const event of sampleEvents) {
      await eventsCollection.add(event);
      console.log(`✅ Added: ${event.name}`);
    }
    console.log("🎉 Seeding complete! Restart your frontend to see the events.");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
}

seed();
