export interface Achievement {
  year: string;
  title: string;
  description: string;
  period: string;
}

export const achievements: Achievement[] = [
  {
    year: "23",
    title: "Published Thesis on Thalassemia Classification",
    description: "Achieved 1st place in university research showcase for developing an ensemble deep learning model for automated thalassemia classification with 95% accuracy.",
    period: "2023"
  },
  {
    year: "22",
    title: "Built HRM System Prototype",
    description: "Developed comprehensive onboarding module using React and TypeScript in just 2 weeks, featuring automated workflows and intuitive user interfaces.",
    period: "2022"
  },
  {
    year: "21",
    title: "Excellence in Teaching Award",
    description: "Recognized for outstanding performance in designing interactive STEAM curricula and mentoring over 100 students in advanced scientific concepts.",
    period: "2021"
  },
  {
    year: "20",
    title: "Computer Science Honors Graduate",
    description: "Graduated with honors maintaining a 3.8 GPA, specializing in software engineering and data structures with focus on algorithm optimization.",
    period: "2020"
  }
];
