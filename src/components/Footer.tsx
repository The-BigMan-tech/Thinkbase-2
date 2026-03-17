import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1d2d45] dark:bg-slate-950 text-gray-300 py-16 border-t border-white/5 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold tracking-tight">THINKBASE ADVISORY</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Thinkbase Advisory is a customer experience-led business advisory firm focused on helping organisations improve service delivery, strengthen operational systems, and enhance business performance.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#3b5d91] hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-blue-400 transition-colors font-medium">Services</Link></li>
              <li><Link to="/#about" className="hover:text-blue-400 transition-colors font-medium">About Us</Link></li>
              <li><Link to="/get-started" className="hover:text-blue-400 transition-colors font-semibold">Get Started</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/service/customer-experience" className="hover:text-blue-400 transition-colors">Customer Experience</Link></li>
              <li><Link to="/service/systems-and-controls" className="hover:text-blue-400 transition-colors">Systems & Controls</Link></li>
              <li><Link to="/service/business-advisory-services" className="hover:text-blue-400 transition-colors">Business Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span className="opacity-80">info@thinkbaseadvisory.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span className="opacity-80">+234-911-999-0083</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span className="opacity-80">Suite 100, Adeola house, Opebi Ikeja, Lagos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} THINKBASE ADVISORY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
