import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-poppins font-bold text-xl text-primary/80">Andin </a>
            <p className="text-gray-400 mt-2">Junior Front-End Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mb-4 md:mb-0 md:mr-8">
              <a href="#home" className="text-gray-300 hover:text-primary/80 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-primary/80 transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-primary/80 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-primary/80 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-primary/80 transition-colors">Contact</a>
            </nav>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/andiniekalisnawati/" className="text-gray-400 hover:text-primary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/AndiniEkaLisnawati" className="text-gray-400 hover:text-primary/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/sy.andnnn" className="text-gray-400 hover:text-primary/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Andin . All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Made with <span className="text-primary">♥</span> by Me</p>
        </div>
      </div>
    </footer>
  );
}
