import React from 'react';

export default function TopHeader({ onToggleMobileMenu, mobileMenuOpen }) {
  return (
    <div className="w-full bg-white py-2.5 px-4 sm:px-6 md:px-16 border-b border-gray-100 shadow-[inset_0px_-3px_4px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
        {/* Left: Social Media Icons (Figma Frame 3 / 158:1421) */}
        <div className="flex items-center gap-3">
          <img 
            src="/assets/frame_3_141_10008.svg" 
            alt="JSWS Social Links" 
            className="h-8 sm:h-9 object-contain cursor-pointer hover:opacity-90 transition-opacity" 
          />
        </div>

        {/* Desktop Right: Location, Number, Time (Figma Frame 9) */}
        <div className="hidden md:flex items-center gap-6 text-xs md:text-sm font-semibold text-[#CC444B]">
          <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
            <span>Location</span>
            <img src="/assets/frame_141_10031.svg" alt="Location" className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
            <span>Number</span>
            <img src="/assets/frame_141_10036.svg" alt="Phone" className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
            <span>Time</span>
            <img src="/assets/frame_141_10041.svg" alt="Time" className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Mobile Right: Hamburger Menu Button (Figma node 158:1473 Icon Button) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={onToggleMobileMenu}
            className="w-9 h-9 rounded-lg flex flex-col justify-center items-center gap-1.5 p-1 focus:outline-none hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
}
