import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function HeroSection({ onOpenDonate, onOpenGlimpses }) {
  const slides = [
    {
      id: 'saraswati',
      tag: "Saraswati-Free Education for Slum Children",
      title: "Knowledge With Dignity.\nLearning With Purpose.",
      desc: "Free, holistic education for children in slum communities and Pak Hindu refugee camps across Jodhpur, Jaisalmer, and Delhi NCR.",
      image: "/images/home/slider/saraswati-children.jpg",
      sanskrit: "अविद्यातिमिरभेदिनी विद्या"
    },
    {
      id: 'women-empowerment',
      tag: "Women Empowerment",
      title: "Dignity As Birthright.\nStrength In Sisterhood.",
      desc: "Empowering daughters through Samuhik Vivah, Kanya Poojan, vocational self-reliance, and honoring Shakti across Bharat.",
      image: "/images/home/slider/women-empowerment.webp",
      sanskrit: "न उद्धार्या — स्वयमेव शक्तिः"
    },
    {
      id: 'pak-hindu',
      tag: "Pak Hindu Refugees Rehabilitation",
      title: "From Persecution To Shelter.\nFrom Despair To Dignity.",
      desc: "Providing waterproof shelters, education, and livelihood support to refugee families rebuilding their lives with honor in Bharat.",
      image: "/images/home/slider/pak-hindu-rehabilitation-hero.webp",
      sanskrit: "शरणं प्रपन्नानां रक्षणम्"
    },
    {
      id: 'gauseva',
      tag: "Gauseva & Animal Welfare",
      title: "Compassion For Every Jeev.\nHealing On The Streets.",
      desc: "Dedicated ambulance rescues, 24/7 emergency medical treatment, and compassionate care for injured Gaumatas and animals.",
      image: "/images/home/slider/gauseva.png",
      sanskrit: "गावो विश्वस्य मातरः"
    },
    {
      id: 'gaushala',
      tag: "Gaushala Sanctuary",
      title: "Sacred Haven of Care.\nWhere Dharma Stands Guard.",
      desc: "Sanctuary shelter, nutritious fodder, and lifelong loving care for over 100 rescued and abandoned cows in Noida.",
      image: "/images/home/slider/gaushala-hero.webp",
      sanskrit: "सुरभिसेवा परमो धर्मः"
    },
    {
      id: 'tribal-welfare',
      tag: "Tribal Welfare & Heritage",
      title: "Restoring Cultural Pride.\nUplifting Ancient Roots.",
      desc: "Community langars, clothes distribution, sports tournaments, and Sanatan sanskars across remote tribal villages.",
      image: "/images/home/slider/tribal-welfare.webp",
      sanskrit: "जनजाति गौरवम् राष्ट्रस्य आधारः"
    },
    {
      id: 'relief-work',
      tag: "Emergency & Disaster Relief",
      title: "When Crisis Strikes,\nDharma Walks In.",
      desc: "Immediate flood response, warm blanket drives, dry ration kits, and medical relief for families in sudden distress.",
      image: "/images/home/slider/relief-work.webp",
      sanskrit: "आपत्काले सेवा परमो धर्मः"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);

  // Auto-play slider moving left to right every 5 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentSlide]);

  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
    resetTimer();
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
    resetTimer();
  };

  const active = slides[currentSlide];

  return (
    <section id="home" className="w-full bg-white pt-6 md:pt-8 pb-8 md:pb-12 px-0 md:px-6 lg:px-0 overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* DESKTOP HERO: Auto-Moving Left-to-Right Slider with Exact Figma Container */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-[1492px] max-w-full mx-auto h-[620px]">
        
        {/* Background Canvas: Exact Rendered Figma Container (node 141:9525) */}
        <div className="absolute left-0 top-0 w-full h-[561px] pointer-events-none z-0">
          <img 
            src="/assets/hero_slider_container.png" 
            alt="Hero Background" 
            className="w-full h-full object-contain object-left-top"
          />
        </div>

        {/* Dynamic Background Image inside the right circular/oval area of the hero */}
        <div className="absolute right-[115px] top-[32px] w-[540px] h-[480px] z-10 overflow-hidden rounded-[32px] pointer-events-none opacity-85">
          <div className="relative w-full h-full">
            {slides.map((s, idx) => (
              <img
                key={s.id}
                src={s.image}
                alt={s.tag}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                  idx === currentSlide 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : idx < currentSlide 
                    ? 'opacity-0 scale-105 -translate-x-full' 
                    : 'opacity-0 scale-105 translate-x-full'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC444B] via-[#CC444B]/20 to-transparent" />
          </div>
        </div>

        {/* Interactive Overlay: slider-content (Figma node 141:9540) */}
        <div className="absolute left-[99px] top-[34px] w-[700px] h-[420px] flex flex-col justify-between items-start text-left z-20">
          
          {/* Sanskrit & Category Tag with transition */}
          <div className="space-y-1.5 overflow-hidden">
            <div 
              key={`tag-${currentSlide}`}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 animate-in fade-in slide-in-from-left-4 duration-500"
            >
              <span className="font-heading font-extrabold text-[11px] uppercase tracking-widest text-amber-200">
                {active.tag}
              </span>
              {active.sanskrit && (
                <span className="text-white/80 text-[11px] font-sans italic border-l border-white/30 pl-2">
                  "{active.sanskrit}"
                </span>
              )}
            </div>

            {/* Title with smooth sliding animation */}
            <h1 
              key={`title-${currentSlide}`}
              className="font-heading font-black text-[52px] leading-[62px] text-white tracking-tight whitespace-pre-line animate-in fade-in slide-in-from-left-6 duration-600 drop-shadow-md"
            >
              {active.title}
            </h1>
          </div>

          {/* Description */}
          <p 
            key={`desc-${currentSlide}`}
            className="font-sans font-normal text-[17px] leading-[28px] text-white/95 max-w-[580px] animate-in fade-in slide-in-from-left-4 duration-500"
          >
            {active.desc}
          </p>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-8 pt-1">
            
            {/* Donate Now Button (Figma Frame 15) */}
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

            {/* Glimpses of Seva Button (Figma Frame 19) */}
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

          {/* Slide Navigation Indicators & Arrows */}
          <div className="flex items-center gap-4 pt-2">
            
            {/* Pill indicators for all 7 slides */}
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    resetTimer();
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-8 bg-white shadow-sm' 
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  title={s.tag}
                />
              ))}
            </div>

            {/* Left / Right Arrow Buttons */}
            <div className="flex items-center gap-1.5 ml-3">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Group 3263 (Node 158:1851) Illustrated Avatar Heads inside bottom-left notch */}
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
      {/* MOBILE / TABLET HERO: Auto-sliding Carousel matching Figma Frame 4078     */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-3 sm:px-6">
        <div className="relative w-full max-w-[360px] mx-auto space-y-3">
          
          {/* Main Mobile Card with Sliding Background */}
          <div className="relative w-full rounded-[28px] overflow-hidden bg-[#CC444B] text-white p-5 shadow-xl text-left space-y-3">
            
            {/* Tag */}
            <div className="inline-block bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider text-amber-200">
              {active.tag}
            </div>

            {/* Title */}
            <h1 className="font-heading font-black text-2xl leading-tight text-white whitespace-pre-line drop-shadow-sm min-h-[60px]">
              {active.title}
            </h1>

            {/* Background Photo Window */}
            <div className="w-full h-40 rounded-2xl overflow-hidden shadow-inner relative bg-black/10">
              <img 
                src={active.image} 
                alt={active.tag} 
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Description */}
            <p className="font-sans text-xs text-white/95 leading-relaxed line-clamp-3">
              {active.desc}
            </p>

            {/* Mobile Actions Row */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={onOpenDonate}
                className="flex-1 bg-white hover:bg-gray-100 text-[#243C4B] font-heading font-bold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Donate Now</span>
                <Heart className="w-3.5 h-3.5 text-[#CC444B] fill-[#CC444B]" />
              </button>

              <button
                onClick={onOpenGlimpses}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-heading font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>Glimpses</span>
              </button>
            </div>

            {/* Mobile Slider Indicators & Arrows */}
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="w-6 h-6 rounded-full bg-black/20 text-white flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-6 h-6 rounded-full bg-black/20 text-white flex items-center justify-center"
                  aria-label="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
