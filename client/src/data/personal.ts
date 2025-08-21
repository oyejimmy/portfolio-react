export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  yearsExperience: number;
  projectsBuilt: number;
  studentsMentored: number;
  technologies: number;
}

export const personalInfo: PersonalInfo = {
  name: "Jamil Ur Rahman",
  title: "Software Engineer & Data Science Specialist",
  description:
    "Passionate about building scalable applications and extracting insights from data. Leading React.js development across multiple client-facing platforms with expertise in Machine Learning and Deep Learning.",
  location: "Islamabad, Pakistan",
  yearsExperience: 3,
  projectsBuilt: 25,
  studentsMentored: 0,
  technologies: 15,
};

export const aboutContent = {
  story: [
    "I'm a passionate Software Engineer with a Master's degree in Data Science from Bahria University, Islamabad. Currently working as a Software Engineer at Smart Forum, leading React.js development across multiple client-facing platforms and refactoring legacy codebases to improve maintainability and performance by 80%.",
    "My expertise spans across full-stack development, machine learning, and deep learning. I have contributed to significant projects like Pakistan Telecommunication Authority's DIRBS portal and developed ensemble deep learning models for precise thalassemia classification. I specialize in React.js, Python, TensorFlow, and various AI technologies, with a strong focus on creating scalable solutions and intelligent systems.",
  ],
};
