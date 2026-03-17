import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h2 className='font-bold text-5xl text-[#1d2d45]'>Contact us</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to understand your customers better and strengthen your business?
                            Let's discuss how we can help you build sustainable growth through operational excellence.
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {[
                          { icon: <Mail />, label: 'Email Us', value: 'info@thinkbaseadvisory.com', color: 'bg-blue-50 text-[#3b5d91]' },
                          { icon: <Phone />, label: 'Call Us', value: '+234-911-999-0083', color: 'bg-indigo-50 text-[#3b5d91]' },
                          { icon: <MapPin />, label: 'Visit Us', value: 'Suite 100, Adeola house, Opebi Ikeja, Lagos', color: 'bg-gray-50 text-[#3b5d91]' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-6 group">
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                              <p className="text-lg font-bold text-[#1d2d45]">{item.value}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-[#3b5d91] rounded-3xl transform rotate-3 transition-transform group-hover:rotate-1 opacity-10"></div>
                    <div className="relative bg-white p-4 rounded-3xl shadow-xl overflow-hidden">
                        <img 
                            src="/assets/location.jpg" 
                            alt="Our Location" 
                            className="w-full h-[400px] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
