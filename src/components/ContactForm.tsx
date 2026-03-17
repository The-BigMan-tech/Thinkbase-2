import { Send, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Web3Forms Access Key
      const accessKey = '84a22b3a-e449-48d5-aeab-329319563af7';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Thinkbase Website',
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="relative">
      <div className="bg-[#324a70]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(29,45,69,0.2)] border border-white/10 relative z-10 overflow-hidden">
        {/* Internal glow effect */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        
        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-white" />
              Send a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-white ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-white ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-white ml-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                  placeholder="+234 000 000 0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-white ml-1">Company</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all shadow-sm"
                  placeholder="Your Company"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-white ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#3b5d91]/30 focus:ring-4 focus:ring-[#3b5d91]/5 outline-none transition-all resize-none shadow-sm"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              {error && (
                <p className="text-red-300 text-sm font-medium ml-1">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1d2d45] text-white px-8 py-4 rounded-2xl hover:bg-[#3b5d91] transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-[#1d2d45]/10 mt-2"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 size={48} className="text-white" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
              <p className="text-blue-50 text-lg leading-relaxed px-4">
                Thank you for reaching out. We've sent a confirmation to your email. We are thrilled to have you join us on this journey!
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-white/60 hover:text-white transition-colors text-sm font-medium underline"
            >
              Send another message
            </button>
          </div>
        )}
      </div>
      {/* Decorative element */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
