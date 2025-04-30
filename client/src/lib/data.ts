// Define types
type Skill = {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
};

type ProjectTag = {
  name: string;
  color: string;
};

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags: ProjectTag[];
  liveLink: string;
  repoLink: string;
};

// Skills Data
export const skillsData: Skill[] = [
  {
    name: "HTML5",
    icon: "html5",
    color: "#E34F26",
    bgColor: "bg-orange-100",
  },
  {
    name: "CSS3",
    icon: "css3",
    color: "#1572B6",
    bgColor: "bg-blue-100",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    bgColor: "bg-yellow-100",
  },
  {
    name: "React",
    icon: "react",
    color: "#61DAFB",
    bgColor: "bg-blue-100",
  },
  {
    name: "Tailwind",
    icon: "tailwindcss",
    color: "#06B6D4",
    bgColor: "bg-teal-100",
  },
  {
    name: "Git",
    icon: "git",
    color: "#F05032",
    bgColor: "bg-red-100",
  },
  {
    name: "Responsive",
    icon: "smartphone",
    color: "#8B5CF6",
    bgColor: "bg-purple-100",
  },
  {
    name: "Figma",
    icon: "figma",
    color: "#F24E1E",
    bgColor: "bg-pink-100",
  },
  {
    name: "Vite",
    icon: "vite",
    color: "#646CFF",
    bgColor: "bg-indigo-100",
  },
  {
    name: "npm",
    icon: "npm",
    color: "#CB3837",
    bgColor: "bg-red-100",
  },
  {
    name: "VS Code",
    icon: "code",
    color: "#007ACC",
    bgColor: "bg-blue-100",
  },
  {
    name: "Learning More",
    icon: "more-horizontal",
    color: "#EC4899",
    bgColor: "bg-gradient-to-br from-accent to-primary/40",
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Tailwind CSS featuring product listings, cart functionality, and payment integration.",
    imageUrl: "https://images.unsplash.com/photo-1599507593548-0187ac4043c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    tags: [
      { name: "React", color: "bg-primary" },
      { name: "Tailwind", color: "bg-indigo-500" }
    ],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current weather conditions and forecasts for any location using the OpenWeatherMap API.",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    tags: [
      { name: "React", color: "bg-primary" },
      { name: "API", color: "bg-blue-500" }
    ],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Task Manager",
    description: "A full-featured task management application with user authentication, task creation, editing, and categorization features.",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    tags: [
      { name: "React", color: "bg-primary" },
      { name: "Firebase", color: "bg-green-500" }
    ],
    liveLink: "#",
    repoLink: "#"
  }
];
