import React, { useState } from 'react';
import { X, Users, CheckCircle2, Send } from 'lucide-react';

export default function VolunteerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    skill: 'Teaching / Education',
    availability: 'Weekends'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-gray-100" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-brand-red p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-red-100/20 p-2.5 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl">Join as a Karyakarta / Volunteer</h3>
              <p className="text-xs text-gray-200">Give your time and skills for Bharat's revival</p>
            </div>
          </div>
        </div>

        {/* Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="font-heading font-black text-3xl text-gray-900">
                Application Submitted!
              </h4>
              <p className="text-gray-600 text-base max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>! Our district team in <strong>{formData.city}</strong> will reach out to you within 48 hours on {formData.phone}.
              </p>
            </div>

            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-brand-red text-white font-extrabold px-8 py-3.5 rounded-xl shadow-md hover:bg-red-700 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  City / District *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Delhi, Jaipur, Lucknow"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Primary Skill / Interest
              </label>
              <select
                value={formData.skill}
                onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red text-sm bg-white"
              >
                <option value="Teaching / Education">Teaching Slum Children (Saraswati School)</option>
                <option value="Gauseva / Animal Ambulance">Gauseva & Veterinary Aid</option>
                <option value="Women Skill Center Training">Women Skill Center Training</option>
                <option value="Disaster Relief Ground Karyakarta">Disaster Relief Ground Karyakarta</option>
                <option value="Legal Aid / Advocacy">Legal Aid & Documentation Support</option>
                <option value="Digital Media / Content">Social Media & Communications</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Availability
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-red text-sm bg-white"
              >
                <option value="Weekends">Weekends (4-6 hrs/week)</option>
                <option value="Full-time">Full-time Ground Karyakarta</option>
                <option value="Remote Digital">Remote / Online Support</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-red-700 text-white font-black text-lg py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-5 h-5" />
              <span>Submit Application</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
