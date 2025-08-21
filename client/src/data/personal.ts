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
    "Passionate about building scalable applications and extracting insights from data. Specialized in React, TypeScript, and Machine Learning.",
  location: "Islamabad, Pakistan",
  yearsExperience: 3,
  projectsBuilt: 10,
  studentsMentored: 100,
  technologies: 5,
};

export const aboutContent = {
  story: [
    "I'm a passionate Software Engineer with a Master's degree in Data Science from Bahria University, Islamabad. My journey combines the analytical rigor of data science with the creative problem-solving of software development.",
    "I specialize in building scalable web applications using modern technologies like React and TypeScript, while leveraging machine learning techniques to create intelligent solutions. My recent work includes developing ensemble deep learning models for medical classification and creating intuitive user interfaces for complex data systems.",
  ],
};
