import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1d2d45] dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-[0_32px_80px_-16px_rgba(29,45,69,0.5)] dark:shadow-none border border-white/5">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#324a70]/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold mb-4">
              <Sparkles size={16} />
              Ready to scale your excellence?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Business Performance <span className="text-blue-400 text-shadow-glow">Today</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Join the forward-thinking organizations that trust Thinkbase Advisory to strengthen their systems, 
              delight their customers, and drive sustainable growth.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/get-started"
                className="w-full sm:w-auto px-10 py-5 bg-blue-500 text-white rounded-2xl font-bold text-lg hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
