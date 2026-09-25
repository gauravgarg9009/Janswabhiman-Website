import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenDonate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`w-full bg-white shadow-figma-header z-40 transition-all duration-200 ${isScrolled ? 'sticky top-0 py-2.5 border-b border-gray-200' : 'py-4'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex justify-between items-center">
        
        {/* Scrolled Logo */}
        {isScrolled && (
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src="/assets/jsws_logo_v2_1_141_10045.png" alt="JSWS" className="w-9 h-9 object-contain" />
            <span className="font-heading font-extrabold text-lg text-black">JSWS</span>
          </div>
        )}

        {/* Desktop Menu Items (Figma node 141:10060) */}
        <div className={`hidden md:flex items-center gap-8 lg:gap-12 ${isScrolled ? 'mx-0' : 'mx-auto'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-heading font-bold text-base lg:text-[17px] transition-colors relative py-1 ${
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
            className="hidden md:flex bg-[#CC444B] text-white text-xs font-black px-4 py-2 rounded-lg items-center gap-2"
          >
            <span>Donate Now</span>
          </button>
        )}

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex justify-between items-center w-full">
          <span className="font-heading font-extrabold text-base text-gray-900">
            Janswabhiman Welfare Society
          </span>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer (Figma node 158:768) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left font-heading font-bold text-lg py-2 transition-colors ${
                activeTab === item.id ? 'text-[#CC444B]' : 'text-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
              className="w-full bg-[#CC444B] text-white font-black py-3.5 rounded-xl shadow flex justify-center items-center gap-2"
            >
              <span>Donate Now</span>
              <img src="/assets/frame_9_141_10058.svg" alt="Donate" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
