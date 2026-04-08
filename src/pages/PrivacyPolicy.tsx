import { ArrowLeft, Shield, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#1d2d45] dark:hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1d2d45] dark:text-white mb-4">Privacy & Cookie Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: March 17, 2026</p>
        </div>

        <div className="prose prose-blue dark:prose-invert max-w-none space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70] dark:text-blue-400">
              <Shield size={24} />
              <h2 className="text-2xl font-bold m-0 dark:text-white">Introduction</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At THINKBASE ADVISORY, we treat your privacy with the highest importance. Our Data Protection Privacy Policy details the measures we take to preserving and safely guarding your privacy when you visit our website or communicate with our personnel. This policy has been approved and provided by our legal advisors.They include:
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70] dark:text-blue-400">
              <Eye size={24} />
              <h2 className="text-2xl font-bold m-0 dark:text-white">Privacy Policy</h2>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">Data Collection</h3>
              <p className="text-black dark:text-gray-300">
                We may collect personal details such as your name, email address, phone number, and company name when you voluntarily provide them through our contact forms or when requesting services.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">How your Personal Data is Used</h3>
              <p className="text-black dark:text-gray-300">
                Primarily, we collect, process and store your Personal Data to help us to:
              </p>
                <ul className='flex flex-col gap-4 ml-5 text-black dark:text-gray-300 list-disc'>
                    <li>Monitor, review, evaluate and improve your experience when you visit our website</li>
                    <li>Notify you of changes to our websites or relevant processes.</li>
                    <li>Process or manage your appointments with any of our staff.</li>
                </ul>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">Change of Purpose</h3>
              <p className="text-black dark:text-gray-300">
                We will only use your Personal Data for the aforementioned purposes, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.If we need to use your Personal Data for an unrelated purpose, we will notify you and request for your express consent.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">Persons who have access to your Personal Data</h3>
              <p className="text-black dark:text-gray-300">
                We respect your privacy and are committed to protecting your personal information. Only authorized employees and representatives of THINKBASE ADVISORY have access to your personal data for the purpose of operating our services. 
                We do not sell, trade, or rent your personal information to third parties. We do not share your data with third parties for their marketing or promotional purposes
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">Data Security</h3>
              <p className="text-black dark:text-gray-300">
                Information submitted by you is stored on secure servers we have which are encrypted and access is restricted to only authorised persons in charge of maintaining the servers. We have put in place physical, electronic and procedural processes that safeguard and protect your information against unauthorised access, modification or erasure. However, we cannot guarantee 100% security as no security programme is completely fool proof. In the unlikely event that we experience any breach to your personal data, such breach shall be handled in accordance with our Personal Data Breach Management Procedures
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">Retention of Personal Data</h3>
              <p className="text-black dark:text-gray-300">
                We retain your Personal Data for no longer than reasonably necessary for the purposes set out in this Policy and in accordance with legal, regulatory, tax, accounting or reporting requirements.
                We may retain your Personal Data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the Personal Data, the potential risk of harm from unauthorised use or disclosure of your Personal Data, the purposes for which we process your Personal Data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                Where your Personal Data is contained within a document, the retention period applicable to such type of document in our document retention policy shall apply.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl space-y-4 border border-gray-100 dark:border-white/5 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d2d45] dark:text-blue-400">Your Personal Data Rights</h3>
              <div className="text-black dark:text-gray-300">
                Data Protection Laws provides you with certain rights in relation to the information that we collect about you.
                <ul className='flex flex-col gap-4 ml-5 mt-5 list-disc'>
                    <li>The right to withdraw consent previously given to us or our Affiliated Third Parties. In order to make use of your personal data, we would have obtained your consent. For consent to be valid, it must be given voluntarily. In line with regulatory requirements, consent cannot be implied, and we ensure that you have the opportunity to read our data protection privacy policy before you provide your consent. Consent in respect of Sensitive Personal Data must be explicit and will be given by you in writing to us. The consent of minors (under the age of 18) will always be protected and obtained from the minor’s representatives in accordance with applicable regulatory requirements.</li>
                    <li>You can ask us or Affiliated Third Parties to stop sending you marketing messages at any time by unsubscribe or unchecking relevant boxes to adjust your marketing preferences or by following the opt-out links on any marketing message sent to you.</li>
                    <li>The right to request that we delete your Personal Data that is in our possession, subject however to retention required for legal purposes and the time required technically to delete such information.</li>
                    <li>The right to request for access to your Personal Data or object to us processing the same. Where personal data is held electronically in a structured form, such you have a right to receive that data in a common electronic format.</li>
                    <li>The right to update your Personal Data that is kept with us. You may do this at anytime your personal data changes and you wish to update us.</li>
                    <li>The right to lodge a complaint</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70] dark:text-blue-400">
              <FileText size={24} />
              <h2 className="text-2xl font-bold m-0 dark:text-white">Cookie Policy</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 border border-gray-100 dark:border-white/5 rounded-xl bg-white dark:bg-slate-900/30">
                <h4 className="font-bold text-[#1d2d45] dark:text-white mb-2">Essential Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Necessary for the website to function properly. They cannot be disabled.</p>
              </div>
              <div className="p-5 border border-gray-100 dark:border-white/5 rounded-xl bg-white dark:bg-slate-900/30">
                <h4 className="font-bold text-[#1d2d45] dark:text-white mb-2">Analytics Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Help us understand how visitors interact with the site, allowing us to improve our services.</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-sm italic pt-4">
              You can manage your cookie choices through our consent banner or by adjusting your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section className="bg-[#1d2d45] dark:bg-slate-900 p-8 rounded-3xl text-white border border-white/5">
            <h2 className="text-2xl font-bold mb-4 dark:text-blue-400">Contact Our Privacy Team</h2>
            <p className="mb-6 opacity-90 text-gray-200">
              For any questions regarding this policy or your personal data rights, please contact us at:
            </p>
            <div className="space-y-2 font-medium">
              <p>Email: info@thinkbaseadvisory.com</p>
              <p>Address: Suite 100, Adeola house, Opebi Ikeja, Lagos</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}