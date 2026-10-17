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
        image: proj.cardImage || proj.heroImage,
        desc: proj.description,
        content: proj.fullText
      });
    }
  };

  return (
    <section id="projects" className="w-full bg-[#CC444B] text-white py-16 md:py-24 px-6 md:px-16 relative overflow-hidden">

      {/* DESKTOP VIEW: 4-Cards Carousel with Full Background Image */}
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
              className="w-11 h-11 rounded-full bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 4 Active Cards Grid with Full Background Image & Figma Structure */}
        <div className="grid grid-cols-4 gap-6 items-stretch">
          {visibleDesktopProjects.map((project) => (
            <div
              key={project.slug}
              onClick={() => handleProjectClick(project)}
              className="relative rounded-[26px] overflow-hidden p-6 sm:p-7 text-white shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer border border-white/20 group min-h-[460px]"
            >
              {/* Background Image across Whole Box */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.cardImage || project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Contrast gradient overlays for superior readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50 group-hover:via-black/70 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#8B1E24]/60 via-transparent to-black/85" />
              </div>

              {/* Upper Content Area matching Figma layout */}
              <div className="relative z-10">
                {/* Centered Icon (Figma Structure) */}
                <div className="h-24 sm:h-28 flex items-center justify-center mb-2">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="max-h-18 sm:max-h-20 max-w-[100px] object-contain brightness-0 invert drop-shadow group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                {/* Subtle Divider Line (Figma Structure) */}
                <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-3" />

                {/* Text Hierarchy: Title, Sanskrit, Scope */}
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-[20px] sm:text-[21px] text-white group-hover:text-red-200 leading-snug drop-shadow-md min-h-[52px] flex items-center transition-colors">
                    {project.title}
                  </h3>

                  {/* Sanskrit Quote in Crimson Italic (Figma Structure) */}
                  {project.sanskrit && (
                    <p className="font-sans text-[12.5px] font-semibold text-[#FF858B] italic tracking-wide truncate">
                      "{project.sanskrit}"
                    </p>
                  )}

                  {/* Scope / Subtitle */}
                  <p className="font-sans text-[12px] text-white/80 leading-relaxed line-clamp-2 min-h-[36px] drop-shadow-xs">
                    {project.cardScope || project.subTitle || project.meaning || project.description}
                  </p>
                </div>
              </div>

              {/* Red Explore Programme Pill Button (Figma Structure) */}
              <div className="relative z-10 pt-5">
                <div className="w-full bg-[#CC444B] hover:bg-[#b5333a] text-white font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg transition-all flex items-center justify-between border border-white/20 group-hover:shadow-xl">
                  <span>Explore Programme</span>
                  <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center shadow-xs shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator for desktop */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {programsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${currentIndex === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'
                }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* MOBILE VIEW: Single Card with Full Background Image & Figma Structure */}
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

        {/* Mobile Project Card with Full Background Image & Figma Structure */}
        <div
          onClick={() => handleProjectClick(currentMobileProject)}
          className="relative rounded-[26px] overflow-hidden p-6 sm:p-7 text-white shadow-2xl text-left flex flex-col justify-between cursor-pointer min-h-[460px] border border-white/20 group"
        >
          {/* Background image across whole mobile box */}
          <div className="absolute inset-0 z-0">
            <img
              src={currentMobileProject.cardImage || currentMobileProject.heroImage}
              alt={currentMobileProject.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#8B1E24]/60 via-transparent to-black/85" />
          </div>

          <div className="relative z-10">
            {/* Centered Icon like Figma */}
            <div className="h-24 flex items-center justify-center mb-2">
              <img
                src={currentMobileProject.icon}
                alt={currentMobileProject.title}
                className="max-h-18 max-w-[95px] object-contain brightness-0 invert drop-shadow"
              />
            </div>

            {/* Subtle Divider Line like Figma */}
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent my-3" />

            {/* Figma Content Hierarchy */}
            <div className="space-y-2">
              <h3 className="font-heading font-black text-[20px] text-white leading-snug drop-shadow-md min-h-[48px] flex items-center">
                {currentMobileProject.title}
              </h3>

              {currentMobileProject.sanskrit && (
                <p className="font-sans text-xs font-semibold text-[#FF858B] italic tracking-wide truncate">
                  "{currentMobileProject.sanskrit}"
                </p>
              )}

              <p className="font-sans text-xs text-white/80 leading-relaxed line-clamp-2 min-h-[34px] drop-shadow-xs">
                {currentMobileProject.cardScope || currentMobileProject.subTitle || currentMobileProject.meaning || currentMobileProject.description}
              </p>
            </div>
          </div>

          {/* Red Explore Button */}
          <div className="relative z-10 pt-5">
            <div className="w-full bg-[#CC444B] text-white font-heading font-bold text-xs px-5 py-3 rounded-full shadow-lg flex items-center justify-between border border-white/20">
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
                className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/45'
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
