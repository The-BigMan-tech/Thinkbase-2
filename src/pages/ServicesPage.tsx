import Services from '../components/Services';
import { useEffect } from 'react';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Services />
      
      {/* Additional context or CTA specifically for the full services page if needed */}
      <div className="bg-gray-50 dark:bg-slate-900/50 py-24 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1d2d45] dark:text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            While our service model covers core business needs, we specialize in tailoring our approach 
            to your specific organizational challenges.
          </p>
          <a 
            href="/get-started" 
            className="inline-flex items-center justify-center bg-[#324a70] dark:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-[#1d2d45] dark:hover:bg-blue-500 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
