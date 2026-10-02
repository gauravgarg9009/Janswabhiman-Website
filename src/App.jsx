import React, { useState } from 'react';
import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ImpactCounterGrid from './components/ImpactCounterGrid';
import OurProjectsSection from './components/OurProjectsSection';
import CausesSection from './components/CausesSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import VolunteerModal from './components/VolunteerModal';
import StoryModal from './components/StoryModal';
import GlimpsesModal from './components/GlimpsesModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isGlimpsesOpen, setIsGlimpsesOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#CC444B] selection:text-white">
      {/* 1. Top Header (Social Links + Location, Phone, Time + Mobile Hamburger) */}
      <TopHeader 
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* 2. Main Header (Logo, JSWS Title, Donate Now & Volunteer buttons) */}
      <MainHeader 
        onOpenDonate={() => setIsDonateOpen(true)} 
        onOpenVolunteer={() => setIsVolunteerOpen(true)} 
      />

      {/* 3. Sticky Navbar (Home, Who We Are, What We Do, Our impact, CSR + Mobile Drawer) */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenDonate={() => setIsDonateOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 4. Main Content Sections matching Figma */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          onOpenDonate={() => setIsDonateOpen(true)} 
          onOpenGlimpses={() => setIsGlimpsesOpen(true)} 
        />

        {/* Who We Are / About Us */}
        <WhoWeAreSection 
          onOpenAboutModal={() => {
            const el = document.getElementById('whoweare');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* From Seva to Change / Impact Counter Grid */}
        <ImpactCounterGrid />

        {/* What We Do / Our Projects */}
        <OurProjectsSection 
          onSelectStory={(story) => setSelectedStory(story)}
        />

        {/* Causes that need a helping hand */}
        <CausesSection 
          onSelectStory={(story) => setSelectedStory(story)}
        />

        {/* Be part of the change / Get Involved */}
        <GetInvolvedSection 
          onOpenDonate={() => setIsDonateOpen(true)}
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
        />
      </main>

      {/* 5. Footer matching Figma image 4 */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* 6. Interactive Dialogues */}
      <DonateModal 
        isOpen={isDonateOpen} 
        onClose={() => setIsDonateOpen(false)} 
      />

      <VolunteerModal 
        isOpen={isVolunteerOpen} 
        onClose={() => setIsVolunteerOpen(false)} 
      />

      <StoryModal 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      <GlimpsesModal 
        isOpen={isGlimpsesOpen} 
        onClose={() => setIsGlimpsesOpen(false)} 
      />
    </div>
  );
}
