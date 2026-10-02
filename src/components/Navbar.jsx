import React, { useState, useEffect } from 'react';
import { X, Heart, Users, MapPin, Phone, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import programsData from '../data/programs.json';

export default function Navbar({
  currentPage,
  navigateTo,
  activeTab,
  setActiveTab,
  onOpenDonate,
  onOpenVolunteer,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [whoDropdownOpen, setWhoDropdownOpen] = useState(false);
  const [whatDropdownOpen, setWhatDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (page, anchor) => {
    if (setMobileMenuOpen) setMobileMenuOpen(false);
    setWhoDropdownOpen(false);
    setWhatDropdownOpen(false);

    if (page === 'home' && anchor) {
      navigateTo('home', anchor);
      if (setActiveTab) setActiveTab(anchor);
    } else {
      navigateTo(page);
      if (setActiveTab) setActiveTab(page);
    }
  };

  const isWhoActive = currentPage === 'about' || currentPage === 'why-us';
  const isWhatActive = currentPage.startsWith('program-') || (currentPage === 'home' && activeTab === 'projects');

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP STICKY NAVBAR                                                     */}
      {/* ========================================================================= */}
      <nav
        className={`hidden md:block w-full bg-white shadow-figma-header z-40 transition-all duration-200 ${
          isScrolled ? 'sticky top-0 py-2.5 border-b border-gray-200 bg-white/95 backdrop-blur-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Scrolled Logo */}
          {isScrolled && (
            <div
              className="flex items-center gap-3 cursor-pointer shrink-0"
              onClick={() => handleItemClick('home')}
            >
              <img
                src="/assets/jsws_logo_v2_1_141_10045.png"
                alt="JSWS"
                className="w-9 h-9 object-contain"
              />
              <span className="font-heading font-extrabold text-lg text-black">JSWS</span>
            </div>
          )}

          {/* Desktop Menu Items */}
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-8 mx-auto">
            
            {/* 1. Home */}
            <button
              onClick={() => handleItemClick('home')}
              className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                currentPage === 'home' && (!activeTab || activeTab === 'home')
                  ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                  : 'text-gray-800 hover:text-[#CC444B]'
              }`}
            >
              Home
            </button>

            {/* 2. Who We Are? (Dropdown with About Us & Why Us) */}
            <div 
              className="relative"
              onMouseEnter={() => setWhoDropdownOpen(true)}
              onMouseLeave={() => setWhoDropdownOpen(false)}
            >
              <button
                onClick={() => handleItemClick('about')}
                className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  isWhoActive
                    ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                    : 'text-gray-800 hover:text-[#CC444B]'
                }`}
              >
                <span>Who We Are?</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${whoDropdownOpen ? 'rotate-180 text-[#CC444B]' : 'text-gray-500'}`} />
              </button>

              {whoDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      onClick={() => handleItemClick('about')}
                      className="w-full text-left px-3 py-2 text-sm font-heading font-bold text-gray-800 hover:text-[#CC444B] hover:bg-red-50 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>About Us</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                    <button
                      onClick={() => handleItemClick('why-us')}
                      className="w-full text-left px-3 py-2 text-sm font-heading font-bold text-gray-800 hover:text-[#CC444B] hover:bg-red-50 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>Why Us</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Glimpses of Seva */}
            <button
              onClick={() => handleItemClick('glimpses')}
              className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                currentPage === 'glimpses'
                  ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                  : 'text-gray-800 hover:text-[#CC444B]'
              }`}
            >
              Glimpses of Seva
            </button>

            {/* 4. What We Do? (Dropdown with All 7 Programs) */}
            <div 
              className="relative"
              onMouseEnter={() => setWhatDropdownOpen(true)}
              onMouseLeave={() => setWhatDropdownOpen(false)}
            >
              <button
                onClick={() => handleItemClick('home', 'projects')}
                className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  isWhatActive
                    ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                    : 'text-gray-800 hover:text-[#CC444B]'
                }`}
              >
                <span>What We Do?</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${whatDropdownOpen ? 'rotate-180 text-[#CC444B]' : 'text-gray-500'}`} />
              </button>

              {whatDropdownOpen && (
                <div className="absolute top-full -left-20 pt-2 w-80 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-heading font-extrabold uppercase tracking-widest text-gray-400 border-b border-gray-100 mb-1">
                      7 Core Initiatives
                    </div>
                    {programsData.map((prog) => (
                      <button
                        key={prog.slug}
                        onClick={() => handleItemClick(`program-${prog.slug}`)}
                        className="w-full text-left px-3 py-2 text-xs font-heading font-bold text-gray-800 hover:text-[#CC444B] hover:bg-red-50 rounded-xl transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <span className="line-clamp-1">{prog.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#CC444B] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Our Impact */}
            <button
              onClick={() => handleItemClick('impact')}
              className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                currentPage === 'impact'
                  ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                  : 'text-gray-800 hover:text-[#CC444B]'
              }`}
            >
              Our Impact
            </button>

            {/* 6. CSR Partnerships */}
            <button
              onClick={() => handleItemClick('csr')}
              className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                currentPage === 'csr'
                  ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                  : 'text-gray-800 hover:text-[#CC444B]'
              }`}
            >
              CSR Partnerships
            </button>

            {/* 7. Our Stories */}
            <button
              onClick={() => handleItemClick('stories')}
              className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                currentPage === 'stories' || currentPage.startsWith('story-')
                  ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                  : 'text-gray-800 hover:text-[#CC444B]'
              }`}
            >
              Our Stories
            </button>

            {/* 8. Contact Us */}
            <button
              onClick={() => handleItemClick('contact')}
              className={`font-heading font-bold text-sm lg:text-[15px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                currentPage === 'contact'
                  ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                  : 'text-gray-800 hover:text-[#CC444B]'
              }`}
            >
              Contact Us
            </button>

          </div>

          {/* Scrolled Right CTA */}
          {isScrolled && (
            <button
              onClick={onOpenDonate}
              className="bg-[#CC444B] text-white text-xs font-black px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer shadow hover:bg-red-700 shrink-0"
            >
              <span>Donate Now</span>
              <img src="/assets/frame_9_141_10058.svg" alt="Heart" className="w-4 h-4 object-contain" />
            </button>
          )}

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER OVERLAY: Figma node 158:768                                 */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          
          {/* Backdrop Click to Close */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="w-[310px] max-w-[85vw] h-full bg-white flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200 overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-gray-100 bg-white sticky top-0 z-10 flex items-center justify-between">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateTo('home');
                }}
              >
                <img
                  src="/assets/jsws_logo_v2_1_141_10045.png"
                  alt="JSWS Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="text-left">
                  <span className="font-heading font-black text-sm text-[#CC444B] block leading-tight">
                    Janswabhiman
                  </span>
                  <span className="font-heading font-bold text-xs text-gray-700 block leading-tight">
                    Welfare Society
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-5 py-4 space-y-1 divide-y divide-gray-50 flex-grow">
              <button
                onClick={() => handleItemClick('home')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'home' && (!activeTab || activeTab === 'home') ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('about')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'about' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('why-us')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'why-us' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>Why Us</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('home', 'projects')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  isWhatActive ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>What We Do (7 Programs)</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('impact')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'impact' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>Our Impact</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('glimpses')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'glimpses' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>Glimpses of Seva</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('stories')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'stories' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>Our Stories</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('csr')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'csr' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>CSR Partnerships</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>

              <button
                onClick={() => handleItemClick('contact')}
                className={`w-full text-left font-heading font-bold text-[15px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'contact' ? 'bg-red-50 text-[#CC444B]' : 'text-gray-800'
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>
            </div>

            {/* Drawer Actions & CTAs */}
            <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-sm py-3 px-4 rounded-xl shadow-md flex justify-center items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Donate Now</span>
                <img
                  src="/assets/frame_9_141_10058.svg"
                  alt="Heart"
                  className="w-4 h-4 object-contain"
                />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenVolunteer) onOpenVolunteer();
                }}
                className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 font-heading font-bold text-sm py-2.5 px-4 rounded-xl flex justify-center items-center gap-2 cursor-pointer transition-colors"
              >
                <Users className="w-4 h-4 text-[#CC444B]" />
                <span>Volunteer</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
