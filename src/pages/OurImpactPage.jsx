import React from 'react';
import { ArrowUpRight, Share2, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

export default function OurImpactPage({ onOpenDonate, onNavigateHome, onNavigateTo, onSelectStory }) {
  const metrics = [
    {
      number: "2,000+",
      line1: "Children",
      line2: "educated",
      icon: "/assets/read_5519429_1_141_9697.svg",
      slug: "saraswati"
    },
    {
      number: "20,000+",
      line1: "Women",
      line2: "empowered",
      icon: "/assets/reward_4086326_1_141_9717.svg",
      slug: "women-empowerment"
    },
    {
      number: "1,500+",
      line1: "Refugee children",
      line2: "supported",
      icon: "/assets/childcare_17983864_1_141_9727.svg",
      slug: "pak-hindu-refugees-rehabilitation"
    },
    {
      number: "100+",
      line1: "Families",
      line2: "sheltered",
      icon: "/assets/family_6289430_1_141_9705.svg",
      slug: "pak-hindu-refugees-rehabilitation"
    },
    {
      number: "50,000+",
      line1: "Animals",
      line2: "rescued",
      icon: "/assets/pet_care_2076220_1_141_9732.svg",
      slug: "gauseva-gaushala-animal-welfare"
    },
    {
      number: "100+",
      line1: "Gaumatas",
      line2: "sheltered",
      icon: "/assets/cow_2396601_1_141_9754.svg",
      slug: "gaushala"
    },
    {
      number: "50,000+",
      line1: "Tribal & Dalit",
      line2: "lives uplifted",
      icon: "/assets/growth_9477432_1_141_9766.svg",
      slug: "tribal-welfare"
    },
    {
      number: "5,000+",
      line1: "Lives touched",
      line2: "through relief",
      icon: "/assets/people_6197491_1_141_9740.svg",
      slug: "relief-work"
    }
  ];

  const verticals = [
    {
      title: "Saraswati-Free Education for Slum Children",
      metric: "2,000+ Children Educating Right Now",
      desc: "Free, holistic education for children in slum communities and Pak Hindu refugee camps across Jodhpur, Jaisalmer, and Delhi NCR.",
      image: "/images/saraswati/children-studying-outdoors.png",
      slug: "saraswati"
    },
    {
      title: "Women Empowerment",
      metric: "20,000+ Women Empowered and Counting",
      desc: "Kanyadaan and Samuhik Vivah, livelihood training, girl-child education, and support for women and families in distress.",
      image: "/images/tribal-welfare/cultural-ceremony.png",
      slug: "women-empowerment"
    },
    {
      title: "Pak Hindu Refugees Rehabilitation",
      metric: "100+ Families Sheltered So Far · 1,500+ Refugee Children Educating Right Now",
      desc: "Shelter, stability, and a path back to dignity for Hindu refugee families rebuilding life in India.",
      image: "/images/pak-hindu-refugees-rehabilitation/hero-collage.webp",
      slug: "pak-hindu-refugees-rehabilitation"
    },
    {
      title: "Gauseva & Animal Welfare",
      metric: "50,000+ Animals Rescued and Counting",
      desc: "Emergency rescue, treatment, and care for Gaumatas and animals in need on the streets.",
      image: "/images/gauseva/gau-seva-collage.jpg",
      slug: "gauseva-gaushala-animal-welfare"
    },
    {
      title: "Gaushala",
      metric: "100+ Gaumatas Sheltered (Noida)",
      desc: "Sanctuary care and sustainable fodder support for rescued abandoned and injured cows.",
      image: "/images/gaushala/hero-collage.webp",
      slug: "gaushala"
    },
    {
      title: "Tribal Welfare",
      metric: "50,000+ Tribal & Dalit Lives Uplifted and Counting",
      desc: "Self-employment, cultural preservation, food distribution, and sports tournaments in tribal belts.",
      image: "/images/tribal-welfare/samuhik-vivah.png",
      slug: "tribal-welfare"
    },
    {
      title: "Relief Work",
      metric: "5,000+ Human Lives Touched",
      desc: "Emergency relief kits, food, and shelter during floods, droughts, and Covid waves across 50 districts.",
      image: "/images/relief-work/flood-relief-collage.jpg",
      slug: "relief-work"
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Our Impact - Jan Swabhiman Welfare Society',
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
      {/* DESKTOP VIEW                                                              */}
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

        {/* Hero Banner with Red Container & Real Photo Collage */}
        <div className="grid grid-cols-12 gap-12 items-center bg-[#CC444B] rounded-[36px] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="col-span-7 space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full">
              Ground Evidence
            </span>
            <h2 className="font-heading font-black text-4xl text-white leading-tight">
              Where the Work Stands
            </h2>
            <p className="font-sans text-white/95 text-lg leading-relaxed">
              Work measured in classrooms, shelters, gaushalas, tribal belts, and relief lines — not in abstract slogans. The numbers below are approximate, drawn from years of ground work. We share them quietly, as a sense of scale.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="bg-white hover:bg-gray-50 text-[#243C4B] font-heading font-bold text-base px-8 py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all cursor-pointer"
              >
                <span>Support Our Impact</span>
                <Heart className="w-5 h-5 text-[#CC444B] fill-[#CC444B]" />
              </button>
            </div>
          </div>

          <div className="col-span-5 flex justify-center">
            <div className="grid grid-cols-3 gap-2.5 max-w-[380px] p-2 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
              <img src="/images/saraswati/children-studying-outdoors.png" alt="Saraswati Education" className="aspect-square object-cover rounded-xl" />
              <img src="/images/our-impact/hero-grid-2.webp" alt="Community Seva" className="aspect-square object-cover rounded-xl" />
              <img src="/images/pak-hindu-refugees-rehabilitation/support-collage.webp" alt="Refugee Support" className="aspect-square object-cover rounded-xl" />
              <img src="/images/gauseva/gau-seva-collage.jpg" alt="Gauseva" className="aspect-square object-cover rounded-xl" />
              <img src="/images/women-and-child-empowerment/programs-collage.jpg" alt="Women Empowerment" className="aspect-square object-cover rounded-xl" />
              <img src="/images/our-impact/hero-grid-6.webp" alt="Relief" className="aspect-square object-cover rounded-xl" />
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
                onClick={() => onNavigateTo ? onNavigateTo(`program-${item.slug}`) : null}
                className="w-full max-w-[292px] h-[137px] bg-white rounded-[16px] border border-[#CC444B] shadow-sm hover:shadow-lg transition-all p-4 flex items-center justify-between text-left group cursor-pointer"
              >
                <div className="w-[74px] h-[74px] flex items-center justify-center shrink-0">
                  <img 
                    src={item.icon} 
                    alt={item.line1} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="flex flex-col justify-center pl-3 flex-grow">
                  <div className="font-heading font-black text-3xl text-black leading-tight group-hover:text-[#CC444B] transition-colors">
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

        {/* Where the impact shows up section (All 7 Verticals) */}
        <div className="bg-[#F8FAFC] rounded-[36px] p-12 text-left space-y-8 border border-gray-200">
          <div className="space-y-2">
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-[#CC444B]">
              Field Programmes
            </span>
            <h3 className="font-heading font-black text-4xl text-black">
              Where the impact shows up
            </h3>
            <p className="font-sans text-gray-600 text-base max-w-2xl">
              Each vertical has its own ground work — open any programme to see the story behind the number.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-gray-200">
            {verticals.map((vert, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigateTo ? onNavigateTo(`program-${vert.slug}`) : null}
                className="pt-6 first:pt-0 group flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-2xl hover:bg-white transition-all cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-sm"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-gray-100">
                  <img src={vert.image} alt={vert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 space-y-1.5 text-left">
                  <h4 className="font-heading font-black text-xl text-gray-900 group-hover:text-[#CC444B] transition-colors">
                    {vert.title}
                  </h4>
                  <div className="font-heading font-bold text-sm text-gray-700">
                    {vert.metric}
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-2xl">
                    {vert.desc}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#CC444B] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW                                                               */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 py-4 space-y-6 max-w-md mx-auto text-center">
        
        {/* Heading */}
        <div className="text-center py-2">
          <h1 className="font-heading font-black text-[38px] leading-[44px] text-black tracking-tight">
            Our <span className="text-[#CC444B]">Impact</span>
          </h1>
        </div>

        {/* Red Container */}
        <div className="w-full bg-[#CC444B] rounded-[28px] p-6 shadow-xl relative overflow-hidden text-center space-y-4">
          <h2 className="font-heading font-extrabold text-2xl text-white">
            Where the Work Stands
          </h2>
          <p className="font-sans text-[12px] leading-[19px] text-white/95 max-w-[296px] mx-auto">
            Work measured in classrooms, shelters, gaushalas, tribal belts, and relief lines — not in abstract slogans. The numbers below are approximate, drawn from years of ground work.
          </p>
          <div className="grid grid-cols-3 gap-2 p-2 bg-white/10 rounded-2xl">
            <img src="/images/saraswati/children-studying-outdoors.png" alt="Saraswati" className="aspect-square object-cover rounded-lg" />
            <img src="/images/pak-hindu-refugees-rehabilitation/support-collage.webp" alt="Refugees" className="aspect-square object-cover rounded-lg" />
            <img src="/images/gauseva/gau-seva-collage.jpg" alt="Gauseva" className="aspect-square object-cover rounded-lg" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-[#CC444B]" />
            <span className="font-heading font-bold text-xs text-[#CC444B]">
              Impact at a glance
            </span>
            <div className="h-[1px] w-8 bg-[#CC444B]" />
          </div>
          <h3 className="font-heading font-black text-lg text-black">
            Approximate figures from years of seva
          </h3>
        </div>

        {/* 8 Stats Stack */}
        <div className="space-y-3">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigateTo ? onNavigateTo(`program-${item.slug}`) : null}
              className="w-full bg-white rounded-2xl border border-[#CC444B] shadow-sm p-3.5 flex items-center justify-between text-left cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.line1} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center pl-3 flex-grow">
                <div className="font-heading font-black text-2xl text-black leading-tight">
                  {item.number}
                </div>
                <div className="font-sans text-xs text-gray-800 font-semibold">
                  {item.line1} {item.line2}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#CC444B] shrink-0" />
            </div>
          ))}
        </div>

        {/* Verticals List on Mobile */}
        <div className="space-y-4 pt-4 text-left">
          <h3 className="font-heading font-black text-xl text-black">
            Where the impact shows up
          </h3>
          <div className="space-y-3">
            {verticals.map((vert, idx) => (
              <div
                key={idx}
                onClick={() => onNavigateTo ? onNavigateTo(`program-${vert.slug}`) : null}
                className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img src={vert.image} alt={vert.title} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-heading font-black text-sm text-gray-900">{vert.title}</h4>
                    <span className="text-xs font-bold text-[#CC444B]">{vert.metric}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{vert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Donate Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenDonate}
            className="w-[160px] h-[44px] bg-[#CC444B] hover:bg-red-700 text-white rounded-[10px] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span className="font-heading font-bold text-sm">Donate Now</span>
            <Heart className="w-4 h-4 fill-white" />
          </button>
        </div>

      </div>

    </div>
  );
}
