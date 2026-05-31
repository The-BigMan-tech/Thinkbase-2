import { Mail, Phone, MapPin } from 'lucide-react';
import { MapLocationIcon } from './CustomIcons';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h2 className='font-bold text-5xl text-[#1d2d45] dark:text-white'>Contact us</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Ready to understand your customers better and strengthen your business?
                            Let's discuss how we can help you build sustainable growth through operational excellence.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {[
                          { icon: <Mail />, label: 'Email Us', value: 'info@thinkbaseadvisory.com', color: 'bg-blue-50 dark:bg-blue-900/30 text-[#3b5d91] dark:text-blue-300' },
                          { icon: <Phone />, label: 'Call Us', value: '+234-911-999-0083', color: 'bg-indigo-50 dark:bg-indigo-900/30 text-[#3b5d91] dark:text-indigo-300' },
                          { icon: <MapPin />, label: 'Visit Us', value: 'Suite 100, Adeola house, Opebi Ikeja, Lagos', color: 'bg-gray-50 dark:bg-slate-800 text-[#3b5d91] dark:text-gray-300' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-6 group">
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                              <p className="text-lg font-bold text-[#1d2d45] dark:text-white">{item.value}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>

                <div className="relative group flex justify-center items-center py-12">
                    {/* Artistic Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent dark:from-blue-400/5 rounded-full blur-[120px] pointer-events-none"></div>
                    
                    {/* The Custom Icon - Scaled up for the hero-like contact section */}
                    <div className="relative z-10 scale-[1.5] md:scale-[2.5] lg:scale-[3] transition-transform duration-700 hover:scale-[1.6] md:hover:scale-[2.6] lg:hover:scale-[3.1]">
                      <MapLocationIcon size={120} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

