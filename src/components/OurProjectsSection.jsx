import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import programsData from '../data/programs.json';

export default function OurProjectsSection({ onSelectStory, onNavigateToProgram }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % programsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? programsData.length - 1 : prev - 1));
  };

  const visibleDesktopProjects = [
    programsData[currentIndex % programsData.length],
    programsData[(currentIndex + 1) % programsData.length],
    programsData[(currentIndex + 2) % programsData.length],
    programsData[(currentIndex + 3) % programsData.length]
  ];

  const currentMobileProject = programsData[currentIndex];

  const handleProjectClick = (proj) => {
    if (onNavigateToProgram) {
      onNavigateToProgram(proj.slug);
    } else if (onSelectStory) {
      onSelectStory({
        title: proj.title,
        category: "Program",
        image: proj.heroImage,
        desc: proj.description,
        content: proj.fullText
      });
    }
  };

  return (
    <section id="projects" className="w-full bg-[#CC444B] text-white py-16 md:py-24 px-6 md:px-16 relative overflow-hidden">
      
      {/* DESKTOP VIEW: 4-Cards Carousel matching exact Figma & Screenshot Design */}
      <div className="hidden lg:block max-w-[1440px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex justify-between items-end gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-12 bg-white/70"></div>
              <span className="font-heading font-medium text-white/90 text-lg">
                What We Do
              </span>
              <div className="h-[1.5px] w-12 bg-white/70"></div>
            </div>

            <h2 className="font-heading font-black text-5xl lg:text-6xl text-white tracking-tight">
              Our Projects
            </h2>

            <p className="font-sans text-white/90 text-base leading-relaxed">
              From education and empowerment to rehabilitation, animal welfare, and emergency relief, explore all seven domains of ground seva.
            </p>
          </div>

          {/* Desktop Carousel Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 4 Active Cards Grid */}
        <div className="grid grid-cols-4 gap-6 items-stretch">
          {visibleDesktopProjects.map((project, idx) => (
            <div
              key={project.slug}
              onClick={() => handleProjectClick(project)}
              className="bg-white rounded-[26px] p-7 md:p-8 text-black shadow-xl flex flex-col justify-between text-left group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[460px] border border-black/5 relative"
            >
              <div>
                {/* Top Centered Black SVG Icon */}
                <div className="h-28 sm:h-32 flex items-center justify-center mb-5">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="max-h-20 sm:max-h-24 max-w-[110px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Subtle Red Gradient Divider Line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CC444B]/35 to-transparent mb-5" />

                {/* Mission Title */}
                <h3 className="font-heading font-extrabold text-[20px] sm:text-[21px] text-gray-900 group-hover:text-[#CC444B] leading-snug mb-2 min-h-[52px] flex items-center transition-colors">
                  {project.title}
                </h3>

                {/* Sanskrit Shloka in Red Italic */}
                {project.sanskrit && (
                  <p className="font-sans text-[12.5px] font-semibold text-[#CC444B] italic mb-2 tracking-wide truncate">
                    "{project.sanskrit}"
                  </p>
                )}

                {/* Scope / Subtitle */}
                <p className="font-sans text-[12px] text-gray-500 leading-relaxed line-clamp-2 min-h-[36px]">
                  {project.cardScope || project.subTitle || project.meaning || project.description}
                </p>
              </div>

              {/* Red Explore Programme Pill Button */}
              <div className="pt-6">
                <div className="w-full bg-[#CC444B] group-hover:bg-[#b0353c] text-white font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md transition-all flex items-center justify-between group-hover:shadow-lg">
                  <span>Explore Programme</span>
                  <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator for desktop matching screenshot */}
        <div className="flex justify-center items-center gap-2 pt-4">
          {programsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* MOBILE VIEW: Single Card Carousel matching exact Figma & Screenshot Design */}
      <div className="block lg:hidden max-w-md mx-auto text-center space-y-6">
        
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1.5px] w-12 bg-white/70"></div>
          <span className="font-heading font-medium text-white/90 text-sm">
            What We Do
          </span>
          <div className="h-[1.5px] w-12 bg-white/70"></div>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
          Our Projects
        </h2>

        <p className="font-sans text-white/90 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
          From education and empowerment to rehabilitation, animal welfare, and emergency relief, explore all seven domains of ground seva.
        </p>

        {/* Mobile Project Card */}
        <div 
          onClick={() => handleProjectClick(currentMobileProject)}
          className="bg-white rounded-[24px] p-7 text-black shadow-xl text-left flex flex-col justify-between cursor-pointer min-h-[440px] border border-black/5"
        >
          <div>
            {/* Centered Black Icon */}
            <div className="h-28 flex items-center justify-center mb-5">
              <img
                src={currentMobileProject.icon}
                alt={currentMobileProject.title}
                className="max-h-20 max-w-[100px] object-contain"
              />
            </div>

            {/* Red Gradient Divider */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CC444B]/35 to-transparent mb-5" />

            {/* Title */}
            <h3 className="font-heading font-extrabold text-[20px] text-gray-900 leading-snug mb-2 min-h-[50px] flex items-center">
              {currentMobileProject.title}
            </h3>

            {/* Sanskrit */}
            {currentMobileProject.sanskrit && (
              <p className="font-sans text-xs font-semibold text-[#CC444B] italic mb-2 tracking-wide truncate">
                "{currentMobileProject.sanskrit}"
              </p>
            )}

            {/* Scope */}
            <p className="font-sans text-xs text-gray-500 leading-relaxed line-clamp-2 min-h-[34px]">
              {currentMobileProject.cardScope || currentMobileProject.subTitle || currentMobileProject.meaning || currentMobileProject.description}
            </p>
          </div>

          {/* Explore Button */}
          <div className="pt-5">
            <div className="w-full bg-[#CC444B] text-white font-heading font-bold text-xs px-5 py-3 rounded-full shadow-md flex items-center justify-between">
              <span>Explore Programme</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center shadow-xs shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls & dots */}
        <div className="flex items-center justify-between pt-2 px-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black/25 text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-black/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5">
            {programsData.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/45'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black/25 text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-black/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
}
