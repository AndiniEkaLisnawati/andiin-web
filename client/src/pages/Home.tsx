import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useEffect, useState } from "react";

export default function Home() {
  const activeSection = useScrollSpy([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ], 200);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close mobile menu when clicking a nav item
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen font-inter text-gray-800 bg-gray-50">
      <Header 
        activeSection={activeSection} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
