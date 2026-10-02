import React, { useState, useEffect } from 'react';
import { X, Heart, Users, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', page: 'home', label: 'Home' },
    { id: 'about', page: 'about', label: 'About Us' },
    { id: 'why-us', page: 'why-us', label: 'Why Us' },
    { id: 'projects', page: 'home', anchor: 'projects', label: 'What We Do' },
    { id: 'impact', page: 'impact', label: 'Our Impact' },
    { id: 'glimpses', page: 'glimpses', label: 'Glimpses of Seva' },
    { id: 'stories', page: 'stories', label: 'Our Stories' },
    { id: 'csr', page: 'csr', label: 'CSR' },
    { id: 'contact', page: 'contact', label: 'Contact Us' },
  ];

  const handleItemClick = (item) => {
    if (setMobileMenuOpen) setMobileMenuOpen(false);
    if (item.page === 'home' && item.anchor) {
      navigateTo('home', item.anchor);
      if (setActiveTab) setActiveTab(item.anchor);
    } else {
      navigateTo(item.page);
      if (setActiveTab) setActiveTab(item.id);
    }
  };

  const isItemActive = (item) => {
    if (currentPage === 'about') return item.page === 'about';
    if (currentPage === 'why-us') return item.page === 'why-us';
    if (currentPage === 'impact') return item.page === 'impact';
    if (currentPage === 'glimpses') return item.page === 'glimpses';
    if (currentPage === 'stories' || currentPage.startsWith('story-')) return item.page === 'stories';
    if (currentPage === 'csr') return item.page === 'csr';
    if (currentPage === 'contact') return item.page === 'contact';
    if (currentPage.startsWith('program-')) return item.id === 'projects';
    if (currentPage === 'home') {
      if (item.anchor) return activeTab === item.anchor;
      return item.id === 'home' && (!activeTab || activeTab === 'home');
    }
    return false;
  };

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
              onClick={() => navigateTo('home')}
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
          <div
            className={`flex items-center gap-6 lg:gap-8 xl:gap-9 ${
              isScrolled ? 'mx-auto' : 'mx-auto'
            }`}
          >
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`font-heading font-bold text-sm lg:text-[15px] xl:text-[16px] transition-all relative py-1 cursor-pointer whitespace-nowrap ${
                    active
                      ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]'
                      : 'text-gray-800 hover:text-[#CC444B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Scrolled CTA */}
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
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`w-full text-left font-heading font-bold text-[15px] py-3 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                      active
                        ? 'bg-red-50 text-[#CC444B] font-extrabold'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-[#CC444B]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${active ? 'text-[#CC444B] translate-x-0.5' : 'text-gray-300'}`} />
                  </button>
                );
              })}
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
                <span>Become a Volunteer</span>
              </button>

              {/* Social Media Share in Mobile Drawer */}
              <div className="pt-2 flex justify-center">
                <img
                  src="/assets/frame_3_141_10008.svg"
                  alt="Social Links"
                  className="h-7 object-contain cursor-pointer opacity-90 hover:opacity-100"
                />
              </div>

              {/* Contact info snippet */}
              <div className="pt-2 text-[11px] text-gray-500 text-center font-sans space-y-0.5">
                <p>सेवा • संस्कार • शिक्षा • स्वाभिमान</p>
                <p>Tax exemption under 80G available</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
