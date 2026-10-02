import React, { useState } from 'react';
import { ArrowLeft, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import contactData from '../data/contactInfo.json';

export default function ContactPage({ onNavigateHome, onOpenDonate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
          <span className="font-heading font-bold text-[#CC444B] text-base sm:text-lg">
            Connect With Us
          </span>
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-tight">
          Contact <span className="text-[#CC444B]">JSWS</span>
        </h1>

        <p className="font-sans text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions about our initiatives, center locations, donations, or volunteer opportunities? Reach out and our team will be glad to assist you.
        </p>
      </div>

      {/* Contact Cards & Form Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Email Card */}
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-[#CC444B] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900">
                Official Email
              </h3>
              <p className="font-sans text-xs text-gray-500">
                For general inquiries, 80G tax receipts, donations & center visits:
              </p>
              <a 
                href={`mailto:${contactData.email}`}
                className="font-heading font-bold text-base text-[#CC444B] hover:underline block"
              >
                {contactData.email}
              </a>
            </div>

            {/* Social & Handle Card */}
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-heading font-bold text-base">
                𝕏
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900">
                Social Network & Updates
              </h3>
              <p className="font-sans text-xs text-gray-500">
                Follow real-time ground updates, rescue videos, and announcements:
              </p>
              <a 
                href={contactData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-base text-[#CC444B] hover:underline block"
              >
                @JanSwabh on X →
              </a>
            </div>

            {/* Location & Organization Details */}
            <div className="p-6 bg-[#CC444B] text-white rounded-3xl space-y-3 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" />
                <h3 className="font-heading font-bold text-lg">
                  Registered Operations Hub
                </h3>
              </div>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                Jan Swabhiman Welfare Society<br />
                Delhi NCR & Noida Operations Hub, Bharat<br />
                {contactData.registration}
              </p>
              <div className="pt-2 border-t border-white/20 text-xs text-white/80 font-sans">
                {contactData.tagline}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl text-left">
            <h3 className="font-heading font-black text-2xl text-gray-900 mb-6">
              Send Us a Direct Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-black text-2xl text-gray-900">
                  Message Sent Successfully!
                </h4>
                <p className="font-sans text-sm text-gray-600 max-w-sm mx-auto">
                  Pranam, {formData.name}. We have received your message and will respond to {formData.email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Subject *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Regarding Donation / Volunteering / Seva Center / General"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Message *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-black text-base py-3.5 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
