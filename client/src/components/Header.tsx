import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string | null;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle header shrinking on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className={`fixed w-full top-0 bg-white z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#home" className="font-poppins font-bold text-xl text-primary flex items-center">
            <span>Jane Doe</span>
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
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
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
          </div>
        )}
      </div>
    </header>
  );
}
