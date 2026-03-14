import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className='font-bold text-5xl'>Contact us</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to understand your customers better and strengthen your business?
                Let's discuss how we can help you build sustainable growth through operational excellence.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                { icon: <Mail />, label: 'Email Us', value: 'info@thinkbaseadvisory.com', color: 'bg-blue-50 text-[#3b5d91]' },
                { icon: <Phone />, label: 'Call Us', value: '+234-911-999-0083', color: 'bg-indigo-50 text-[#3b5d91]' },
                { icon: <MapPin />, label: 'Visit Us', value: 'Suite 100,Adeola house,Opebi Ikeja,Lagos', color: 'bg-gray-50 text-[#3b5d91]' }
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

          <div className="relative">
            <div className="bg-[#324a70]/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(29,45,69,0.2)] border border-white/10 relative z-10 overflow-hidden">
              {/* Internal glow effect */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="text-white" />
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-white ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-white ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-white ml-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-white ml-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all resize-none shadow-sm"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1d2d45] text-white px-8 py-5 rounded-2xl hover:bg-[#3b5d91] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-[#1d2d45]/10"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}