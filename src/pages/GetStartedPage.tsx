import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function GetStartedPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#1d2d45] dark:hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#1d2d45] dark:text-white mb-6 leading-tight">
            Let's Start Your <span className="text-[#324a70] dark:text-blue-400">Journey</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We're excited to partner with you. Tell us a bit about your organization and how we can help you achieve excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-[#1d2d45] dark:bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Unlock Insights with a <span className="text-blue-400">Customer Experience Audit</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed md:text-lg">
                <p>
                  Many organisations are often surprised by what customers actually experience when they interact with their business.
                </p>
                <p>
                  A Customer Experience Audit from <span className="text-white font-semibold">Thinkbase Advisory</span> provides a structured assessment of service delivery, helping organisations identify service gaps, operational weaknesses, and opportunities for improvement.
                </p>
                <p>
                  Our insights not only highlight areas for improving customer experience, but also support organisations in strengthening internal processes, controls, and overall business performance.
                </p>
              </div>
            </div>
          </div>
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 pt-12 px-6 ">
                {/* Text Side - md:w-2/5 gives the form more room to grow */}
                <div className="md:w-2/5 md:sticky md:top-24">
                  <h3 className="text-4xl md:text-6xl font-bold text-[#1d2d45] dark:text-white italic leading-tight text-left">
                    Ready to transform your service delivery? 
                    <span className="block mt-4 text-2xl font-normal not-italic opacity-80">
                      Fill out the form below.
                    </span>
                  </h3>
                </div>
                
                {/* Form Side */}
                <div className="w-full md:w-3/5 max-w-4xl"> {/* Increased max-width here */}
                  <ContactForm />
                </div>

            </div>

        </div>
      </div>

      <div className="bg-gray-50 dark:bg-slate-900/50 py-24 text-center transition-colors duration-500">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1d2d45] dark:text-white mb-6">Why ThinkBase?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Experience-led advisory that transforms service delivery, strengthens systems, and protects your business growth.
          </p>
        </div>
      </div>
    </div>
  );
}
