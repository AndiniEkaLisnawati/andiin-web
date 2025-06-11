import { useState, useEffect } from "react";
import { Menu, X, Flower2 } from "lucide-react";
import { useRef } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../assets/menuV4.json";
interface HeaderProps {
  activeSection: string | null;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Header({
  activeSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lottieRef = useRef<any>(null); // tambahkan `any` agar tidak error TypeScript

  // Handle header shrinking on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    if (lottieRef.current) {
      if (isMobileMenuOpen) {
        lottieRef.current.setDirection(-1); 
        lottieRef.current.play();
      } else {
        lottieRef.current.setDirection(1);
        lottieRef.current.play();
      }
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header id="header" className={`fixed w-full top-0 bg-white z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#home" className="font-poppins font-bold text-xl text-primary flex items-center">
            <span> 
            <a href="#home" className="font-poppins font-bold text-xl text-primary flex items-center">
            <Flower2/>
            <Flower2/>
            <Flower2/>
          </a>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
         
            <button
      aria-label="Toggle menu"
      className="md:hidden w-10 h-10 text-gray-700 focus:outline-none"
      onClick={handleToggle}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={menuAnimation}
        autoplay={false}
        loop={false}
      />
    </button>
        </div>

        {/* Mobile Navigation Menu */}
    {isMobileMenuOpen && (
  <div className="md:hidden mt-4 pb-4">
    <nav className="flex flex-col space-y-4">
      {[
        { label: "Home", href: "#home", section: "home" },
        { label: "About", href: "#about", section: "about" },
        { label: "Skills", href: "#skills", section: "skills" },
        { label: "Projects", href: "#projects", section: "projects" },
        { label: "Contact", href: "#contact", section: "contact" },
      ].map(({ label, href, section }) => (
        <a
          key={section}
          href={href}
          onClick={() => {
            // Tutup menu dan rewind animasi ke hamburger
            if (lottieRef.current) {
              lottieRef.current.setDirection(-1);
              lottieRef.current.play();
            }
            setIsMobileMenuOpen(false);
          }}
          className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${
            activeSection === section ? "active" : ""
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  </div>
)}

      </div>
    </header>
  );
}
