import React, { useState } from 'react';
import { ArrowLeft, Users, CheckCircle2, Send, Heart, Sparkles } from 'lucide-react';

export default function VolunteerPage({ onNavigateHome, onOpenDonate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    availability: 'Flexible',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const domains = [
    { id: 'saraswati', title: 'Saraswati (Free Education)', desc: 'Teach or mentor children at a slum learning center' },
    { id: 'women', title: 'Women Empowerment', desc: 'Support skill training, tailoring & self-reliance workshops' },
    { id: 'refugees', title: 'Pak Hindu Refugees Rehabilitation', desc: 'Help with resettlement, school admissions & relief kits' },
    { id: 'gauseva', title: 'Gauseva & Animal Welfare', desc: 'Join gausevak teams on rescue and medical emergency runs' },
    { id: 'gaushala', title: 'Gaushala (Noida)', desc: 'Support daily gaugraas, medical care, and sanctuary work' },
    { id: 'tribal', title: 'Tribal Welfare', desc: 'Support village-level cultural, sporting, and welfare events' },
    { id: 'relief', title: 'Emergency Relief Work', desc: 'Join emergency response teams during floods and natural crises' }
  ];

  const handleInterestToggle = (title) => {
    setFormData(prev => {
      const exists = prev.interests.includes(title);
      return {
        ...prev,
        interests: exists 
          ? prev.interests.filter(i => i !== title) 
          : [...prev.interests, title]
      };
    });
  };

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
          <span className="font-heading font-bold text-[#CC444B] text-base sm:text-xl">
            सेवा में हाथ बढ़ाएँ
          </span>
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-tight">
          Join the Movement of <span className="text-[#CC444B]">Ground Seva</span>
        </h1>

        <p className="font-sans text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Seva takes many forms here — teaching at Saraswati centres, supporting gausevaks on animal rescue, helping at Tribal Welfare village events, assisting refugee resettlement, and showing up for emergency relief.
        </p>
      </div>

      {/* 7 Domains Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-8">
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 text-left mb-6">
          Seven Domains of Seva — Where You Can Help
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domains.map((dom) => {
            const isSelected = formData.interests.includes(dom.title);
            return (
              <div 
                key={dom.id}
                onClick={() => handleInterestToggle(dom.title)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer text-left flex flex-col justify-between group ${
                  isSelected 
                    ? 'border-[#CC444B] bg-red-50/70 shadow-md ring-2 ring-[#CC444B]/20' 
                    : 'border-gray-200 bg-white hover:border-[#CC444B] hover:shadow-md'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-[#CC444B] flex items-center justify-center text-xs font-heading font-black">
                      {dom.title.slice(0, 1)}
                    </span>
                    <input 
                      type="checkbox" 
                      checked={isSelected}
                      onChange={() => {}}
                      className="w-4 h-4 accent-[#CC444B] rounded"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-base text-gray-900 group-hover:text-[#CC444B] transition-colors">
                    {dom.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {dom.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-gray-100 text-xs font-heading font-bold text-[#CC444B]">
                  <span>{isSelected ? '✓ Selected' : '+ Click to Select'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Volunteer Application Form */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-16 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl text-left space-y-6">
          
          <div className="border-b border-gray-100 pb-4">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-gray-900">
              Quick Volunteer Application
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-600 mt-1">
              Share your details and availability. We route interests by programme area and our field coordinator will connect with you.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-black text-3xl text-gray-900">
                Pranam, {formData.name}!
              </h4>
              <p className="font-sans text-base text-gray-600 max-w-md mx-auto">
                Thank you for stepping forward for seva. Our volunteer coordinator will reach out to you via WhatsApp / Phone ({formData.phone}) shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-sans text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Full Name"
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
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">WhatsApp / Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Availability</label>
                  <select
                    value={formData.availability}
                    onChange={e => setFormData({...formData, availability: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                  >
                    <option value="Flexible">Flexible (Whenever required)</option>
                    <option value="Weekend">Weekends Only</option>
                    <option value="Weekday">Weekdays Only</option>
                    <option value="FullTime">Full Time Seva Fellow</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Selected Seva Domains</label>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600">
                  {formData.interests.length > 0 
                    ? formData.interests.join(", ")
                    : "No specific domain selected yet — select any card above or leave empty for general assignment."}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Anything Else We Should Know? (Skills, Prior Experience)</label>
                <textarea 
                  rows="3"
                  placeholder="Tell us about your background, city/location, or how you wish to contribute..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#CC444B]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-black text-base py-4 rounded-xl shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Volunteer Interest</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>
      </div>

    </div>
  );
}
