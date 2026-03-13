import { ArrowRight } from 'lucide-react';

const servicePhases = [
  {
    id: '1',
    title: 'Customer Experience',
    description: 'Understanding how customers actually experience your business and identifying areas for improvement.',
    image: 'assets/support.jpg',
    shortDescription: 'We take customer experience audits and mystery shopping that reveal real service gaps, Customer Retention and Engagement Advisory.'
  },
  {
    id: '2',
    title: 'Services and Controls',
    description: 'Strengthening internal processes, operational discipline, and risk management practices.',
    image: 'assets/risk.jpg',
    shortDescription: 'We provide capacity building and training to support effective implementation of systems, strengthen risk awareness, and promote a strong control culture within organisations.'
  },
  {
    id: '3',
    title: 'Business Advisory Services',
    description: 'Supporting organisations with practical strategies and operational improvements that drive sustainable growth.',
    image: 'assets/business-support.jpg',
    shortDescription: 'We provide practical advisory support to organisations seeking to improve performance and growth.'
  },
];

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
          {servicePhases.map((service) => (
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
                <h3 className="text-xl font-bold text-[#1d2d45] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">{service.description}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>

                <a
                  className="inline-flex items-center justify-center gap-2 bg-[#324a70] text-white px-6 py-2 rounded-lg hover:bg-[#1d2d45] transition-all duration-300 font-medium text-sm"
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}