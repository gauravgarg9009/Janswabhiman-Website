import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

export default function GlimpsesOfSeva() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Slum School Daily Class",
      category: "Education",
      image: "/assets/image_9_238_650.png",
      caption: "Saraswati Slum Education Center in Delhi - over 100 kids learning every morning."
    },
    {
      id: 2,
      title: "Women Vocational Sewing Unit",
      category: "Empowerment",
      image: "/assets/image_10_238_652.png",
      caption: "Empowering young women with skill training and financial independence."
    },
    {
      id: 3,
      title: "Pak Hindu Refugee Camp Seva",
      category: "Rehabilitation",
      image: "/assets/image_11_238_654.png",
      caption: "Distributing ration kits, winter blankets, and medical support."
    },
    {
      id: 4,
      title: "Gaushala & Injured Gaumata Care",
      category: "Gauseva",
      image: "/assets/image_12_238_656.png",
      caption: "24/7 veterinary care and green fodder distribution for rescued animals."
    }
  ];

  return (
    <section id="glimpses" className="py-16 md:py-24 px-4 md:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-red-100 text-brand-red font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-md flex items-center justify-center gap-2 w-fit mx-auto">
            <Camera className="w-4 h-4" />
            <span>Visual Journal</span>
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Glimpses of <span className="text-brand-red">Ground Seva</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Real photos captured directly from our daily operations across Saraswati slum schools, women centers, refugee camps, and gaushalas.
          </p>
        </div>

        {/* 4 Large Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-figma-card border border-gray-100 bg-gray-100 aspect-[4/3] sm:aspect-[3/4] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white transition-opacity">
                <span className="bg-brand-red text-white text-[10px] font-black uppercase px-2.5 py-1 rounded w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 opacity-90 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full max-h-[70vh] object-cover" />
              
              <div className="p-6 bg-white text-left space-y-2">
                <span className="bg-red-100 text-brand-red text-xs font-bold px-3 py-1 rounded-md">
                  {selectedImage.category}
                </span>
                <h3 className="font-heading font-bold text-2xl text-gray-900">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
