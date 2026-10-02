import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, Award, FileText, Send, Building2, Heart } from 'lucide-react';
import csrData from '../data/csrInfo.json';

export default function CsrPage({ onNavigateHome, onOpenDonate }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    budget: '',
    programInterest: 'Saraswati (Education)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-5 pb-3">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
          <span className="font-heading font-semibold text-[#CC444B] text-base sm:text-lg">
            Corporate Social Responsibility
          </span>
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight max-w-4xl mx-auto leading-tight">
          Fulfil your CSR mandate with work you can <span className="text-[#CC444B]">see, verify, and stand behind.</span>
        </h1>

        <p className="font-sans text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {csrData.intro}
        </p>

        {/* Credentials Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {csrData.credentials.map((cred, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-2 bg-red-50 text-[#CC444B] px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-bold border border-red-100 shadow-xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{cred}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Feature Highlights Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {csrData.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#CC444B] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule VII Mapping Table */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-8 text-left space-y-6">
        <div className="space-y-2">
          <h2 className="font-heading font-black text-3xl text-gray-900">
            Seven Ways to Align with Schedule VII
          </h2>
          <p className="font-sans text-sm text-gray-600">
            From education to disaster relief, our programs map directly to Schedule VII categories under the Companies Act, 2013.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-900 font-heading font-bold">
                <th className="py-4 px-6">Program / Initiative</th>
                <th className="py-4 px-6">On-Ground Seva Action</th>
                <th className="py-4 px-6">Schedule VII Category Mapping</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {csrData.scheduleVII.map((row, idx) => (
                <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                  <td className="py-4 px-6 font-heading font-bold text-gray-900">
                    {row.program}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {row.activity}
                  </td>
                  <td className="py-4 px-6 text-[#CC444B] font-semibold">
                    {row.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSR Partner With Us Form Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-12">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-600/30 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Corporate Partnerships Desk</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
                Partner with JSWS for Lasting Ground Impact
              </h2>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                Connect directly with our CSR lead for project proposals, budget breakdowns, audited statements, and compliance kits.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Email: <a href="mailto:mailus@janswabhiman.org" className="text-white hover:underline">mailus@janswabhiman.org</a></p>
                <p>Official Handle: <a href="https://x.com/JanSwabh" target="_blank" rel="noreferrer" className="text-white hover:underline">@JanSwabh on X</a></p>
                <p>Location: Delhi NCR / Noida Operations Hub</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white text-gray-900 p-8 rounded-2xl shadow-xl text-left">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-gray-900">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="font-sans text-sm text-gray-600 max-w-md mx-auto">
                    Our CSR Partnerships Team has received your inquiry and will connect with your compliance officer within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                    Request CSR Partnership Proposal
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Company / Organization *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={e => setFormData({...formData, companyName: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Contact Person *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Full Name & Title"
                        value={formData.contactPerson}
                        onChange={e => setFormData({...formData, contactPerson: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Corporate Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Program of Primary Interest</label>
                    <select
                      value={formData.programInterest}
                      onChange={e => setFormData({...formData, programInterest: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                    >
                      <option>Saraswati (Free Education for Slum Children)</option>
                      <option>Women Empowerment & AtmaNirbhar Livelihoods</option>
                      <option>Pak Hindu Refugees Rehabilitation & Shelters</option>
                      <option>Gauseva & Animal Welfare Vet Care</option>
                      <option>Gaushala (Noida Sanctuary Support)</option>
                      <option>Tribal Welfare & Vanvasi Empowerment</option>
                      <option>Emergency Disaster Relief Funds</option>
                      <option>General Multi-Domain CSR Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Message or Special Requirements</label>
                    <textarea 
                      rows="3"
                      placeholder="Share your CSR objectives, preferred geography, or compliance questions..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-base py-3.5 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit CSR Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
