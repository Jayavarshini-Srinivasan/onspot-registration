import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { ParticipantDetails } from '../App';

interface ParticipantDetailsScreenProps {
  initialData?: ParticipantDetails;
  onNext: (details: ParticipantDetails) => void;
  onBack: () => void;
}

export function ParticipantDetailsScreen({ initialData, onNext, onBack }: ParticipantDetailsScreenProps) {
  const [formData, setFormData] = useState<ParticipantDetails>(
    initialData || {
      fullName: '',
      phoneNumber: '',
      collegeName: '',
      email: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phoneNumber && formData.collegeName && formData.email) {
      onNext(formData);
    }
  };

  const handleChange = (field: keyof ParticipantDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className="w-full max-w-2xl relative">
        <button
          type="button"
          onClick={onBack}
          className="absolute -top-16 left-0 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="mb-8">
          <div className="text-slate-500 mb-2">Step 1 of 3</div>
          <h1 className="text-slate-900">Participant Details</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-slate-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
              placeholder="Enter participant's full name"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
              placeholder="Enter participant's email"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-slate-900 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              className="w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
              placeholder="Enter 10-digit phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div>
            <label htmlFor="collegeName" className="block text-slate-900 mb-2">
              College Name
            </label>
            <input
              type="text"
              id="collegeName"
              value={formData.collegeName}
              onChange={(e) => handleChange('collegeName', e.target.value)}
              className="w-full px-5 py-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
              placeholder="Enter college or institution name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors mt-8"
          >
            Proceed to Event Selection
          </button>
        </form>
      </div>
    </div>
  );
}