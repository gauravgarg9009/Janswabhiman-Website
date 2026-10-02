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
              className="bg-white rounded-[24px] p-8 text-black shadow-figma-card flex flex-col justify-between text-left group hover:-translate-y-2 transition-all duration-300 relative cursor-pointer"
            >
              <div>
                {/* Large Centered Black Icon */}
                <div className="h-32 flex items-center justify-center mb-6">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="max-h-20 max-w-[80px] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Subtle Red Gradient Line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CC444B]/40 to-transparent mb-4"></div>

                {/* Project Title */}
                <h3 className="font-heading font-extrabold text-[20px] text-black leading-snug mb-2 group-hover:text-[#CC444B] transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Sanskrit motto snippet */}
                {project.sanskrit && (
                  <p className="font-heading text-xs text-[#CC444B] font-bold italic mb-3">
                    "{project.sanskrit}"
                  </p>
                )}

                <p className="font-sans text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Read More Pill Button with Circular Arrow */}
              <div className="pt-6">
                <div className="inline-flex items-center gap-2.5 bg-[#CC444B] group-hover:bg-red-700 text-white font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow transition-all">
                  <span>Explore Programme</span>
                  <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center">
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
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
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
          className="bg-white rounded-[24px] p-6 text-black shadow-2xl text-left space-y-4 cursor-pointer"
        >
          <div className="h-28 flex items-center justify-center">
            <img
              src={currentMobileProject.icon}
              alt={currentMobileProject.title}
              className="max-h-20 object-contain"
            />
          </div>

          <div className="h-[1.5px] w-full bg-[#CC444B]/20"></div>

          <h3 className="font-heading font-extrabold text-xl text-black leading-snug">
            {currentMobileProject.title}
          </h3>

          {currentMobileProject.sanskrit && (
            <p className="font-heading text-xs text-[#CC444B] font-bold italic">
              "{currentMobileProject.sanskrit}"
            </p>
          )}

          <p className="font-sans text-xs text-gray-700 leading-relaxed line-clamp-3">
            {currentMobileProject.description}
          </p>

          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-[#CC444B] text-white font-heading font-bold text-xs px-5 py-2.5 rounded-full shadow">
              <span>Explore Programme</span>
              <ArrowUpRight className="w-4 h-4" />
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
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
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
