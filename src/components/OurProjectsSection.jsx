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

        {/* 4 Active Cards Grid with Full Background Image */}
        <div className="grid grid-cols-4 gap-6 items-stretch">
          {visibleDesktopProjects.map((project) => (
            <div
              key={project.slug}
              onClick={() => handleProjectClick(project)}
              className="relative rounded-[24px] overflow-hidden p-6 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer border border-white/20 group min-h-[350px]"
            >
              {/* Background Image across Whole Box */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.cardImage || project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Contrast gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:via-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#8B1E24]/60 via-transparent to-black/85" />
              </div>

              {/* Card Header Content */}
              <div className="relative z-10 space-y-5">
                {/* Authentic Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center p-3 shadow-lg group-hover:scale-110 group-hover:bg-[#CC444B] transition-all duration-300">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-full h-full object-contain brightness-0 invert drop-shadow"
                  />
                </div>

                {/* Big and Catchy Mission Title */}
                <div>
                  <h3 className="font-heading font-black text-2xl lg:text-[25px] text-white leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] group-hover:text-red-100 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Explore Programme Pill Button */}
              <div className="relative z-10 pt-4">
                <div className="w-full bg-white text-[#1F2937] group-hover:bg-[#CC444B] group-hover:text-white font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg transition-all flex items-center justify-between border border-white/30">
                  <span>Explore Programme</span>
                  <div className="w-6 h-6 rounded-full bg-[#CC444B] group-hover:bg-white text-white group-hover:text-[#CC444B] flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs shrink-0">
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

      {/* MOBILE VIEW: Single Card with Full Background Image & Indicators */}
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

        {/* Mobile Project Card with Full Background Image */}
        <div
          onClick={() => handleProjectClick(currentMobileProject)}
          className="relative rounded-[24px] overflow-hidden p-6 text-white shadow-xl text-left flex flex-col justify-between cursor-pointer min-h-[350px] border border-white/20 group"
        >
          {/* Background image across whole mobile box */}
          <div className="absolute inset-0 z-0">
            <img
              src={currentMobileProject.cardImage || currentMobileProject.heroImage}
              alt={currentMobileProject.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#8B1E24]/60 via-transparent to-black/85" />
          </div>

          <div className="relative z-10 space-y-5">
            <div className="w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center p-3 shadow-md">
              <img
                src={currentMobileProject.icon}
                alt={currentMobileProject.title}
                className="w-full h-full object-contain brightness-0 invert drop-shadow"
              />
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl text-white leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                {currentMobileProject.title}
              </h3>
            </div>
          </div>

          <div className="relative z-10 pt-4">
            <div className="w-full bg-white text-[#1F2937] font-heading font-bold text-xs px-5 py-3 rounded-full shadow-lg flex items-center justify-between border border-white/30">
              <span>Explore Programme</span>
              <div className="w-6 h-6 rounded-full bg-[#CC444B] text-white flex items-center justify-center shadow-xs shrink-0">
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
