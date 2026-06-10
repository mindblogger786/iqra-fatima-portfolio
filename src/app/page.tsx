"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import VisionSection from "@/components/sections/VisionSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import BrandHighlights from "@/components/sections/BrandHighlights";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <main className="relative">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar show={showContent} />
        <HeroSection show={showContent} />
        <StorySection />
        <StrengthsSection />
        <JourneySection />
        <ProjectsSection />
        <ValuesSection />
        <VisionSection />
        <AchievementsSection />
        <BrandHighlights />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}