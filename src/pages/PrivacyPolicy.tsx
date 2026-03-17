import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, MapPin } from 'lucide-react';
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

        <div className="prose prose-blue max-w-none space-y-16">
          {/* 1. Introduction & Scope */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Shield size={28} className="text-blue-600" />
              <h2 className="text-3xl font-bold m-0">1. Introduction & Scope</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              At **THINKBASE ADVISORY**, we treat your privacy with the highest importance. This Data Protection Privacy Policy details the measures we take to preserve and protect your personal information in accordance with the Nigerian Data Protection Regulation (NDPR) and other applicable international data protection standards. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              This policy applies to all personal data collected through our website, electronic communications, and during the course of our business advisory services. By using our platform, you expressly consent to the collection and processing of your data as described herein.
            </p>
          </section>

          {/* 2. Detailed Data Categories */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Eye size={28} className="text-blue-600" />
              <h2 className="text-3xl font-bold m-0">2. Categories of Personal Data</h2>
            </div>
            <p className="text-gray-700">We may collect, use, store and transfer different kinds of Personal Data about you, grouped as follows:</p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              {[
                {
                  title: "Identity Data",
                  items: ["Full Name", "Title", "Username", "Date of Birth", "Gender"]
                },
                {
                  title: "Contact Data",
                  items: ["Residential/Business Address", "Email Address", "Telephone Numbers"]
                },
                {
                  title: "Technical Data",
                  items: ["IP Address", "Browser Type/Version", "Time Zone Setting", "Browser Plug-ins", "Operating System/Platform"]
                },
                {
                  title: "Usage Data",
                  items: ["Website Interaction Patterns", "Page Response Times", "Download Errors", "Page Interaction Information"]
                },
                {
                  title: "Profile Data",
                  items: ["Service Preferences", "Feedback/Survey Responses", "Marketing Preferences"]
                },
                {
                  title: "Marketing & Communications",
                  items: ["Preferences in receiving marketing materials", "Communication history"]
                }
              ].map((category, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-blue-100 transition-colors shadow-sm">
                  <h3 className="text-lg font-bold text-[#1d2d45] mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Comprehensive Purposes for Processing */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#324a70]">
              <FileText size={28} className="text-blue-600" />
              <h2 className="text-3xl font-bold m-0">3. Purpose and Legal Basis</h2>
            </div>
            <p className="text-gray-700">We collect and process your Personal Data for the following specific purposes:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-4 font-bold text-[#1d2d45]">Purpose/Activity</th>
                    <th className="p-4 font-bold text-[#1d2d45]">Type of Data</th>
                    <th className="p-4 font-bold text-[#1d2d45]">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4">To register you as a new client</td>
                    <td className="p-4 text-xs">Identity, Contact</td>
                    <td className="p-4 text-xs font-medium">Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className="p-4">To deliver services and manage relationships</td>
                    <td className="p-4 text-xs">Identity, Contact, Profile</td>
                    <td className="p-4 text-xs font-medium">Performance of a contract / Legal obligation</td>
                  </tr>
                  <tr>
                    <td className="p-4">To improve our website and services via analytics</td>
                    <td className="p-4 text-xs">Technical, Usage</td>
                    <td className="p-4 text-xs font-medium">Legitimate interests (business improvement)</td>
                  </tr>
                  <tr>
                    <td className="p-4">To notify you of policy changes or relevant events</td>
                    <td className="p-4 text-xs">Identity, Contact, Marketing</td>
                    <td className="p-4 text-xs font-medium">Legal obligation / Consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Subject Access Request (SAR) Procedures */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Lock size={28} className="text-blue-600" />
              <h2 className="text-3xl font-bold m-0">4. Subject Access Request (SAR) Procedure</h2>
            </div>
            <p className="text-gray-700">You have specific rights regarding your data. To exercise these rights, we follow a structured procedure:</p>
            
            <div className="space-y-4">
              {[
                {
                  step: "Initial Request",
                  detail: "Submit a formal request to privacy@thinkbaseadvisory.com. We will acknowledge receipt within 5 working days."
                },
                {
                  step: "Identity Verification",
                  detail: "For security, we will verify your identity using valid government-issued ID before processing any request."
                },
                {
                  step: "Gathering Information",
                  detail: "Once verified, we coordinate the collection of all relevant data in a concise, transparent, and intelligible format."
                },
                {
                  step: "Response Timeframe",
                  detail: "We aim to respond within 30 days. For complex requests, we may extend this and will keep you informed."
                },
                {
                  step: "Fees",
                  detail: "SARs are generally processed free of charge. However, manifestly unfounded or excessive requests may incur a reasonable fee."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-blue-50/30 rounded-2xl border border-blue-100/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 shadow-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d2d45] mb-1">{item.step}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Security breach Handling */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-[#324a70]">
              <Shield size={28} className="text-blue-600" />
              <h2 className="text-3xl font-bold m-0">5. Security Breach Management</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We have put in place physical, electronic, and procedural processes to safeguard your information. In the unlikely event of a personal data breach, we have a rigorous management procedure:
            </p>
            <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100 border-l-4 border-l-red-400">
              <h4 className="font-bold text-red-900 mb-2">Notification Protocol</h4>
              <p className="text-sm text-red-800">
                All significant breaches will be notified to the National Information Technology Development Agency (NITDA) within **72 hours** of discovery. Where the breach risks your rights and freedoms, we will notify you immediately with steps taken to mitigate the impact.
              </p>
            </div>
          </section>

          {/* 6. Legal Glossary */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1d2d45]">6. Glossary of Terms</h2>
            <div className="space-y-6">
              {[
                { term: "Data Controller", def: "A person or entity responsible for determining the purpose and manner in which personal data is processed." },
                { term: "NDPR", def: "The Nigerian Data Protection Regulation, which governs data privacy and security in Nigeria." },
                { term: "Processing", def: "Any activity involving the use of personal data, including obtaining, recording, holding, or carrying out operations such as organizing or deleting data." },
                { term: "NITDA", def: "National Information Technology Development Agency, the regulatory body for data protection in Nigeria." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-blue-200 pl-4 py-1">
                  <p className="text-sm font-bold text-[#1d2d45]">{item.term}</p>
                  <p className="text-sm text-gray-600">{item.def}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1d2d45] to-[#324a70] p-10 md:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="relative z-10 space-y-8 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold">Privacy Contact Center</h2>
              <p className="text-blue-100 text-lg">
                We welcome any queries or requests you may have regarding our data protection policies or privacy practices.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <Mail className="mx-auto mb-3 text-blue-300" />
                  <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Email Our DPO</p>
                  <p className="text-lg font-medium break-all">info@thinkbaseadvisory.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                  <MapPin className="mx-auto mb-3 text-blue-300" />
                  <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Corporate Office</p>
                  <p className="text-sm font-medium">Suite 100, Adeola house, Opebi Ikeja, Lagos</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
