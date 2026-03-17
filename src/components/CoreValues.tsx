import { Shield, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  {
    icon: <Shield className="w-[50%] h-[50%] text-[#324a70] dark:text-blue-300" />,
    title: "Uncompromising Integrity",
  },
  {
    icon: <Lightbulb className="w-[50%] h-[50%] text-[#324a70] dark:text-blue-300" />,
    title: "Strategic Innovation",
  },
  {
    icon: <TrendingUp className="w-[50%] h-[50%] text-[#324a70] dark:text-blue-300" />,
    title: "Execution Excellence",
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d45] dark:text-white mb-6">Our Core Principles</h2>
          <div className="w-24 h-1 bg-[#324a70] dark:bg-blue-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            These values guide everything we do, ensuring that our partnership delivers lasting value to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center bg-white dark:bg-slate-800 p-10 pb-2 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center transition-colors duration-300">
                {principle.icon}
              </div>
                    
              <h3 className="text-2xl font-bold text-[#1d2d45] dark:text-white mb-2 text-center">
                {principle.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
            <Link 
                to="/get-started" 
                className="inline-flex items-center gap-2 bg-[#1d2d45] dark:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#324a70] dark:hover:bg-blue-500 hover:shadow-2xl transition-all duration-300"
            >
                Start Your Performance Journey
            </Link>
        </div>
      </div>
    </section>
  );
}
