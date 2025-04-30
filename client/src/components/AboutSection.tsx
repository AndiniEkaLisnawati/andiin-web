import { motion } from "framer-motion";
import { MapPin, Briefcase, BookHeart } from "lucide-react";
import Pict2 from "../assets/fotoaku3.jpeg";
import { SiStudyverse } from "react-icons/si";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-primary/60 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg bg-accent p-2">
              <img 
                src={Pict2}
                alt="Minimalist desk setup with laptop and coffee" 
                className="rounded w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-poppins font-semibold text-2xl mb-4 text-gray-800">Get to know me</h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
            Hi! I'm Andini Eka Lisnawati, a 11th grade student with a strong interest in front end development. I learn by doing through hands on projects, trying out new tools, and collaborating with others to bring ideas to life. I’m always curious, always learning.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
            I aspire to become a Software Engineer, building innovative solutions to real world problems. Every project I work on brings me closer to that goal.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
            When I’m not coding, I enjoy creative activities like embroidering, sewing, or learning how to crochet. I believe creativity comes in many forms, and I love discovering new ways to express it—both through code and beyond.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center text-gray-700">
                <MapPin className="text-primary/80 mr-2 h-5 w-5" />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BookHeart className="text-primary/80 mr-2 h-5 w-5" />
                <span>11th Grade Student</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Briefcase className="text-primary/80 mr-2 h-5 w-5" />
                <span>Open to Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
