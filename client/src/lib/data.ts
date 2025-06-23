import TaviImg from "../assets/tavi-landing-page.png";
import AlloBankImg from "../assets/alloBank.png";
import HausImg from "../assets/Haus.png";
import TrashImg from "../assets/trashtocash.png";
import BMIIMG from "../assets/BMI.png";
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
    title: "Haus! Landing Page",
    description: "Haus is a Responsive landing page for a modern e-commerce platform, showcasing a visual layout of product listings. Built using plain HTML, CSS, and JavaScript.",
    imageUrl: HausImg,
    tags: [
      { name: "Responsive", color: "bg-primary" },
      { name: "Elegant", color: "bg-indigo-500" }
    ],
    liveLink: "https://haus-landing-page-main.vercel.app/",
    repoLink: "https://github.com/AndiniEkaLisnawati/haus-landing-page-main"
  },
  {
    title: "Trash To Cash",
    description: "TrashToCash is a web-based platform that encourages users to manage waste responsibly by converting recyclable trash into rewards. It features educational content, a point-based system, and order tracking to support environmental awareness through digital engagement.",
    imageUrl: TrashImg,
    tags: [
      { name: "Interactive", color: "bg-primary" },
      { name: "Modern", color: "bg-blue-500" }
    ],
    liveLink: "https://trash2cash-six.vercel.app/",
    repoLink: "https://github.com/AndiniEkaLisnawati/capstone-project-fe"
  },
  {
    title: "AlloBank Landing Page",
    description: "A clean and responsive landing page design for Allobank, featuring a user-friendly layout that adapts seamlessly across devices to provide a smooth browsing experience.",
    imageUrl: AlloBankImg,
    tags: [
      { name: "Responsive", color: "bg-primary" },
      { name: "Simple", color: "bg-green-500" }
    ],
    liveLink: "https://allo-bank-landing-page.vercel.app/",
    repoLink: "https://github.com/AndiniEkaLisnawati/AlloBank-landing-page"
  },
  {
    title: "Tavi Landing Page",
    description: "Tavi is a static landing page for a modern e-commerce platform, is not yet responsive responsive in mobile.",
    imageUrl: TaviImg,
    tags: [
      { name: "Elegant", color: "bg-primary" },
      { name: "Modern", color: "bg-indigo-500" }
    ],
    liveLink: "https://landing-page-tavi.vercel.app/",
    repoLink: "https://github.com/AndiniEkaLisnawati/landing-page-Tavi"
  },
  {
    title: "BMI Calculator",
    description: "A simple Body Mass Index (BMI) calculator built with a straightforward layout, allowing users to input their height and weight to quickly determine their BMI.",
    imageUrl: BMIIMG,
    tags: [
      { name: "Calculative", color: "bg-primary" },
      { name: "Diagnostic", color: "bg-indigo-500" }
    ],
    liveLink: "https://bmi-calculator-liart-one.vercel.app/",
    repoLink: "https://github.com/AndiniEkaLisnawati/BMI-Calculator"
  },
];
