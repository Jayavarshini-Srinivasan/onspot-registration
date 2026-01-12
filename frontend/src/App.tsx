import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { StartScreen } from './components/StartScreen';
import { ParticipantDetailsScreen } from './components/ParticipantDetailsScreen';
import { EventSelectionScreen } from './components/EventSelectionScreen';
import { PaymentConfirmationScreen } from './components/PaymentConfirmationScreen';
import { ConfirmationScreen } from './components/ConfirmationScreen';
import { auth } from './firebase';

export type RegistrationStep = 'login' | 'start' | 'details' | 'events' | 'payment' | 'confirmation';

export interface ParticipantDetails {
  fullName: string;
  phoneNumber: string;
  collegeName: string;
  email: string;
}

export interface Event {
  id: string;
  name: string;
  fee: number;
  category: 'technical' | 'non-technical' | 'workshop';
}

export interface RegistrationData {
  participant: ParticipantDetails;
  selectedEvents: Event[];
  paymentMode: 'cash' | 'upi';
  totalAmount: number;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('login');
  const [registrationData, setRegistrationData] = useState<Partial<RegistrationData>>({
    selectedEvents: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    setCurrentStep('start');
  };

  const handleStartRegistration = () => {
    setCurrentStep('details');
  };

  const handleParticipantDetails = (details: ParticipantDetails) => {
    setRegistrationData(prev => ({ ...prev, participant: details }));
    setCurrentStep('events');
  };

  const handleEventSelection = (events: Event[], total: number) => {
    setRegistrationData(prev => ({ ...prev, selectedEvents: events, totalAmount: total }));
    setCurrentStep('payment');
  };

  const handlePaymentConfirmation = async (mode: 'cash' | 'upi') => {
    if (!registrationData.participant || !registrationData.selectedEvents) {
      console.error("Missing registration data");
      return;
    }

    setIsSubmitting(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to register participants.");
        setCurrentStep('login');
        return;
      }

      const token = await user.getIdToken();

      // TODO: Use environment variable for API URL in production
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

      const payload = {
        name: registrationData.participant.fullName,
        phone: registrationData.participant.phoneNumber,
        email: registrationData.participant.email,
        college: registrationData.participant.collegeName,
        eventIds: registrationData.selectedEvents.map(e => e.id),
        paymentMode: mode === 'cash' ? 'CASH' : 'UPI'
      };

      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      const result = await response.json();
      console.log("Registration success:", result);

      setRegistrationData(prev => ({ ...prev, paymentMode: mode }));
      setCurrentStep('confirmation');

    } catch (error: any) {
      console.error("Registration error:", error);
      alert(`Registration Failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterNext = () => {
    setRegistrationData({ selectedEvents: [] });
    setCurrentStep('start');
  };

  const handleBack = () => {
    if (currentStep === 'details') {
      setCurrentStep('start');
    } else if (currentStep === 'events') {
      setCurrentStep('details');
    } else if (currentStep === 'payment') {
      setCurrentStep('events');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {currentStep === 'login' && <LoginScreen onLogin={handleLogin} />}
      {currentStep === 'start' && <StartScreen onStart={handleStartRegistration} />}
      {currentStep === 'details' && <ParticipantDetailsScreen initialData={registrationData.participant} onNext={handleParticipantDetails} onBack={handleBack} />}
      {currentStep === 'events' && <EventSelectionScreen initialSelectedEvents={registrationData.selectedEvents || []} onNext={handleEventSelection} onBack={handleBack} />}
      {currentStep === 'payment' && (
        <PaymentConfirmationScreen
          totalAmount={registrationData.totalAmount || 0}
          onConfirm={handlePaymentConfirmation}
          onBack={handleBack}
          isSubmitting={isSubmitting}
        />
      )}
      {currentStep === 'confirmation' && (
        <ConfirmationScreen
          registrationData={registrationData as RegistrationData}
          onRegisterNext={handleRegisterNext}
        />
      )}
    </div>
  );
}