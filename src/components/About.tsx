import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CoreValues from './CoreValues';

const keyObjectives = [
    { text: 'Reduce silent customer loss through structured engagement.', icon: <Users className="w-6 h-6" /> },
    { text: 'Deliver insights and training to transform interactions.', icon: <Lightbulb className="w-6 h-6" /> },
    { text: 'Implement practical tools for SME operational excellence.', icon: <Target className="w-6 h-6" /> },
    { text: 'Strengthen systems and controls for sustainable growth.', icon: <TrendingUp className="w-6 h-6" /> }
];

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-slate-950 transition-colors duration-500 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-[5%]">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-5xl font-bold text-[#1d2d45] dark:text-white mb-6">About</h1>
                        <h2 className="text-5xl font-bold text-[#1d2d45] dark:text-white underline decoration-[#4c71a9] decoration-4 underline-offset-4">ThinkBase Advisory</h2>
                    </div>    
                    <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            Thinkbase Advisory is a customer experience-led business advisory firm focused on helping organisations improve service delivery, strengthen operational systems, and enhance business performance.
                        </p>    
                        <p>
                            Many businesses invest heavily in attracting customers but pay less attention to the systems, processes, and behaviours that determine whether those customers return.
                        </p>    
                        <div className="pt-4">
                            <Link 
                                to="/get-started" 
                                className="inline-flex items-center gap-2 bg-[#324a70] dark:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1d2d45] dark:hover:bg-blue-500 hover:shadow-xl transition-all duration-300 group"
                            >
                                Get Started
                                <TrendingUp size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>  

                <div className="relative flex items-center justify-center">
                    <div className="order-1 lg:order-2 space-y-12">
                        <h3 className="text-4xl font-bold text-[#1d2d45] dark:text-white">Key Objectives</h3>
                        <div className="grid gap-8">
                            {keyObjectives.map((obj, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#3b5d91] dark:text-blue-300 group-hover:bg-[#3b5d91] dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                                        {obj.icon}
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed group-hover:text-[#1d2d45] dark:group-hover:text-white transition-colors">
                                            {obj.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        <CoreValues/>
    </section>
  );
}