import { useState, useEffect } from 'react';
import { ArrowLeft, Loader2, PlusCircle } from 'lucide-react';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { Event } from '../App';

interface EventSelectionScreenProps {
  initialSelectedEvents?: Event[];
  onNext: (selectedEvents: Event[], total: number) => void;
  onBack: () => void;
}

export function EventSelectionScreen({ initialSelectedEvents, onNext, onBack }: EventSelectionScreenProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEventIds, setSelectedEventIds] = useState<Set<string>>(new Set(initialSelectedEvents?.map(event => event.id)));
  const [seeding, setSeeding] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'events'), where('active', '==', true));
      const querySnapshot = await getDocs(q);
      const fetchedEvents: Event[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedEvents.push({
          id: doc.id,
          name: data.name,
          fee: Number(data.price), // Firestore stores as price
          category: data.category || 'technical', // Default to technical if missing
        });
      });
      setEvents(fetchedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleToggleEvent = (eventId: string) => {
    setSelectedEventIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const handleSeedEvents = async () => {
    setSeeding(true);
    const sampleEvents = [
      { name: "Code Debugging", price: 150, category: "technical", active: true },
      { name: "Paper Presentation", price: 200, category: "technical", active: true },
      { name: "Gaming (Valorant)", price: 100, category: "non-technical", active: true },
      { name: "Photography", price: 100, category: "non-technical", active: true },
      { name: "React Workshop", price: 300, category: "workshop", active: true },
      { name: "AI/ML Workshop", price: 350, category: "workshop", active: true }
    ];

    try {
      for (const event of sampleEvents) {
        await addDoc(collection(db, 'events'), event);
      }
      // Refresh list
      await fetchEvents();
    } catch (error) {
      console.error("Error seeding events:", error);
      alert("Failed to seed events. Check console permissions.");
    } finally {
      setSeeding(false);
    }
  };

  const selectedEvents = events.filter(event => selectedEventIds.has(event.id));
  const totalAmount = selectedEvents.reduce((sum, event) => sum + event.fee, 0);

  const handleProceed = () => {
    if (selectedEvents.length > 0) {
      onNext(selectedEvents, totalAmount);
    }
  };

  const renderEventsByCategory = (category: Event['category'], title: string) => {
    const categoryEvents = events.filter(event => event.category === category);

    if (categoryEvents.length === 0) return null;

    return (
      <div>
        <h3 className="text-slate-900 mb-3">{title}</h3>
        <div className="space-y-2">
          {categoryEvents.map(event => (
            <label
              key={event.id}
              className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedEventIds.has(event.id)
                ? 'border-slate-900 bg-slate-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedEventIds.has(event.id)}
                  onChange={() => handleToggleEvent(event.id)}
                  className="w-5 h-5 accent-slate-900"
                />
                <span className="text-slate-900">{event.name}</span>
              </div>
              <span className="text-slate-900">₹{event.fee}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-slate-900" />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 py-8">
      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={onBack}
          className="absolute -top-2 left-0 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="mb-8 pt-12">
          <div className="text-slate-500 mb-2">Step 2 of {totalAmount === 0 ? '2' : '3'}</div>
          <h1 className="text-slate-900">Event Selection</h1>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            {events.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
                <p className="text-slate-500 mb-4">No active events found in database.</p>
                <button
                  onClick={handleSeedEvents}
                  disabled={seeding}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
                >
                  {seeding ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <PlusCircle className="w-5 h-5" />
                  )}
                  Seed Sample Events
                </button>
              </div>
            ) : (
              <>
                {renderEventsByCategory('technical', 'Technical Events')}
                {renderEventsByCategory('non-technical', 'Non-Technical Events')}
                {renderEventsByCategory('workshop', 'Workshops')}
              </>
            )}
          </div>

          <div>
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6 sticky top-8">
              <h3 className="text-slate-900 mb-4">Summary</h3>

              {selectedEvents.length === 0 ? (
                <p className="text-slate-500 text-center py-8">No events selected</p>
              ) : (
                <div className="space-y-3 mb-6">
                  {selectedEvents.map(event => (
                    <div key={event.id} className="flex justify-between text-slate-700">
                      <span>{event.name}</span>
                      <span>₹{event.fee}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t-2 border-slate-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-900">Total Amount</span>
                  <span className="text-slate-900">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                disabled={selectedEvents.length === 0}
                className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                {totalAmount === 0 ? 'Proceed to Registration' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}