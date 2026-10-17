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

      {/* DESKTOP VIEW: 4-Cards Carousel with All 7 Programs */}
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
              className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 4 Active Cards Grid */}
        <div className="grid grid-cols-4 gap-6 items-stretch">
          {visibleDesktopProjects.map((project) => (
            <div
              key={project.slug}
              onClick={() => handleProjectClick(project)}
              className="relative rounded-[28px] overflow-hidden p-7 text-white shadow-2xl flex flex-col justify-between text-left group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer min-h-[480px] border border-white/20"
            >
              {/* Background Image with Rich Red-to-Dark Gradient matching Dedicated Page */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Dark gradient for crisp text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 group-hover:via-black/50 transition-colors duration-300" />
                {/* Brand crimson gradient tint matching dedicated page */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-transparent to-black/85" />
              </div>

              {/* Card Top & Body Content */}
              <div className="relative z-10 space-y-4">
                {/* Top Row: Translucent glass icon badge + Sanskrit quote badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center p-2.5 shadow-md group-hover:bg-white/30 group-hover:scale-105 transition-all">
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="w-full h-full object-contain brightness-0 invert drop-shadow"
                    />
                  </div>

                  {project.sanskrit && (
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25 text-amber-200 text-[11px] font-heading font-bold shadow-xs truncate max-w-[190px]">
                      <span className="truncate">"{project.sanskrit}"</span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2 pt-2">
                  <h3 className="font-heading font-black text-[21px] text-white leading-snug drop-shadow-md group-hover:text-amber-200 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {project.meaning && (
                    <p className="font-sans text-[11.5px] text-amber-100/90 italic line-clamp-1">
                      — {project.meaning}
                    </p>
                  )}

                  <p className="font-sans text-xs text-white/90 line-clamp-3 leading-relaxed drop-shadow-xs">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Read More Pill Button with Circular Arrow */}
              <div className="relative z-10 pt-6">
                <div className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-[#243C4B] group-hover:bg-amber-400 group-hover:text-gray-950 font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all">
                  <span>Explore Programme</span>
                  <div className="w-6 h-6 rounded-full bg-[#CC444B] group-hover:bg-gray-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
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
              className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* MOBILE VIEW: Single Card with Indicators */}
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

        {/* Mobile Project Card */}
        <div
          onClick={() => handleProjectClick(currentMobileProject)}
          className="relative rounded-[28px] overflow-hidden p-7 text-white shadow-2xl text-left space-y-4 cursor-pointer min-h-[460px] flex flex-col justify-between border border-white/20"
        >
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src={currentMobileProject.heroImage}
              alt={currentMobileProject.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-transparent to-black/85" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center p-2.5 shadow-md">
                <img
                  src={currentMobileProject.icon}
                  alt={currentMobileProject.title}
                  className="w-full h-full object-contain brightness-0 invert drop-shadow"
                />
              </div>

              {currentMobileProject.sanskrit && (
                <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25 text-amber-200 text-[11px] font-heading font-bold shadow-xs">
                  <span>"{currentMobileProject.sanskrit}"</span>
                </div>
              )}
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="font-heading font-black text-2xl text-white leading-snug drop-shadow-md">
                {currentMobileProject.title}
              </h3>

              {currentMobileProject.meaning && (
                <p className="font-sans text-xs text-amber-100/90 italic">
                  — {currentMobileProject.meaning}
                </p>
              )}

              <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-3 drop-shadow-xs">
                {currentMobileProject.description}
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-4">
            <div className="inline-flex items-center gap-2 bg-white text-[#243C4B] font-heading font-bold text-xs px-5 py-2.5 rounded-full shadow-lg">
              <span>Explore Programme</span>
              <div className="w-5 h-5 rounded-full bg-[#CC444B] text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls & dots */}
        <div className="flex items-center justify-between pt-2 px-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1.5">
            {programsData.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
}
onClick = { handlePrev }
className = "w-10 h-10 rounded-full bg-black/25 text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-black/40 transition-colors"
aria - label="Previous"
  >
  <ChevronLeft className="w-5 h-5" />
          </button >

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
        </div >

      </div >

    </section >
  );
}
