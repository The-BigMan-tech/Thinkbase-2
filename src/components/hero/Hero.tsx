import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section id="home" className="pt-24 pb-16 bg-white border border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-transparent text-[#253b5b] px-4 py-2 rounded-full text-sm font-medium">
                            
                        </div>
        
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Transform Customer Experience,
                            <span className="text-[#2c446b]"> Transform Your Business</span>
                        </h1>
        
                        <p className="text-lg font-sans text-black leading-relaxed">
                            Most businesses fail because customer experience is unmanaged, unmeasured, and inconsistent.
                            We help you understand your real customer experience, identify gaps, and build sustainable growth
                            through stronger operations and customer retention.
                        </p>
 
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/coming-soon" className="inline-flex items-center justify-center gap-2 bg-[#304c76] text-white px-8 py-4 rounded-lg hover:bg-[#5988ce] transition-all hover:scale-110 font-medium shadow-md">
                                Get Started
                                <ArrowRight size={20} />
                            </Link>
                            <a href="#services" className="hover:scale-105 inline-flex items-center justify-center gap-2 bg-[#cad8ec] text-black px-8 py-4 rounded-lg transition-colors font-medium shadow-sm">
                                Explore Services
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <p className="text-3xl font-bold text-gray-900">50+</p>
                                <p className="text-gray-600">years of professional experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900">3</p>
                                <p className="text-gray-600">core service pillars</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-gray-900">SME</p>
                                <p className="text-gray-600">focused approach</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b5d91] to-[#20324e] rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
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
