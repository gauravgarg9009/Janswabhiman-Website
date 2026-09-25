import React from 'react';

export default function MainHeader({ onOpenDonate, onOpenVolunteer }) {
  return (
    <div className="w-full bg-white border-y-2 border-[#CC444B] shadow-figma-card py-4 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
        {/* Left: Logo & Organization Title (Group 3259) */}
        <div 
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/assets/jsws_logo_v2_1_141_10045.png" 
            alt="Janswabhiman Welfare Society" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
          <div className="text-left">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[38px] text-black leading-[1.15]">
              Janswabhiman
            </h1>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-[34px] text-black leading-[1.15]">
              Welfare Society
            </h2>
          </div>
        </div>

        {/* Right: CTAs (Donate Now & Volunteer) */}
        <div className="flex items-center gap-6">
          
          {/* Donate Now Button */}
          <button 
            onClick={onOpenDonate}
            className="bg-[#CC444B] hover:bg-red-700 text-white font-black text-sm sm:text-base md:text-[17px] px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-[10px] flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
          >
            <span>Donate Now</span>
            <img 
              src="/assets/frame_9_141_10058.svg" 
              alt="Donate" 
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
          </button>

          {/* Volunteer Button (Desktop) */}
          <button 
            onClick={onOpenVolunteer}
            className="hidden lg:flex items-center gap-3 text-black font-semibold text-[17px] hover:text-[#CC444B] transition-colors"
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
