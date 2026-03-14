import { Shield, Lightbulb, TrendingUp } from 'lucide-react';

const principles = [
  {
    icon: <Shield className="w-8 h-8 text-[#324a70]" />,
    title: "Uncompromising Integrity",
    description: "We believe that trust is the foundation of every successful business relationship. Our advice is always honest, transparent, and in your best interest."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#324a70]" />,
    title: "Strategic Innovation",
    description: "In a rapidly changing world, traditional solutions aren't always enough. We bring fresh perspectives and innovative strategies to keep your business ahead."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#324a70]" />,
    title: "Execution Excellence",
    description: "Planning is only half the battle. We focus on practical, actionable improvements that drive real-world results and sustainable growth."
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2d45] mb-6">Our Core Principles</h2>
          <div className="w-24 h-1 bg-[#324a70] mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do, ensuring that our partnership delivers lasting value to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#324a70] group-hover:text-white transition-colors duration-300">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1d2d45] mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "{principle.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
