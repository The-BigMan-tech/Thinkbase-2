import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data/services';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1d2d45] transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to all services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-[#324a70] text-sm font-semibold mb-6">
              Expert Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1d2d45] mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.tagline}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#324a70] to-[#1d2d45] opacity-10 blur-2xl rounded-3xl" />
            <img 
              src={service.image} 
              alt={service.title} 
              className="relative left-[25%] w-[45%] h-[50%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-[#1d2d45] mb-8">Service Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  {service.description} {service.shortDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.details.map((detail, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#1d2d45] mb-4">{detail.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{detail.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1d2d45] rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-blue-400 shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-[#1d2d45] mb-4">Need this service?</h3>
                <p className="text-gray-600 mb-8">
                  Contact us today to discuss how we can tailor this solution to your specific organization needs.
                </p>
                <Link 
                  to="/coming-soon" 
                  className="block w-full text-center bg-[#324a70] text-white py-4 rounded-xl font-bold hover:bg-[#1d2d45] transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section/Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold text-[#1d2d45] mb-8">Ready to transform your business?</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Our advisors are ready to help you navigate your challenges and unlock new opportunities for growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/coming-soon" className="bg-[#1d2d45] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-lg">
            Get Started
          </Link>
          <Link to="/" className="bg-white border-2 border-[#1d2d45] text-[#1d2d45] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors text-lg">
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
