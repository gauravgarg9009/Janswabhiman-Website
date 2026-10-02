import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function HeroSection({ onOpenDonate, onOpenGlimpses }) {
  const slides = [
    {
      id: 'saraswati',
      tag: "Saraswati-Free Education for Slum Children",
      title: "Knowledge With Dignity.\nLearning With Purpose.",
      desc: "Bringing quality education, values and opportunity to children in underserved communities across Bharat.",
      image: "/images/home/slider/saraswati-children.jpg",
      sanskrit: "अविद्यातिमिरभेदिनी विद्या",
      href: "/saraswati"
    },
    {
      id: 'women-empowerment',
      tag: "Women Empowerment",
      title: "Together We Empower.\nTogether We Transform.",
      desc: "Creating opportunities for women and daughters through Samuhik Vivah, Kanya Poojan, vocational self-reliance, and honoring Shakti.",
      image: "/images/home/slider/women-empowerment.webp",
      sanskrit: "न उद्धार्या — स्वयमेव शक्तिः",
      href: "/women-empowerment"
    },
    {
      id: 'pak-hindu-rehabilitation',
      tag: "Pak Hindu Refugees Rehabilitation",
      title: "A Home Of Hope.\nA Life Of Respect.",
      desc: "Helping Pak Hindu refugee families rebuild with shelter, education, and lasting dignity across Jodhpur, Jaisalmer, and Delhi NCR.",
      image: "/images/home/slider/pak-hindu-rehabilitation-hero.webp",
      sanskrit: "शरणं प्रपन्नानां रक्षणम्",
      href: "/pak-hindu-refugees-rehabilitation"
    },
    {
      id: 'gauseva',
      tag: "Gauseva & Animal Welfare",
      title: "Compassion In Action.\nCare For Every Life.",
      desc: "Rescuing, healing, and protecting cows with 24/7 dedicated ambulance rescues and emergency medical treatment.",
      image: "/images/home/slider/gauseva.png",
      sanskrit: "गावो विश्वस्य मातरः",
      href: "/gauseva-gaushala-animal-welfare"
    },
    {
      id: 'gaushala',
      tag: "Gaushala Sanctuary",
      title: "Safe Shelter.\nLifelong Care.",
      desc: "Building and sustaining sacred havens where over 100 rescued and abandoned cattle receive food, shelter, and lifelong medical care.",
      image: "/images/home/slider/gaushala-hero.webp",
      sanskrit: "सुरभिसेवा परमो धर्मः",
      href: "/gaushala"
    },
    {
      id: 'tribal-welfare',
      tag: "Tribal Welfare & Heritage",
      title: "Honouring Roots.\nRestoring Dignity.",
      desc: "Supporting tribal families through culture, care, community langars, clothes distribution, and Sanatan sanskars.",
      image: "/images/home/slider/tribal-welfare.webp",
      sanskrit: "जनजाति गौरवम् राष्ट्रस्य आधारः",
      href: "/tribal-welfare"
    },
    {
      id: 'relief-work',
      tag: "Emergency & Disaster Relief",
      title: "When Crisis Strikes.\nWe Stand Ready.",
      desc: "Delivering timely relief — warm blankets, flood response, dry rations, and medical care — when communities need it most.",
      image: "/images/home/slider/relief-work.webp",
      sanskrit: "आपत्काले सेवा परमो धर्मः",
      href: "/relief-work"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);
  const touchStartRef = useRef(null);

  // Auto-play interval: 3500ms matching test2.janswabhiman.org
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, currentSlide, slides.length]);

  const handleNext = () => {
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    if (touch) {
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      setIsPaused(true);
    }
  };

  const handleTouchEnd = (e) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    setIsPaused(false);
    if (!start) return;

    const touch = e.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    // Horizontal swipe threshold: 40px
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const active = slides[currentSlide];

  return (
    <section 
      id="home" 
      className="w-full bg-white pt-4 md:pt-6 pb-6 md:pb-10 px-0 md:px-4 lg:px-0 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
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

        {/* Dynamic Image Slider inside Figma Ellipse 11 (node 141:9539: left 811px, top 49px, 552x552) */}
        <div className="absolute left-[811px] top-[49px] w-[552px] h-[552px] rounded-full overflow-hidden shadow-[0px_0px_15.2px_0px_rgba(0,0,0,0.52)] z-10 pointer-events-none bg-black/10">
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((s) => (
              <div key={s.id} className="w-full h-full shrink-0 relative">
                <img
                  src={s.image}
                  alt={s.tag}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#CC444B]/35 via-transparent to-black/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Overlay: slider-content (Figma node 141:9540) */}
        <div className="absolute left-[99px] top-[34px] w-[700px] h-[425px] flex flex-col justify-between items-start text-left z-20">
          
          {/* Sanskrit & Category Tag with transition */}
          <div className="space-y-1.5 overflow-hidden">
            <div 
              key={`tag-${currentSlide}`}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 animate-hero-slide"
            >
              <span className="font-heading font-extrabold text-[11px] uppercase tracking-widest text-amber-200">
                {active.tag}
              </span>
              {active.sanskrit && (
                <span className="text-white/90 text-[11px] font-sans italic border-l border-white/30 pl-2">
                  "{active.sanskrit}"
                </span>
              )}
            </div>

            {/* Title with smooth sliding animation */}
            <h1 
              key={`title-${currentSlide}`}
              className="font-heading font-black text-[50px] leading-[60px] text-white tracking-tight whitespace-pre-line drop-shadow-md animate-hero-slide"
            >
              {active.title}
            </h1>
          </div>

          {/* Description */}
          <p 
            key={`desc-${currentSlide}`}
            className="font-sans font-normal text-[17px] leading-[28px] text-white/95 max-w-[580px] animate-hero-slide"
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
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={currentSlide === idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-8 bg-[#D6EEF7] shadow-sm' 
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Show ${s.tag}`}
                  title={s.tag}
                />
              ))}
            </div>

            {/* Left / Right Arrow Buttons */}
            <div className="flex items-center gap-1.5 ml-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/20"
                aria-label="Next slide"
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
          
          {/* Main Mobile Card with Horizontal Sliding Background */}
          <div className="relative w-full rounded-[28px] overflow-hidden bg-[#CC444B] text-white p-5 shadow-xl text-left space-y-3">
            
            {/* Tag */}
            <div 
              key={`mob-tag-${currentSlide}`}
              className="inline-block bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider text-amber-200 animate-hero-slide"
            >
              {active.tag}
            </div>

            {/* Title */}
            <h1 
              key={`mob-title-${currentSlide}`}
              className="font-heading font-black text-2xl leading-tight text-white whitespace-pre-line drop-shadow-sm min-h-[60px] animate-hero-slide"
            >
              {active.title}
            </h1>

            {/* Horizontal Sliding Photo Window */}
            <div className="w-full h-44 rounded-2xl overflow-hidden shadow-inner relative bg-black/10">
              <div 
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((s) => (
                  <div key={s.id} className="w-full h-full shrink-0 relative">
                    <img 
                      src={s.image} 
                      alt={s.tag} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p 
              key={`mob-desc-${currentSlide}`}
              className="font-sans text-xs text-white/95 leading-relaxed line-clamp-3 animate-hero-slide"
            >
              {active.desc}
            </p>

            {/* Mobile Actions Row */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={onOpenDonate}
                className="flex-1 bg-white hover:bg-gray-100 text-[#243C4B] font-heading font-bold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Donate Now</span>
                <Heart className="w-3.5 h-3.5 text-[#CC444B] fill-[#CC444B]" />
              </button>

              <button
                onClick={onOpenGlimpses}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-heading font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>Glimpses</span>
              </button>
            </div>

            {/* Mobile Slider Indicators & Arrows */}
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide indicators">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={currentSlide === idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? 'w-5 bg-[#D6EEF7]' : 'w-1.5 bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-7 h-7 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next slide"
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
