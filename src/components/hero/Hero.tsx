import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section id="home" className="pt-24 pb-10 bg-white dark:bg-slate-950 border border-gray-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-transparent text-[#253b5b] dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                            
                        </div>
        
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                            Transform Customer Experience,
                            <span className="text-[#2c446b] dark:text-blue-400"> Transform Your Business</span>
                        </h1>
        
                        <p className="text-lg font-sans text-black dark:text-gray-300 leading-relaxed">
                            Most businesses fail because customer experience is unmanaged, unmeasured, and inconsistent.
                            We help you understand your real customer experience, identify gaps, and build sustainable growth
                            through stronger operations and customer retention.
                        </p>
 
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/get-started" className="inline-flex items-center justify-center gap-2 bg-[#304c76] dark:bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-[#5988ce] dark:hover:bg-blue-500 transition-all hover:scale-110 font-medium shadow-md">
                                Get Started
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="hover:scale-105 inline-flex items-center justify-center gap-2 bg-[#cad8ec] dark:bg-white/10 text-black dark:text-white px-8 py-4 rounded-lg transition-colors font-medium shadow-sm">
                                Explore Services
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-4">
                            <div>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">50+</p>
                                <p className="text-gray-600 dark:text-gray-400">years of professional experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                                <p className="text-gray-600 dark:text-gray-400">core service pillars</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">SME</p>
                                <p className="text-gray-600 dark:text-gray-400">focused approach</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b5d91] to-[#20324e] dark:from-blue-900/40 dark:to-slate-900 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl dark:shadow-blue-900/20">
                            <img
                                src="assets/office.jpg"
                                alt="Business professionals analyzing data"
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
