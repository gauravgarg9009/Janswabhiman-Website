import React from 'react';

export default function MainHeader({ onOpenDonate, onOpenVolunteer }) {
  return (
    <div className="w-full bg-white border-y border-[#CC444B] shadow-figma-card py-3 sm:py-4 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
        {/* Left: Logo & Organization Title (Group 3259 on Desktop / Group 3260 on Mobile) */}
        <div 
          className="flex items-center gap-2.5 sm:gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/assets/jsws_logo_v2_1_141_10045.png" 
            alt="Janswabhiman Welfare Society" 
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain shrink-0"
          />
          <div className="text-left">
            <h1 className="font-heading font-extrabold text-[15px] sm:text-2xl md:text-[38px] text-black leading-tight sm:leading-[1.15]">
              Janswabhiman
            </h1>
            <h2 className="font-heading font-extrabold text-[13px] sm:text-xl md:text-[34px] text-black leading-tight sm:leading-[1.15]">
              Welfare Society
            </h2>
          </div>
        </div>

        {/* Right: CTAs (Donate Now & Volunteer) */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          
          {/* Donate Now Button (Figma Frame 17 on mobile: w: 136px, h: 42px, rounded: 7px) */}
          <button 
            onClick={onOpenDonate}
            className="bg-[#CC444B] hover:bg-red-700 text-white font-heading font-black text-xs sm:text-base md:text-[17px] px-3.5 sm:px-6 py-2 sm:py-3.5 rounded-[7px] sm:rounded-[10px] flex items-center gap-2 sm:gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Donate Now</span>
            <div className="w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
              <img 
                src="/assets/frame_9_141_10058.svg" 
                alt="Heart" 
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Volunteer Button (Desktop only as per Figma) */}
          <button 
            onClick={onOpenVolunteer}
            className="hidden lg:flex items-center gap-3 text-black font-semibold text-[17px] hover:text-[#CC444B] transition-colors cursor-pointer"
          >
            <img 
              src="/assets/mask_group_141_10048.svg" 
              alt="Volunteer" 
              className="w-8 h-8 object-contain" 
            />
            <span>Volunteer</span>
          </button>

        </div>

      </div>
    </div>
  );
}
