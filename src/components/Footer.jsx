import React, { useState } from 'react';

export default function Footer({ onOpenDonate, onOpenVolunteer, setActiveTab }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const handleNav = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#333333] text-white pt-14 pb-8 px-6 md:px-16 text-left">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Top Grid: Logo & Tagline, Explore, Get Involved */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column: Logo & Taglines (5 cols) */}
          <div className="md:col-span-6 space-y-5">
            <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-md flex items-center justify-center">
              <img 
                src="/assets/jsws_logo_v2_1_141_10045.png" 
                alt="JSWS Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide">
                सेवा • संस्कार • शिक्षा • स्वाभिमान
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400">
                Registered non-profit • Tax exemptions and CSR partnerships available on request.
              </p>
            </div>
          </div>

          {/* Middle Column: Explore (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 font-sans">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('whoweare')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors">
                  What We Do
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('impact')} className="hover:text-white transition-colors">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('causes')} className="hover:text-white transition-colors">
                  Our Stories
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Glimpses of Seva
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Get involved (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Get involved
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 font-sans">
              <li>
                <button onClick={onOpenVolunteer} className="hover:text-white transition-colors">
                  Volunteer
                </button>
              </li>
              <li>
                <button onClick={onOpenDonate} className="hover:text-white transition-colors">
                  Donate
                </button>
              </li>
              <li>
                <button onClick={onOpenVolunteer} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={onOpenVolunteer} className="hover:text-white transition-colors">
                  CSR Partnerships
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Section (from Figma image 4) */}
        <div className="space-y-3 max-w-lg">
          <h4 className="font-heading font-bold text-base text-white">
            Newsletter
          </h4>
          <p className="font-sans text-xs text-gray-400">
            Occasional updates on our work, volunteer openings, and relief drives. No spam.
          </p>

          <form onSubmit={handleSubscribe} className="bg-white rounded-2xl p-3 shadow-lg flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-grow text-left px-2">
              <label className="block text-[10px] font-bold uppercase text-gray-500">
                Email
              </label>
              <input 
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black text-sm focus:outline-none placeholder-gray-400 font-sans py-0.5"
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#D2E6FF] hover:bg-[#b8d7ff] text-black font-heading font-bold text-sm px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-gray-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans">
          <div>
            © 2026 Janswabhiman Welfare Society. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="cursor-pointer hover:text-white">Privacy policy</span>
            <span className="cursor-pointer hover:text-white">Terms & conditions</span>
            <span className="cursor-pointer hover:text-white">Disclaimer</span>
            <span className="cursor-pointer hover:text-white">Refund policy</span>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center text-xs font-bold transition-colors"
            title="Scroll to Top"
          >
            ✕
          </button>
        </div>

      </div>
    </footer>
  );
}
