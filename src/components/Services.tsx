import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#1d2d45] mb-6">Our Service Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive framework designed to understand your business, identify opportunities, and implement sustainable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-center h-48 overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[50%] h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-[#1d2d45] mb-2">{service.title}</h3>
                <p className=" text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#324a70] text-white px-6 py-2 rounded-lg hover:bg-[#1d2d45] transition-all duration-300 font-medium text-sm mt-auto"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}