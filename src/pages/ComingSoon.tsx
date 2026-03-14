import { Link } from 'react-router-dom';
import { Rocket, ArrowLeft, Bell } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24 pb-12 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-2xl w-full text-center space-y-12">
        {/* Icon/Animation Container */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-[#324a70] opacity-10 blur-2xl rounded-full animate-pulse" />
          <div className="relative bg-white p-8 rounded-full shadow-xl border border-blue-50">
            <Rocket size={64} className="text-[#324a70] animate-bounce" />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1d2d45] tracking-tight">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
            We're currently building something extraordinary to help you transform your business. 
            Stay tuned as we prepare to launch our new platform.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-[#324a70] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1d2d45] transition-all hover:scale-105 shadow-lg"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <button 
            className="inline-flex items-center gap-2 bg-white border-2 border-[#1d2d45] text-[#1d2d45] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all hover:scale-105"
            onClick={() => alert("We'll notify you soon!")}
          >
            <Bell size={20} />
            Notify Me
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-12 border-t border-gray-100">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            Thinkbase Advisory © 2026
          </p>
        </div>
      </div>
    </div>
  );
}
