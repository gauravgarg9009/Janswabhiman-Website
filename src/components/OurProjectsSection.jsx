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
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            {/* Subtitle */}
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-12 bg-white/70"></div>
              <span className="font-heading font-medium text-white/90 text-base md:text-lg">
                What We Do
              </span>
              <div className="h-[1.5px] w-12 bg-white/70"></div>
            </div>

            {/* Title */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Our Projects
            </h2>

            {/* Description */}
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              From education and empowerment to rehabilitation, animal welfare and relief, we work where support can create lasting change.
            </p>
          </div>

          {/* Desktop Carousel Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 4 Projects Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-[24px] p-6 sm:p-8 text-black shadow-figma-card flex flex-col justify-between text-left group hover:-translate-y-2 transition-all duration-300 relative"
            >
              <div>
                {/* Large Centered Black Icon */}
                <div className="h-32 sm:h-36 flex items-center justify-center mb-6">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="max-h-24 max-w-[90px] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Subtle Red Gradient Line (from Figma sec_projects.png) */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CC444B]/40 to-transparent mb-6"></div>

                {/* Project Title */}
                <h3 className="font-heading font-extrabold text-xl sm:text-[22px] text-black leading-snug mb-4">
                  {project.title}
                </h3>
              </div>

              {/* Read More Pill Button with Circular Arrow */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectStory(project)}
                  className="inline-flex items-center gap-2.5 bg-[#CC444B] hover:bg-red-700 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-full shadow transition-all group"
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          
          {/* Mobile Arrows */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-black/20 text-white flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black/20 text-white flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* View All Projects Button (Figma sec_projects.png) */}
          <button
            onClick={() => onSelectStory(projects[0])}
            className="bg-white hover:bg-gray-100 text-black font-heading font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all"
          >
            <span>View all projects</span>
            <div className="w-6 h-6 rounded-full bg-[#CC444B] text-white flex items-center justify-center">
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
