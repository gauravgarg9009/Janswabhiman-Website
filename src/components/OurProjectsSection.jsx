import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Eye } from 'lucide-react';

export default function OurProjectsSection({ onSelectStory }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 'education',
      title: "Saraswati-Free Education for Slum Children",
      icon: "/assets/homework_2728901_1_141_9821.svg",
      image: "/assets/image_141_9820.png",
      category: "Education",
      desc: "Daily free primary education, moral sanskars, uniforms, and study material for children in underserved slum clusters of Delhi & UP."
    },
    {
      id: 'women',
      title: "Women Empowerment",
      icon: "/assets/women_3815364_1_141_9841.svg",
      image: "/assets/frame_61_141_10114.png",
      category: "Empowerment",
      desc: "Vocational sewing training, financial literacy, and legal support for distressed women to earn a dignified living."
    },
    {
      id: 'refugees',
      title: "Pak Hindu Refugees Rehabilitation",
      icon: "/assets/red_cross_3300972_1_141_9866.svg",
      image: "/assets/frame_61_141_10184.png",
      category: "Rehabilitation",
      desc: "Shelter, solar power, clean water, and documentation aid for Pakistani Hindu refugee camps in Delhi and Rajasthan."
    },
    {
      id: 'gauseva',
      title: "Gauseva & Animal Welfare",
      icon: "/assets/animal_rights_5183937_1_141_9799.svg",
      image: "/assets/frame_61_141_10091.png",
      category: "Animal Welfare",
      desc: "Operating dedicated Gaushalas with daily green fodder, veterinary medical treatment, and 24/7 rescue ambulances for injured cattle."
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="w-full bg-[#CC444B] text-white py-16 md:py-24 px-6 md:px-16 relative overflow-hidden">
      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Full 4-Cards Grid                                           */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1440px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex justify-between items-end gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            {/* Subtitle */}
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-12 bg-white/70"></div>
              <span className="font-heading font-medium text-white/90 text-lg">
                What We Do
              </span>
              <div className="h-[1.5px] w-12 bg-white/70"></div>
            </div>

            {/* Title */}
            <h2 className="font-heading font-black text-5xl lg:text-6xl text-white tracking-tight">
              Our Projects
            </h2>

            {/* Description */}
            <p className="font-sans text-white/90 text-base leading-relaxed">
              From education and empowerment to rehabilitation, animal welfare and relief, we work where support can create lasting change.
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

        {/* 4 Projects Cards Grid */}
        <div className="grid grid-cols-4 gap-6 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[24px] p-8 text-black shadow-figma-card flex flex-col justify-between text-left group hover:-translate-y-2 transition-all duration-300 relative"
            >
              <div>
                {/* Large Centered Black Icon */}
                <div className="h-36 flex items-center justify-center mb-6">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="max-h-24 max-w-[90px] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Subtle Red Gradient Line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CC444B]/40 to-transparent mb-6"></div>

                {/* Project Title */}
                <h3 className="font-heading font-extrabold text-[22px] text-black leading-snug mb-4">
                  {project.title}
                </h3>
              </div>

              {/* Read More Pill Button with Circular Arrow */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectStory(project)}
                  className="inline-flex items-center gap-2.5 bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-full shadow transition-all group cursor-pointer"
                >
                  <span>Read More</span>
                  <div className="w-6 h-6 rounded-full bg-white text-[#CC444B] flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-center pt-4">
          <button
            onClick={() => onSelectStory(projects[0])}
            className="bg-white hover:bg-gray-100 text-black font-heading font-bold text-base px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all cursor-pointer"
          >
            <span>View all projects</span>
            <div className="w-6 h-6 rounded-full bg-[#CC444B] text-white flex items-center justify-center">
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW: Exact Figma Frame 4081 (Node 158:2116) Single Card Carousel  */}
      {/* ========================================================================= */}
      <div className="block lg:hidden max-w-sm mx-auto text-center space-y-6">
        
        {/* Title Frame with flanking lines */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1.5px] w-12 bg-white/80" />
          <span className="font-heading font-medium text-white text-[18px] leading-[29px]">
            What We Do
          </span>
          <div className="h-[1.5px] w-12 bg-white/80" />
        </div>

        {/* Heading: Our Projects */}
        <h2 className="font-heading font-black text-[42px] leading-[44px] text-white tracking-tight">
          Our Projects
        </h2>

        {/* Description: Nunito Sans 12px, 17px line-height */}
        <p className="font-sans font-normal text-[12px] leading-[17px] text-white/95 text-center px-4 max-w-[291px] mx-auto">
          From education and empowerment to rehabilitation, animal welfare and relief, we work where support can create lasting change.
        </p>

        {/* Active Project Card (Figma 168:2133: width 285px, height 385px, rounded 19px) */}
        <div className="pt-2 flex justify-center">
          <div className="w-[285px] h-[385px] bg-white rounded-[19px] p-6 shadow-[0px_9.3px_23.3px_rgba(37,42,52,0.15)] flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300">
            <div>
              {/* Centered Black Icon */}
              <div className="h-36 flex items-center justify-center pt-2 pb-4">
                <img
                  src={projects[currentIndex].icon}
                  alt={projects[currentIndex].title}
                  className="max-h-24 max-w-[100px] object-contain"
                />
              </div>

              {/* Red Gradient Divider */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CC444B]/40 to-transparent mb-5"></div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-[18px] text-black leading-snug">
                {projects[currentIndex].title}
              </h3>
            </div>

            {/* Read More Button */}
            <div className="pt-2">
              <button
                onClick={() => onSelectStory(projects[currentIndex])}
                className="inline-flex items-center gap-2.5 bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-xs px-5 py-2.5 rounded-full shadow transition-all cursor-pointer"
              >
                <span>Read More</span>
                <div className="w-5 h-5 rounded-full bg-white text-[#CC444B] flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls: Frame 3220 (Figma 168:2154) Circular Previous & Next */}
        <div className="flex items-center justify-center gap-6 pt-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all shadow cursor-pointer active:scale-95"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all shadow cursor-pointer active:scale-95"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
