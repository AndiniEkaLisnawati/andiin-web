import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Pict from "../assets/fotoAku.jpeg";
import { useRef } from "react";
import VariableProximity from "./ui/VariableProximility";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="home"
      className="pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-accent to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">
              Andini Eka
            </h1>
            <h2 className="font-poppins text-xl md:text-2xl text-gray-700 mb-6">
              Junior Front-End Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
            Designing elegant, user-friendly websites that combine beauty with functionality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv/CV_Andini.pdf"; // Lokasi file
                  link.download = "CV_Andini.pdf"; // Nama file saat diunduh
                  link.click();
                }}
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
                src={Pict}
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
