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
    title: "Languages & Programming",
    skills: [
      { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500", category: "programming" },
      { name: "TypeScript", icon: "fas fa-code", color: "text-blue-600", category: "programming" },
      { name: "Python", icon: "fab fa-python", color: "text-blue-500", category: "programming" },
      { name: "Java", icon: "fab fa-java", color: "text-red-600", category: "programming" },
      { name: "HTML", icon: "fab fa-html5", color: "text-orange-600", category: "programming" },
      { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500", category: "programming" },
      { name: "SQL", icon: "fas fa-database", color: "text-blue-700", category: "programming" }
    ]
  },
  {
    title: "Frontend Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: "fab fa-react", color: "text-blue-400", category: "frontend" },
      { name: "Redux", icon: "fas fa-layer-group", color: "text-purple-600", category: "frontend" },
      { name: "Ant Design", icon: "fas fa-palette", color: "text-blue-600", category: "frontend" }
    ]
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "fas fa-cube", color: "text-orange-500", category: "ai" },
      { name: "Pandas", icon: "fas fa-chart-bar", color: "text-blue-600", category: "ai" },
      { name: "NumPy", icon: "fas fa-calculator", color: "text-blue-500", category: "ai" },
      { name: "VGG16", icon: "fas fa-brain", color: "text-purple-500", category: "ai" },
      { name: "ResNet50", icon: "fas fa-network-wired", color: "text-green-600", category: "ai" },
      { name: "MobileNetV2", icon: "fas fa-mobile-alt", color: "text-red-500", category: "ai" },
      { name: "Keras", icon: "fas fa-microscope", color: "text-orange-600", category: "ai" }
    ]
  },
  {
    title: "Tools & Development",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", category: "tool" },
      { name: "GitHub", icon: "fab fa-github", color: "text-gray-800", category: "tool" },
      { name: "VS Code", icon: "fas fa-code", color: "text-blue-600", category: "tool" },
      { name: "Postman", icon: "fas fa-mail-bulk", color: "text-orange-500", category: "tool" },
      { name: "JIRA", icon: "fab fa-jira", color: "text-blue-700", category: "tool" },
      { name: "Figma", icon: "fab fa-figma", color: "text-purple-500", category: "tool" }
    ]
  },
  {
    title: "Cloud & Analytics",
    skills: [
      { name: "Heroku", icon: "fas fa-cloud", color: "text-purple-600", category: "cloud" },
      { name: "Microsoft Azure", icon: "fab fa-microsoft", color: "text-blue-600", category: "cloud" },
      { name: "Google Cloud", icon: "fab fa-google", color: "text-blue-500", category: "cloud" },
      { name: "Oracle Cloud", icon: "fas fa-cloud-upload-alt", color: "text-red-600", category: "cloud" },
      { name: "Tableau", icon: "fas fa-chart-line", color: "text-blue-700", category: "analytics" },
      { name: "Power BI", icon: "fas fa-chart-pie", color: "text-yellow-600", category: "analytics" },
      { name: "Google Data Studio", icon: "fab fa-google", color: "text-green-600", category: "analytics" }
    ]
  }
];
