import React from 'react';
import { ArrowUpRight, Share2, Heart, ArrowLeft } from 'lucide-react';

export default function OurImpactPage({ onOpenDonate, onNavigateHome, onSelectStory }) {
  const metrics = [
    {
      number: "2,000+",
      line1: "Children",
      line2: "educated",
      icon: "/assets/read_5519429_1_141_9697.svg"
    },
    {
      number: "20,000+",
      line1: "Women",
      line2: "empowered",
      icon: "/assets/reward_4086326_1_141_9717.svg"
    },
    {
      number: "1,500+",
      line1: "Refugee children",
      line2: "supported",
      icon: "/assets/childcare_17983864_1_141_9727.svg"
    },
    {
      number: "100+",
      line1: "Families",
      line2: "sheltered",
      icon: "/assets/family_6289430_1_141_9705.svg"
    },
    {
      number: "50,000+",
      line1: "Animals",
      line2: "rescued",
      icon: "/assets/pet_care_2076220_1_141_9732.svg"
    },
    {
      number: "100+",
      line1: "Gaumatas",
      line2: "sheltered",
      icon: "/assets/cow_2396601_1_141_9754.svg"
    },
    {
      number: "50,000+",
      line1: "Tribal & Dalit",
      line2: "lives uplifted",
      icon: "/assets/growth_9477432_1_141_9766.svg"
    },
    {
      number: "5,000+",
      line1: "Lives touched",
      line2: "through relief",
      icon: "/assets/people_6197491_1_141_9740.svg"
    }
  ];

  const featuredStory = {
    title: "Kanya Poojan",
    category: "Women & Children",
    image: "/assets/frame_61_141_10114.png",
    desc: "On Navratris, tribal girls are honoured as embodiments of Shakti — dignity uplifted, myths of exclusion shattered.-"
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Our Impact - Janswabhiman Welfare Society',
        text: 'Impact measured in lives changed, shelters built, and communities empowered by JSWS.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Back to Home Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-4 pb-2">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Full 1440px Canvas Layout                                   */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-16 py-8 space-y-16">
        
        {/* Page Heading */}
        <div className="text-left space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-heading font-medium text-[#CC444B] text-lg">
              Measurable Change
            </span>
            <div className="h-[1.5px] w-14 bg-[#CC444B]" />
          </div>
          <h1 className="font-heading font-black text-6xl text-black tracking-tight">
            Our <span className="text-[#CC444B]">Impact</span>
          </h1>
        </div>

        {/* Hero Banner with Red Container */}
        <div className="grid grid-cols-12 gap-12 items-center bg-[#CC444B] rounded-[36px] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="col-span-8 space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full">
              Ground Evidence
            </span>
            <h2 className="font-heading font-black text-4xl text-white leading-tight">
              Where the Work Stands
            </h2>
            <p className="font-sans text-white/95 text-lg leading-relaxed">
              Work measured in classrooms, shelters, gaushalas, tribal belts, and relief lines — not in abstract slogans. The numbers below are approximate, drawn from years of ground work. We share them quietly, as a sense of scale.
            </p>
          </div>

          <div className="col-span-4 flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/assets/ellipse_11_252_799.png" 
                alt="JSWS Impact Collage" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Impact at a glance Grid */}
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-12 bg-[#CC444B]" />
              <span className="font-heading font-medium text-[#CC444B] text-base">
                Impact at a glance
              </span>
              <div className="h-[1.5px] w-12 bg-[#CC444B]" />
            </div>
            <h3 className="font-heading font-black text-3xl text-black">
              Approximate figures from years of seva — a quiet sense of scale.
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="w-full max-w-[292px] h-[137px] bg-white rounded-[16px] border border-[#CC444B] shadow-sm hover:shadow-lg transition-all p-4 flex items-center justify-between text-left group"
              >
                <div className="w-[74px] h-[74px] flex items-center justify-center shrink-0">
                  <img 
                    src={item.icon} 
                    alt={item.line1} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="flex flex-col justify-center pl-3 flex-grow">
                  <div className="font-heading font-black text-3xl text-black leading-tight">
                    {item.number}
                  </div>
                  <div className="font-sans text-sm text-gray-900 leading-[1.2] mt-0.5 font-semibold">
                    <div>{item.line1}</div>
                    <div>{item.line2}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Where the impact shows up section */}
        <div className="bg-[#F6F6F6] rounded-[36px] p-12 text-left space-y-8 border border-gray-200">
          <div className="space-y-2">
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-[#CC444B]">
              Field Stories
            </span>
            <h3 className="font-heading font-black text-4xl text-black">
              Where the impact shows up
            </h3>
            <p className="font-sans text-gray-600 text-base max-w-2xl">
              Each vertical has its own ground work — open any programme to see the story behind the number.
            </p>
          </div>

          <div className="max-w-2xl bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-figma-card flex flex-col sm:flex-row items-center group">
            <div className="w-full sm:w-1/2 h-64 overflow-hidden relative">
              <img src={featuredStory.image} alt={featuredStory.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-8 space-y-3 flex-grow text-left">
              <span className="text-xs font-heading font-extrabold uppercase text-[#CC444B] tracking-wider">
                {featuredStory.category}
              </span>
              <h4 className="font-heading font-black text-2xl text-black">
                {featuredStory.title}
              </h4>
              <p className="font-sans text-sm text-gray-700 leading-relaxed">
                {featuredStory.desc}
              </p>
              <button
                onClick={() => onSelectStory(featuredStory)}
                className="inline-flex items-center gap-2 text-[#CC444B] font-heading font-bold text-sm hover:text-red-700 cursor-pointer pt-1"
              >
                <span>Read Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW: Exact Figma Node 238:675 (Our Impact Page)                   */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 py-4 space-y-6 max-w-md mx-auto text-center">
        
        {/* Heading (Figma 238:711) */}
        <div className="text-center py-2">
          <h1 className="font-heading font-black text-[38px] leading-[44px] text-black tracking-tight">
            Our <span className="text-[#CC444B]">Impact</span>
          </h1>
        </div>

        {/* Red Container with Circular Photo: Subtract (252:790) + Ellipse (252:799) */}
        <div className="w-full bg-[#CC444B] rounded-[28px] p-6 shadow-xl relative overflow-hidden text-center space-y-4">
          <h2 className="font-heading font-extrabold text-2xl text-white">
            Where the Work Stands
          </h2>
          <p className="font-sans text-[12px] leading-[19px] text-white/95 max-w-[296px] mx-auto">
            Work measured in classrooms, shelters, gaushalas, tribal belts, and relief lines — not in abstract slogans. The numbers below are approximate, drawn from years of ground work. We share them quietly, as a sense of scale.
          </p>
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg mx-auto border-2 border-white/30">
            <img 
              src="/assets/ellipse_11_252_799.png" 
              alt="JSWS Impact Collage" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Subtitle: Impact at a glance (252:889) */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-[#CC444B]" />
            <span className="font-heading font-bold text-xs text-[#CC444B]">
              Impact at a glance
            </span>
            <div className="h-[1px] w-8 bg-[#CC444B]" />
          </div>
          <p className="font-sans text-[12px] text-gray-700">
            Approximate figures from years of seva — a quiet sense of scale.
          </p>
        </div>

        {/* 8 Impact Cards Column (Figma 252:895-961) */}
        <div className="space-y-3">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="w-[292px] h-[137px] mx-auto bg-white rounded-[10px] border border-[#CC444B] shadow-[0px_16px_24px_rgba(96,97,112,0.12),0px_2px_8px_rgba(40,41,61,0.02)] p-4 flex items-center justify-between text-left"
            >
              <div className="w-[74px] h-[74px] flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.line1} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center pl-3 flex-grow">
                <div className="font-heading font-black text-[30px] text-black leading-tight">
                  {item.number}
                </div>
                <div className="font-sans text-[13px] text-gray-900 leading-[1.2] mt-0.5 font-semibold">
                  <div>{item.line1}</div>
                  <div>{item.line2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Where the impact shows up card: Frame 4081 (255:980) */}
        <div className="w-full bg-white rounded-[24px] border border-gray-200 shadow-md p-5 text-left space-y-3">
          <span className="font-heading font-extrabold text-xs text-[#CC444B] uppercase block">
            Where the impact shows up
          </span>
          <p className="font-sans text-[11px] text-gray-600 leading-snug">
            Each vertical has its own ground work — open any programme to see the story behind the number.
          </p>
          <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-100">
            <img src={featuredStory.image} alt={featuredStory.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1 pt-1">
            <h4 className="font-heading font-black text-lg text-black">
              {featuredStory.title}
            </h4>
            <p className="font-sans text-xs text-gray-700">
              {featuredStory.desc}
            </p>
            <button
              onClick={() => onSelectStory(featuredStory)}
              className="text-[#CC444B] font-heading font-bold text-xs underline cursor-pointer pt-1"
            >
              Read Story ↗
            </button>
          </div>
        </div>

        {/* Share Row (Figma Line 4, Frame 3, SHARE, Line 5) */}
        <div className="pt-2 space-y-3">
          <div className="h-[1px] w-full bg-[#CC444B]/40" />
          <div className="flex items-center justify-between px-2">
            <span className="font-sans text-[12px] font-bold text-gray-700 tracking-wider">
              SHARE
            </span>
            <img 
              src="/assets/frame_3_141_10008.svg" 
              alt="Social Share" 
              className="h-7 object-contain cursor-pointer"
              onClick={handleShare}
            />
          </div>
          <div className="h-[1px] w-full bg-[#CC444B]/40" />
        </div>

        {/* Donate Now Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenDonate}
            className="w-[150px] h-[44px] bg-[#CC444B] hover:bg-red-700 text-white rounded-[8px] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span className="font-heading font-bold text-sm">Donate Now</span>
            <img 
              src="/assets/frame_9_141_10058.svg" 
              alt="Donate Heart" 
              className="w-5 h-5 object-contain" 
            />
          </button>
        </div>

      </div>

    </div>
  );
}
