export interface Achievement {
  year: string;
  title: string;
  description: string;
  period: string;
}

export const achievements: Achievement[] = [
  {
    year: "24",
    title: "Published Thesis on Thalassemia Classification",
    description:
      "Achieved 1st place in university research showcase for developing an ensemble deep learning model for automated thalassemia classification with 75% accuracy.",
    period: "2024",
  },
  {
    year: "24",
    title: "Built HRM System Prototype",
    description:
      "Developed comprehensive onboarding module using React and TypeScript in just 5 weeks, featuring automated workflows and intuitive user interfaces.",
    period: "2024",
  },
  {
    year: "21",
    title: "Excellence in Bachelor's Award",
    description:
      "Recognized for outstanding performance in developing of AI-powered legal chatbot for predicting relevant Pakistani penal code sections based on user input about crimes.",
    period: "2021",
  },
  {
    year: "20",
    title: "Computer Science Honors Graduate",
    description:
      "Graduated with honors maintaining a 3.8 GPA, specializing in software engineering and data structures with focus on algorithm optimization.",
    period: "2020",
  },
];
