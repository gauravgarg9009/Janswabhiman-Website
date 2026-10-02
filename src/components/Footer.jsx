import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenDonate, onOpenVolunteer, setActiveTab, navigateTo }) {
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

  const handleNav = (target, anchor) => {
    if (navigateTo) {
      navigateTo(target, anchor);
    } else {
      if (setActiveTab) setActiveTab(target);
      const element = document.getElementById(anchor || target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-[#2A2A2A] text-white pt-14 pb-8 px-6 md:px-16 text-left">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Top Grid: Logo & Tagline, Explore, Programmes, Get Involved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Taglines (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              className="w-20 h-20 bg-white rounded-2xl p-2 shadow-md flex items-center justify-center cursor-pointer"
              onClick={() => handleNav('home')}
            >
              <img 
                src="/assets/jsws_logo_v2_1_141_10045.png" 
                alt="JSWS Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide">
                सेवा • संस्कार • शिक्षा • स्वाभिमान
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                Jan Swabhiman Welfare Society is a registered non-profit working across 8 states in Bharat. All contributions eligible for 80G tax exemptions.
              </p>
              <div className="pt-2 text-xs font-sans text-gray-400 space-y-1">
                <p>Email: <a href="mailto:mailus@janswabhiman.org" className="text-red-300 hover:underline">mailus@janswabhiman.org</a></p>
                <p>Twitter: <a href="https://x.com/JanSwabh" target="_blank" rel="noreferrer" className="text-red-300 hover:underline">@JanSwabh</a></p>
              </div>
            </div>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-us')} className="hover:text-white transition-colors cursor-pointer">
                  Why Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('impact')} className="hover:text-white transition-colors cursor-pointer">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('glimpses')} className="hover:text-white transition-colors cursor-pointer">
                  Glimpses of Seva
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('stories')} className="hover:text-white transition-colors cursor-pointer">
                  Our Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 7 Programmes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Our Programmes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
              <li>
                <button onClick={() => handleNav('program-saraswati')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Saraswati (Free Education)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program-women-empowerment')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Women Empowerment
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program-pak-hindu-refugees-rehabilitation')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Pak Hindu Refugees Rehab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program-gauseva-gaushala-animal-welfare')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gauseva & Animal Welfare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program-gaushala')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gaushala (Noida)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program-tribal-welfare')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tribal Welfare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('program-relief-work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Relief Work
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Get Involved
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
              <li>
                <button onClick={() => handleNav('volunteer')} className="hover:text-white transition-colors cursor-pointer">
                  Volunteer With Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('donate')} className="hover:text-white transition-colors cursor-pointer">
                  Online Donation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('csr')} className="hover:text-white transition-colors cursor-pointer">
                  CSR Partnerships
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>

            {/* Newsletter input */}
            <div className="pt-3 space-y-2">
              <span className="text-xs font-heading font-bold text-gray-400 block">
                Stay Updated
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#CC444B]"
                />
                <button 
                  type="submit"
                  className="bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-xs px-3 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  {subscribed ? "✓" : "Join"}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-sans">
          <div>
            © 2026 Janswabhiman Welfare Society. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => handleNav('policy-privacy-policy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('policy-terms-conditions')} className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={() => handleNav('policy-disclaimer')} className="hover:text-white transition-colors cursor-pointer">
              Disclaimer
            </button>
            <button onClick={() => handleNav('policy-refund-policy')} className="hover:text-white transition-colors cursor-pointer">
              Refund Policy
            </button>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
