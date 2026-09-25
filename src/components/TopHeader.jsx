import React from 'react';

export default function TopHeader() {
  return (
    <div className="w-full bg-white py-3 px-6 md:px-16 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
        {/* Left: Social Media Icons (Figma Frame 3) */}
        <div className="flex items-center gap-3">
          <img 
            src="/assets/frame_3_141_10008.svg" 
            alt="JSWS Social Links" 
            className="h-9 object-contain cursor-pointer hover:opacity-90 transition-opacity" 
          />
        </div>

        {/* Right: Location, Number, Time (Figma Frame 9) */}
        <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm font-semibold text-[#CC444B]">
          <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
            <span>Location</span>
            <img src="/assets/frame_141_10031.svg" alt="Location" className="w-3.5 h-3.5" />
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
            <span>Number</span>
            <img src="/assets/frame_141_10036.svg" alt="Phone" className="w-3.5 h-3.5" />
          </div>

          <div className="hidden md:flex items-center gap-1.5 cursor-pointer hover:underline">
            <span>Time</span>
            <img src="/assets/frame_141_10041.svg" alt="Time" className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
}
