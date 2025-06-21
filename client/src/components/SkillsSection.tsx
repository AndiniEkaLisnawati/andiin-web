import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit, SiFigma, SiVite, SiNpm, SiTypescript } from "react-icons/si";
import { Smartphone, Code, MoreHorizontal } from "lucide-react";

// Map for rendering skill icons
const SkillIcon = ({ icon, color }: { icon: string, color: string }) => {
  switch (icon) {
    case 'html5':
      return <SiHtml5 size={24} color={color} />;
    case 'css3':
      return <SiCss3 size={24} color={color} />;
    case 'javascript':
      return <SiJavascript size={24} color={color} />;
    case 'typescript':
      return <SiTypescript size={24} color={color} />;
    case 'react':
      return <SiReact size={24} color={color} />;
    case 'tailwindcss':
      return <SiTailwindcss size={24} color={color} />;
    case 'git':
      return <SiGit size={24} color={color} />;
    case 'smartphone':
      return <Smartphone size={24} color={color} />;
    case 'figma':
      return <SiFigma size={24} color={color} />;
    case 'vite':
      return <SiVite size={24} color={color} />;
    case 'npm':
      return <SiNpm size={24} color={color} />;
    case 'code':
      return <Code size={24} color={color} />;
    case 'more-horizontal':
      return <MoreHorizontal size={24} color={color} />;
    default:
      return <Code size={24} color={color} />;
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-gray-900">My Skills</h2>
          <div className="w-20 h-1 bg-primary/60 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Here are the technologies and tools I work with to bring websites and applications to life.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-badge bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={`${skill.bgColor} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}>
                <SkillIcon icon={skill.icon} color={skill.color} />
              </div>
              <h3 className="font-medium text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
