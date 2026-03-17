import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1d2d45] transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1d2d45] mb-4">Privacy & Cookie Policy</h1>
          <p className="text-gray-600">Last updated: March 17, 2026</p>
        </div>

        <div className="prose prose-blue max-w-none space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Shield size={24} />
              <h2 className="text-2xl font-bold m-0">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At THINKBASE ADVISORY, we are committed to protecting your privacy and ensuring the security of your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Eye size={24} />
              <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl space-y-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-[#1d2d45]">Personal Information</h3>
              <p className="text-gray-700">
                We may collect personal details such as your name, email address, phone number, and company name when you voluntarily provide them through our contact forms or when requesting services.
              </p>
              <h3 className="text-lg font-semibold text-[#1d2d45] pt-2">Usage Data</h3>
              <p className="text-gray-700">
                We automatically collect certain information about your device and how you interact with our website, including IP addresses, browser types, and pages visited.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70]">
              <FileText size={24} />
              <h2 className="text-2xl font-bold m-0">Cookie Policy</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 border border-gray-100 rounded-xl">
                <h4 className="font-bold text-[#1d2d45] mb-2">Essential Cookies</h4>
                <p className="text-sm text-gray-600">Necessary for the website to function properly. They cannot be disabled.</p>
              </div>
              <div className="p-5 border border-gray-100 rounded-xl">
                <h4 className="font-bold text-[#1d2d45] mb-2">Analytics Cookies</h4>
                <p className="text-sm text-gray-600">Help us understand how visitors interact with the site, allowing us to improve our services.</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic pt-4">
              You can manage your cookie choices through our consent banner or by adjusting your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Lock size={24} />
              <h2 className="text-2xl font-bold m-0">Data Security</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="bg-[#1d2d45] p-8 rounded-3xl text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h2>
            <p className="mb-6 opacity-90">
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
