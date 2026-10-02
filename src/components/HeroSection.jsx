import React from 'react';
import { Play } from 'lucide-react';

export default function HeroSection({ onOpenDonate, onOpenGlimpses }) {
  return (
    <section id="home" className="w-full bg-white pt-2 pb-8 md:pb-12 px-0 md:px-6 lg:px-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO: Exact Figma node 141:9525 with Group 3263 (node 158:1851)   */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-[1492px] max-w-full mx-auto h-[620px]">
        
        {/* Background Canvas: Exact Rendered Figma Container (node 141:9525) */}
        <div className="absolute left-0 top-0 w-full h-[561px] pointer-events-none">
          <img 
            src="/assets/hero_slider_container.png" 
            alt="Hero Background" 
            className="w-full h-full object-contain object-left-top"
          />
        </div>

        {/* Interactive Overlay: slider-content (Figma node 141:9540) */}
        {/* In Figma: left: 99px, top: 452px (which is top: 34px relative to slider-container top: 418px) */}
        <div className="absolute left-[99px] top-[34px] w-[682px] h-[387px] flex flex-col justify-between items-start text-left z-20">
          
          {/* Title: Nunito 60px 700 bold, line-height 72px */}
          <h1 className="font-heading font-bold text-[60px] leading-[72px] text-white tracking-tight whitespace-pre-line">
            Building Dignity.{"\n"}Creating Opportunity.{"\n"}Empowering Lives.
          </h1>

          {/* Description: Nunito Sans 18px, line-height 29px, max-w-[583px] */}
          <p className="font-sans font-normal text-[18px] leading-[29px] text-white max-w-[583px]">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support—helping people build more secure and self-reliant futures.
          </p>

          {/* Frame 20: Buttons Row */}
          <div className="flex items-center gap-8 pt-2">
            
            {/* Donate Now Button (Figma Frame 15: width 154px, height 44px, bg #FFFFFF, rounded 8px) */}
            <button
              onClick={onOpenDonate}
              className="w-[154px] h-[44px] bg-white hover:bg-gray-50 text-[#243C4B] rounded-[8px] flex items-center justify-between px-[15px] shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] hover:shadow-lg transition-all group cursor-pointer"
            >
              <span className="font-sans font-black text-[12px] leading-[18px] text-[#243C4B] uppercase tracking-wider">
                Donate Now
              </span>
              <div className="w-[36px] h-[35px] flex items-center justify-center shrink-0">
                <img 
                  src="/assets/frame_9_141_9547.svg" 
                  alt="Heart" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
            </button>

            {/* Glimpses of Seva Button (Figma Frame 19: w 163px, h 38px) */}
            <button
              onClick={onOpenGlimpses}
              className="flex items-center gap-[10px] text-white hover:text-white/80 group transition-all cursor-pointer"
            >
              <div className="w-[38px] h-[38px] rounded-full bg-white text-[#243C4B] flex items-center justify-center shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-[#243C4B] translate-x-0.5" />
              </div>
              <span className="font-heading font-semibold text-[14px] leading-[21px] text-white underline-offset-4 group-hover:underline">
                Glimpses of Seva
              </span>
            </button>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXACT FIGMA NODE 158:1851 (Group 3263) - Two Illustrated Avatar Heads      */}
        {/* Dimensions: 235px × 95px, position: left: 44px, top: 465px                */}
        {/* Sits right inside the bottom-left notch cutout of the red container!       */}
        {/* ========================================================================= */}
        <div 
          id="node-158-1851"
          className="absolute left-[44px] top-[465px] w-[235px] h-[95px] z-30 pointer-events-auto"
        >
          <img 
            src="/assets/group_3263_158_1851.svg" 
            alt="Group 3263 Donors" 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET HERO: Exact Figma node 158:417 with Group 3263            */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* MOBILE / TABLET HERO: Exact Figma node 158:417 / Frame 4078 (158:1794)    */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6">
        <div className="w-full max-w-[360px] mx-auto bg-[#CC444B] rounded-[28px] py-7 px-5 text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
          
          {/* Title (Figma 158:1818): Nunito 24px/26px, 800 bold, line-height 30px */}
          <h1 className="font-heading font-extrabold text-[25px] leading-[31px] text-white tracking-tight whitespace-pre-line">
            Building Dignity.{"\n"}Creating Opportunity.{"\n"}Empowering Lives.
          </h1>

          {/* Description (Figma 141:9542): Nunito Sans 12px, line-height 19px */}
          <p className="font-sans font-normal text-[12px] leading-[19px] text-white/95 max-w-[291px] mx-auto">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support—helping people build more secure and self-reliant futures.
          </p>

          {/* Buttons Row (Figma 158:1841 & 158:1846) */}
          <div className="flex items-center justify-center gap-3 pt-1">
            
            {/* Donate Now Button (131px x 37px, bg #FFFFFF, rounded 7px) */}
            <button
              onClick={onOpenDonate}
              className="w-[131px] h-[37px] bg-white text-[#243C4B] rounded-[7px] flex items-center justify-between px-3 shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.05)] hover:bg-gray-50 transition-all cursor-pointer"
            >
              <span className="font-sans font-black text-[11px] uppercase tracking-wider text-[#243C4B]">
                Donate Now
              </span>
              <img 
                src="/assets/frame_9_141_9547.svg" 
                alt="Heart" 
                className="w-5 h-5 object-contain" 
              />
            </button>

            {/* Glimpses of Seva Button (139px x 32px) */}
            <button
              onClick={onOpenGlimpses}
              className="h-[37px] flex items-center gap-2 text-white font-heading font-semibold text-[13px] hover:text-white/80 transition-colors cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-white text-[#243C4B] flex items-center justify-center shadow">
                <Play className="w-3 h-3 fill-[#243C4B] translate-x-0.5" />
              </div>
              <span className="underline-offset-2 hover:underline">Glimpses of Seva</span>
            </button>

          </div>

          {/* Circular Collage Image (Figma Ellipse 11 / 158:1809: 316px x 316px) */}
          <div className="pt-2 flex justify-center">
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-[0px_0px_8px_rgba(0,0,0,0.52)] border-2 border-white/20">
              <img 
                src="/assets/ellipse_11_141_9539.png" 
                alt="JSWS Seva Collage" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Donors Counter Bottom (Figma Group 3266 / 158:1979) */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="w-[125px] h-[52px] shrink-0">
              <img 
                src="/assets/group_3263_158_1851.svg" 
                alt="Donors Avatars" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="text-left">
              <span className="font-heading font-black italic text-white text-[15px] block leading-tight">
                500+ Donors
              </span>
              <span className="text-white/85 text-[11px] block leading-tight font-sans">
                supporting seva that creates impact
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
