import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentConfirmationScreenProps {
  totalAmount: number;
  onConfirm: (mode: 'cash' | 'upi') => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export function PaymentConfirmationScreen({ totalAmount, onConfirm, onBack, isSubmitting = false }: PaymentConfirmationScreenProps) {
  const [paymentMode, setPaymentMode] = useState<'cash' | 'upi'>('cash');

  const handleConfirm = () => {
    onConfirm(paymentMode);
  };

  return (
    <div className="min-h-screen px-8 py-8">
      <div className="max-w-2xl mx-auto relative">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="absolute top-0 left-0 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="mb-8 pt-12">
          <div className="text-slate-500 mb-2">Step 3 of 3</div>
          <h1 className="text-slate-900">Payment Confirmation</h1>
        </div>

        <div className="space-y-8">
          {/* Total Amount Display */}
          <div className="bg-white border-2 border-slate-200 rounded-lg p-8 text-center">
            <div className="text-slate-600 mb-2">Total Amount</div>
            <div className="text-slate-900" style={{ fontSize: '3rem' }}>₹{totalAmount}</div>
          </div>

          {/* Payment Mode Selector */}
          <div>
            <label className="block text-slate-900 mb-4">Payment Mode</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMode('cash')}
                disabled={isSubmitting}
                className={`p-6 border-2 rounded-lg transition-all ${paymentMode === 'cash'
                    ? 'border-slate-900 bg-slate-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="text-slate-900">Cash</div>
              </button>
              <button
                onClick={() => setPaymentMode('upi')}
                disabled={isSubmitting}
                className={`p-6 border-2 rounded-lg transition-all ${paymentMode === 'upi'
                    ? 'border-slate-900 bg-slate-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="text-slate-900">UPI</div>
              </button>
            </div>
          </div>

          {/* Confirmation Button */}
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="w-full px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span> Processing Payment & Registration...
              </>
            ) : (
              'Payment Received'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}