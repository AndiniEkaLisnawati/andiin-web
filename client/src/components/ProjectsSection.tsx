import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-primary/60 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Here are some of the projects I've worked on. Each project showcases different skills and technologies.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
  key={project.title}
  className="project-card bg-white rounded-xl overflow-hidden shadow-lg"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  viewport={{ once: true }}
  transition={{ 
    opacity: { duration: 0.5, delay: index * 0.1 },
    y: { duration: 0.5, delay: index * 0.1 }
  }}
>

              <div className="relative overflow-hidden h-56 ">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag.name} 
                        className={`text-xs font-medium px-2 py-1 rounded-full ${tag.color} text-white inline-block mr-2`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex gap-3">
                  <a href={project.liveLink} className="text-primary font-medium flex items-center hover:underline">
                    <span>Live Demo</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a href={project.repoLink} className="text-gray-700 font-medium flex items-center hover:underline">
                    <Github className="mr-1 h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
