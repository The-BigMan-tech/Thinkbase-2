import { useState, useEffect } from 'react';
import { X, Cookie, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show with a slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[9999] animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1d2d45]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] relative overflow-hidden group">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-10">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                <Cookie size={32} strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex-grow text-center md:text-left space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                We value your privacy
                <ShieldCheck size={18} className="text-blue-400" />
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept", you consent to our use of cookies. Read our{' '}
                <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline transition-colors font-medium">
                  Privacy & Cookie Policy
                </Link>{' '}
                to learn more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => handleConsent('declined')}
                className="px-6 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium border border-white/5"
              >
                Decline
              </button>
              <button
                onClick={() => handleConsent('accepted')}
                className="px-8 py-3 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group/btn"
              >
                Accept All
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
