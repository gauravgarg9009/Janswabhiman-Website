import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Search, BookOpen, Share2 } from 'lucide-react';
import storiesData from '../data/stories.json';

export default function StoriesPage({ onSelectStory, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'Saraswati-Free Education for Slum Children',
    'Women Empowerment',
    'Pak Hindu Refugees Rehabilitation',
    'Gauseva & Animal Welfare',
    'Gaushala',
    'Tribal Welfare',
    'Relief Work'
  ];

  const filteredStories = storiesData.filter(story => {
    const matchesCategory = selectedCategory === 'ALL' || story.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-5 pb-3">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#CC444B] hover:text-red-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
          <span className="font-heading font-semibold text-[#CC444B] text-base sm:text-lg">
            Ground Realities & Impact
          </span>
          <div className="h-[1.5px] w-12 sm:w-16 bg-[#CC444B]" />
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight">
          Our <span className="text-[#CC444B]">Stories</span>
        </h1>

        <p className="font-sans text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Witness real chronicles of resilience, revival, and seva from remote tribal belts, refugee camps, floodplains, and gaushalas across Bharat.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto pt-2">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search stories, topics, places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-sans focus:outline-none focus:border-[#CC444B] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Category Filter Pills (Horizontal scrolling on mobile) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#CC444B] text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat === 'ALL' ? 'All Stories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-8">
        <div className="text-left text-xs text-gray-500 font-sans mb-6">
          Showing {filteredStories.length} of {storiesData.length} stories
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Hero Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img 
                    src={story.heroImage} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/assets/image_141_9820.png";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#CC444B] text-white text-[11px] font-heading font-extrabold px-3 py-1 rounded-full shadow-md">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left space-y-3">
                  <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-[#CC444B] transition-colors leading-snug line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-50 text-xs font-heading font-bold text-[#CC444B]">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>Read Story</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#CC444B] flex items-center justify-center group-hover:bg-[#CC444B] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
