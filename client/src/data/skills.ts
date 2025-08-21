import { ReactElement } from "react";

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "fab fa-react", color: "text-blue-400", category: "frontend" },
      { name: "Next.js", icon: "fas fa-arrow-right", color: "text-gray-800", category: "frontend" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "text-blue-600", category: "frontend" },
      { name: "Tailwind CSS", icon: "fas fa-palette", color: "text-cyan-500", category: "frontend" },
      { name: "Vue.js", icon: "fab fa-vuejs", color: "text-green-500", category: "frontend" },
      { name: "Redux", icon: "fas fa-layer-group", color: "text-purple-600", category: "frontend" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600", category: "backend" },
      { name: "Express.js", icon: "fas fa-server", color: "text-gray-700", category: "backend" },
      { name: "Python", icon: "fab fa-python", color: "text-blue-500", category: "backend" },
      { name: "Django", icon: "fas fa-cogs", color: "text-green-700", category: "backend" },
      { name: "FastAPI", icon: "fas fa-rocket", color: "text-red-500", category: "backend" },
      { name: "GraphQL", icon: "fas fa-project-diagram", color: "text-pink-500", category: "backend" }
    ]
  },
  {
    title: "Data Science & AI",
    skills: [
      { name: "Machine Learning", icon: "fas fa-brain", color: "text-purple-600", category: "ai" },
      { name: "TensorFlow", icon: "fas fa-cube", color: "text-orange-500", category: "ai" },
      { name: "PyTorch", icon: "fas fa-fire", color: "text-red-600", category: "ai" },
      { name: "Pandas", icon: "fas fa-chart-bar", color: "text-blue-600", category: "ai" },
      { name: "NumPy", icon: "fas fa-calculator", color: "text-blue-500", category: "ai" },
      { name: "Scikit-learn", icon: "fas fa-microscope", color: "text-orange-600", category: "ai" }
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-700", category: "database" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-600", category: "database" },
      { name: "Redis", icon: "fas fa-memory", color: "text-red-500", category: "database" },
      { name: "AWS", icon: "fab fa-aws", color: "text-orange-400", category: "cloud" },
      { name: "Docker", icon: "fab fa-docker", color: "text-blue-600", category: "cloud" },
      { name: "Kubernetes", icon: "fas fa-ship", color: "text-blue-500", category: "cloud" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", category: "tool" },
      { name: "GitHub Actions", icon: "fab fa-github", color: "text-gray-800", category: "tool" },
      { name: "Jest", icon: "fas fa-vial", color: "text-red-600", category: "tool" },
      { name: "Webpack", icon: "fas fa-box", color: "text-blue-600", category: "tool" },
      { name: "Nginx", icon: "fas fa-server", color: "text-green-600", category: "tool" },
      { name: "Linux", icon: "fab fa-linux", color: "text-gray-800", category: "tool" }
    ]
  }
];
