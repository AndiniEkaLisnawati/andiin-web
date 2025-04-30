import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">Jane Doe</h1>
            <h2 className="font-poppins text-xl md:text-2xl text-gray-700 mb-6">Junior Front-End Developer</h2>
            <p className="text-gray-600 mb-8 max-w-lg">I create beautiful, responsive, and user-friendly web experiences with modern technologies.</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full"
              >
                Download CV
              </Button>
              <Button 
                variant="outline"
                className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-3 px-6 rounded-full"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl bg-white p-3">
              <img 
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" 
                alt="Minimalist workspace setup with laptop" 
                className="rounded w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
