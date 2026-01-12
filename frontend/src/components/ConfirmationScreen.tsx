import { CheckCircle2 } from 'lucide-react';
import type { RegistrationData } from '../App';

interface ConfirmationScreenProps {
  registrationData: RegistrationData;
  onRegisterNext: () => void;
}

export function ConfirmationScreen({ registrationData, onRegisterNext }: ConfirmationScreenProps) {
  const { participant, selectedEvents, totalAmount, paymentMode } = registrationData;

  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className="w-full max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-slate-900 mb-2">Registration Successful</h1>
          <p className="text-slate-600">Confirmation email sent to participant</p>
        </div>

        {/* Registration Details */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-8 mb-8">
          <div className="space-y-6">
            {/* Participant Information */}
            <div>
              <h3 className="text-slate-900 mb-3">Participant Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Name</span>
                  <span className="text-slate-900">{participant.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Phone Number</span>
                  <span className="text-slate-900">{participant.phoneNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">College</span>
                  <span className="text-slate-900">{participant.collegeName}</span>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-slate-100"></div>

            {/* Registered Events */}
            <div>
              <h3 className="text-slate-900 mb-3">Registered Events</h3>
              <div className="space-y-2">
                {selectedEvents.map(event => (
                  <div key={event.id} className="flex justify-between">
                    <span className="text-slate-700">{event.name}</span>
                    <span className="text-slate-700">₹{event.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-slate-100"></div>

            {/* Payment Information */}
            <div>
              <h3 className="text-slate-900 mb-3">Payment Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Payment Mode</span>
                  <span className="text-slate-900 uppercase">{paymentMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-900">Amount Paid</span>
                  <span className="text-slate-900">₹{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Registration Button */}
        <button
          onClick={onRegisterNext}
          className="w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Register Next Participant
        </button>
      </div>
    </div>
  );
}
