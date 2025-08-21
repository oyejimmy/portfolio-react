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
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500", category: "language" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "text-blue-600", category: "language" },
      { name: "Python", icon: "fab fa-python", color: "text-blue-500", category: "language" },
      { name: "Java", icon: "fab fa-java", color: "text-red-600", category: "language" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "fab fa-react", color: "text-blue-400", category: "framework" },
      { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600", category: "framework" },
      { name: "Ant Design", icon: "fas fa-cube", color: "text-primary", category: "framework" },
      { name: "TensorFlow", icon: "fas fa-brain", color: "text-purple-600", category: "framework" },
      { name: "Pandas", icon: "fas fa-chart-bar", color: "text-orange-500", category: "framework" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", category: "tool" },
      { name: "Docker", icon: "fab fa-docker", color: "text-blue-600", category: "tool" },
      { name: "PostgreSQL", icon: "fas fa-database", color: "text-green-600", category: "tool" },
      { name: "AWS", icon: "fab fa-aws", color: "text-orange-400", category: "tool" }
    ]
  }
];
