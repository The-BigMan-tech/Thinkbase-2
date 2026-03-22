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
      const accessKey = '84a22b3a-e449-48d5-aeab-329319563af7';
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Thinkbase Website',
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch {
      setError('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative w-full">
      <div className="bg-[#15284a]/80 dark:bg-slate-900/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative z-10">
        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-white" />
              Send a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-white ml-1">Full Name</label>
                  <input
                    type="text" id="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-[#1d2d45] dark:text-white outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-white ml-1">Email Address</label>
                  <input
                    type="email" id="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-[#1d2d45] dark:text-white outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-white ml-1">Phone Number</label>
                  <input
                    type="tel" id="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-[#1d2d45] dark:text-white outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                    placeholder="+234..."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-white ml-1">Company</label>
                  <input
                    type="text" id="company" value={formData.company} onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-[#1d2d45] dark:text-white outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-white ml-1">Message</label>
                <textarea
                  id="message" required value={formData.message} onChange={handleChange} rows={5}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl text-[#1d2d45] dark:text-white outline-none focus:ring-4 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

              <button
                type="submit" disabled={isSubmitting}
                className="w-full bg-[#1a2c4e] text-white px-8 py-5 rounded-2xl hover:bg-[#223a67] transition-all flex items-center justify-center gap-3 font-bold text-lg"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-8">
            <CheckCircle2 size={64} className="text-green-400 mx-auto" />
            <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
            <button onClick={() => setIsSubmitted(false)} className="text-white/60 underline">Send another</button>
          </div>
        )}
      </div>
    </div>
  );
}