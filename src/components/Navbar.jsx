import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenDonate, mobileMenuOpen, setMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'whoweare', label: 'Who We Are' },
    { id: 'projects', label: 'What We Do' },
    { id: 'impact', label: 'Our impact' },
    { id: 'causes', label: 'Causes' },
    { id: 'getinvolved', label: 'CSR' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    if (setMobileMenuOpen) setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sticky Navbar */}
      <nav className={`hidden md:block w-full bg-white shadow-figma-header z-40 transition-all duration-200 ${isScrolled ? 'sticky top-0 py-2.5 border-b border-gray-200' : 'py-4'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex justify-between items-center">
          
          {/* Scrolled Logo */}
          {isScrolled && (
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img src="/assets/jsws_logo_v2_1_141_10045.png" alt="JSWS" className="w-9 h-9 object-contain" />
              <span className="font-heading font-extrabold text-lg text-black">JSWS</span>
            </div>
          )}

          {/* Desktop Menu Items (Figma node 141:10060) */}
          <div className={`flex items-center gap-8 lg:gap-12 ${isScrolled ? 'mx-0' : 'mx-auto'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-heading font-bold text-base lg:text-[17px] transition-colors relative py-1 cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-[#CC444B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#CC444B]' 
                    : 'text-gray-800 hover:text-[#CC444B]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Scrolled CTA */}
          {isScrolled && (
            <button
              onClick={onOpenDonate}
              className="bg-[#CC444B] text-white text-xs font-black px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer shadow hover:bg-red-700"
            >
              <span>Donate Now</span>
            </button>
          )}

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-[280px] h-full bg-white p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="font-heading font-black text-lg text-[#CC444B]">JSWS Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-gray-500 hover:text-black cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left font-heading font-bold text-base py-2 transition-colors cursor-pointer ${
                      activeTab === item.id ? 'text-[#CC444B]' : 'text-gray-800 hover:text-[#CC444B]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
                className="w-full bg-[#CC444B] text-white font-heading font-bold py-3 rounded-lg shadow flex justify-center items-center gap-2 cursor-pointer"
              >
                <span>Donate Now</span>
                <img src="/assets/frame_9_141_10058.svg" alt="Heart" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
