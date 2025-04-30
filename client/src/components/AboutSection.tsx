import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
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
              I'm a passionate Junior Front-End Developer with a keen eye for creating visually appealing and user-friendly web experiences. Having completed intensive training in modern web technologies, I now specialize in building responsive websites and applications.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm particularly interested in UI/UX design principles and implementing clean, efficient code. My goal is to create digital experiences that are not only beautiful but also intuitive and accessible for all users. When I'm not coding, you'll find me exploring new design trends, learning new technologies, or enjoying outdoor activities.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center text-gray-700">
                <MapPin className="text-primary/80 mr-2 h-5 w-5" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center text-gray-700">
                <GraduationCap className="text-primary/80 mr-2 h-5 w-5" />
                <span>Computer Science Graduate</span>
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
