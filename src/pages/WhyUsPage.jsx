import React from 'react';
import { ArrowUpRight, Share2, Heart, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function WhyUsPage({ onOpenDonate, onNavigateHome }) {
  const pillars = [
    {
      num: 1,
      title: "Saraswati-Free Education for Slum Children",
      desc: "Daily free primary education, moral sanskars, uniforms, and study material for children in underserved slum clusters."
    },
    {
      num: 2,
      title: "Women Empowerment",
      desc: "Kanyadaan / Samuhik Vivah for poor and tribal daughters, AtmaNirbhar livelihood, girl-child education, support for families of deceased workers, and self-defense workshops."
    },
    {
      num: 3,
      title: "Pak Hindu Refugees Rehabilitation",
      desc: "Waterproof huts, shelters, self-employment and free education for Pak Hindu refugees in India."
    },
    {
      num: 4,
      title: "Gauseva & Animal Welfare",
      desc: "Rescue, treatment, and welfare of injured cows and animals on streets with dedicated vet ambulances."
    },
    {
      num: 5,
      title: "Gaushala",
      desc: "Sanctuary care and sustainable fodder support for Gaushalas serving around 100 cows."
    },
    {
      num: 6,
      title: "Tribal Welfare",
      desc: "SC/ST integration with the mainstream through self-employment, Yajnas, cultural events, community Langars/Prasadam, clothes distribution, sports tournaments."
    },
    {
      num: 7,
      title: "Relief Work",
      desc: "Emergency relief work during Covid waves, severe droughts, and devastating flash floods across 50 districts."
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Why Us - Janswabhiman Welfare Society',
        text: 'Discover why JSWS is distinct: grounded processes, Dharma, and unwavering action.',
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
              Our Distinction
            </span>
            <div className="h-[1.5px] w-14 bg-[#CC444B]" />
          </div>
          <h1 className="font-heading font-black text-6xl text-black tracking-tight">
            Why <span className="text-[#CC444B]">Us</span>
          </h1>
        </div>

        {/* Hero Banner with Red Container */}
        <div className="grid grid-cols-12 gap-12 items-center bg-[#CC444B] rounded-[36px] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="col-span-8 space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full">
              Ground Reality • Long-term Processes
            </span>
            <h2 className="font-heading font-black text-4xl text-white leading-tight">
              Because Janswabhiman Welfare Society stands not just for service, but for Dharma, स्वाभिमान, and सांस्कृतिक गौरव.
            </h2>
            <p className="font-sans text-white/95 text-base leading-relaxed">
              Established in 2006, Jan Swabhiman Welfare Society has expanded its horizon in the last 10 years in multiple domains of Seva. Led by <strong>Shri Vashi Sharma</strong> (IIT Bombay alumnus, ex-faculty IIT Kanpur, INSPIRE Faculty Awardee, Govt of India), JSWS carries out extensive ground operations across 50 districts in India.
            </p>
          </div>

          <div className="col-span-4 flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/assets/ellipse_11_252_799.png" 
                alt="JSWS Seva Ground Work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* The 7 Ground Work Pillars */}
        <div className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-[#CC444B]">
              Core Initiatives
            </span>
            <h3 className="font-heading font-black text-3xl text-black">
              7 Pillars of Daily Ground Work
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {pillars.map((item) => (
              <div 
                key={item.num}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#CC444B] text-white flex items-center justify-center font-heading font-black text-lg">
                    {item.num}
                  </div>
                  <h4 className="font-heading font-bold text-xl text-black leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-[#CC444B]">
                  <span>Active ground initiative</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The JSWS Manifesto on #F6F6F6 */}
        <div className="bg-[#F6F6F6] rounded-[36px] p-12 text-left space-y-8 border border-gray-200">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1.5px] w-12 bg-[#CC444B]" />
              <span className="font-heading font-medium text-[#CC444B] text-base">
                Our Philosophy
              </span>
              <div className="h-[1.5px] w-12 bg-[#CC444B]" />
            </div>
            <h3 className="font-heading font-black text-4xl text-black">
              How Jan Swabhiman Welfare Society is Different
            </h3>
          </div>

          <div className="space-y-6 text-gray-800 font-sans text-base leading-[30px] max-w-4xl mx-auto">
            <p className="font-heading font-bold text-xl text-gray-950 p-6 bg-white rounded-2xl border-l-4 border-[#CC444B] shadow-xs">
              “We believe in processes, not events. Unlike many others who teach a few children or treat an injured animal on a Sunday holiday like a one-time event with cameras and social media theatrics, we believe Bharat cannot afford token activism.”
            </p>

            <p>
              Millions of lives in constant need of education, security, awareness, employment, and healthcare can't be left to one-time events. Apart from government schemes, our country needs processes (serious long-term efforts) deeply rooted on ground, led and executed by professionals who think out of the box.
            </p>

            <p>
              The impact of our humble efforts can be witnessed on ground: more than <strong>2,000 slum children</strong>, <strong>50,000 Dalits & tribals</strong>, <strong>200 women and children in distress</strong>, <strong>1,000 Pak Hindu refugees</strong>, <strong>10,000 injured Gaumatas and animals</strong>, and <strong>5,000 human lives</strong> during covid, drought and floods have been impacted positively with our multi-domain efforts in the last 10 years.
            </p>

            <p>
              Our teams work in 50 districts across Delhi, UP, Rajasthan, Gujarat, Maharashtra, Jharkhand, Chhattisgarh and Assam. With your support, we expand. The goal is to reach from 50 districts to 500, rescue more lives, teach more kids, and secure more families.
            </p>

            <p>
              At Janswabhiman Welfare Society, we believe in Seva with <strong>श्रद्धा and integrity</strong>. Every initiative at JSWS is guided by Dharma, transparency, and respect. Service is sacred, accountable, and deeply Bhartiya in spirit — uplifting not just lives, but hearts and heritage.
            </p>

            <div className="pt-4 flex items-center justify-center">
              <button
                onClick={onOpenDonate}
                className="bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-lg px-8 py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all cursor-pointer"
              >
                <span>Support Our 24/7 Seva</span>
                <Heart className="w-5 h-5 fill-white text-white" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW: Exact Figma Node 229:285 (Why Us Page)                       */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 py-4 space-y-6 max-w-md mx-auto text-center">
        
        {/* Heading: Why Us (229:321) */}
        <div className="text-center py-2">
          <h1 className="font-heading font-black text-[38px] leading-[44px] text-black tracking-tight">
            Why <span className="text-[#CC444B]">Us</span>
          </h1>
        </div>

        {/* Red Container with Circular Photo: Subtract (229:323) + Ellipse (232:378) */}
        <div className="w-full bg-[#CC444B] rounded-[28px] p-6 shadow-xl relative overflow-hidden text-center space-y-4">
          <h2 className="font-heading font-extrabold text-xl text-white leading-snug">
            Dharma, स्वाभिमान, and सांस्कृतिक गौरव.
          </h2>
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg mx-auto border-2 border-white/30">
            <img 
              src="/assets/ellipse_11_252_799.png" 
              alt="JSWS Seva Work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro text (229:329): Nunito Sans 12px, line-height 19px */}
        <p className="font-sans text-[12px] leading-[19px] text-gray-800 text-left px-1">
          Established in 2006 with the aim of serving the people of India, Jan Swabhiman Welfare Society has expanded its horizon in the last 10 years in multiple domains of Seva. Led by Shri Vashi Sharma (IIT Bombay alumnus, ex-faculty IIT Kanpur, INSPIRE Faculty Awardee, Govt of India), JSWS has been doing extensive groundwork in the following areas:
        </p>

        {/* 7 Numbered Items (Figma Groups 3268-3273) */}
        <div className="space-y-3 text-left">
          {pillars.map((item) => (
            <div key={item.num} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-7 h-7 rounded-full bg-[#CC444B] text-white flex items-center justify-center shrink-0 font-heading font-bold text-xs">
                {item.num}
              </div>
              <div className="space-y-0.5">
                <span className="font-heading font-bold text-xs text-black block leading-tight">
                  {item.title}
                </span>
                <span className="font-sans text-[11px] text-gray-600 block leading-tight">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* How JSWS is Different: Rectangle 2913 (#F6F6F6) */}
        <div className="bg-[#F6F6F6] rounded-[24px] p-5 text-left space-y-4 border border-gray-200">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-[#CC444B]" />
            <span className="font-heading font-bold text-xs text-[#CC444B] text-center">
              How Jan Swabhiman Welfare Society is different
            </span>
            <div className="h-[1px] w-8 bg-[#CC444B]" />
          </div>

          <div className="font-sans text-[11px] leading-[18px] text-gray-800 space-y-3">
            <p className="font-bold text-gray-900">
              We believe in processes, not events. Unlike many others who treat seva like a one-time event with social media theatrics, we believe Bharat can't afford theatrics in the name of activism.
            </p>
            <p>
              Millions of lives in constant need of education, security, and healthcare need long-term processes deeply rooted on ground, executed by dedicated professionals.
            </p>
            <p>
              More than 2,000 slum children, 50,000 Dalits & tribals, 200 women and children in distress, 1,000 Pak Hindu refugees, 10,000 injured Gaumatas, and 5,000 human lives during disasters have been impacted positively in 50 districts across India.
            </p>
            <p className="font-semibold text-black">
              Support us and be part of a team working 24/7 for the revival of Bharat.
            </p>
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

        {/* Donate Now Button: Frame 17 (229:317) */}
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
