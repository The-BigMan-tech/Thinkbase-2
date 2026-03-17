import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { GearsIcon, AnalysisBoardIcon } from './CustomIcons';

const iconMap = {
  Users: Users,
  Gears: GearsIcon,
  AnalysisBoard: AnalysisBoardIcon,
};

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
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group"
              >
                <div className="flex justify-center items-center h-64 bg-gray-50/50 p-8">
                  <div className="w-28 h-28 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#324a70] group-hover:scale-110 group-hover:bg-[#324a70] group-hover:text-white transition-all duration-500">
                    {IconComponent && <IconComponent size={64} strokeWidth={1.5} />}
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}