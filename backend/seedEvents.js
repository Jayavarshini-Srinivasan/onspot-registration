const admin = require('./firebaseAdmin');
const { getFirestore } = require('firebase-admin/firestore');

async function seed() {
  const db = getFirestore();
  const eventsCollection = db.collection('events');

  const sampleEvents = [
    { name: "Code Debugging", price: 150, category: "technical", active: true },
    { name: "Paper Presentation", price: 200, category: "technical", active: true },
    { name: "Gaming (Valorant)", price: 100, category: "non-technical", active: true },
    { name: "Photography", price: 100, category: "non-technical", active: true },
    { name: "React Workshop", price: 300, category: "workshop", active: true },
    { name: "AI/ML Workshop", price: 350, category: "workshop", active: true }
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
