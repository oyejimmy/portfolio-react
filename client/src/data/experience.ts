export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2022 – Apr 2023",
    role: "Science Teacher",
    company: "Bilal English Academy",
    responsibilities: [
      "Designed and implemented interactive curricula for STEAM subjects",
      "Mentored 100+ students in advanced scientific concepts and problem-solving",
      "Integrated technology-based learning tools to enhance student engagement",
      "Achieved 95% student satisfaction rate through innovative teaching methods"
    ]
  },
  {
    period: "Sep 2021 – Dec 2023",
    role: "Research Assistant",
    company: "Bahria University",
    responsibilities: [
      "Developed machine learning models for medical image classification",
      "Collaborated with medical professionals on thalassemia research project",
      "Published research findings in peer-reviewed conferences",
      "Managed datasets and performed statistical analysis using Python"
    ]
  }
];
