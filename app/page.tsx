'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import Cinematic3DLoader from '@/components/Cinematic3DLoader';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* Ultra-Premium 3D Cinematic Loader */}
      {isLoading && <Cinematic3DLoader onComplete={() => setIsLoading(false)} />}

      {/* 1. Hero Section */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Services Section */}
      <ServicesSection />

      {/* 6. Projects Section */}
      <ProjectsSection />

      {/* 7. Experience Section */}
      <ExperienceSection />

      {/* 8. Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Contact Drawer / Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </main>
  );
}
