interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-slate-900">Magnus On-Spot Registration</h1>
          <p className="text-slate-600">AI & ML Technical Symposium</p>
        </div>
        
        <button
          onClick={onStart}
          className="w-full min-w-[320px] px-8 py-5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          New Registration
        </button>
      </div>
    </div>
  );
}