export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  details: string;
  logo: string;
  thesis?: string;
  achievement?: string;
}

export const education: EducationItem[] = [
  {
    period: "2021 – 2023",
    institution: "Bahria University, Islamabad",
    degree: "MSc Data Science",
    details: "Specialized in machine learning, deep learning, and statistical analysis. Completed thesis on ensemble deep learning for medical image classification.",
    logo: "BU",
    thesis: "Ensemble Deep Learning for Thalassemia Classification"
  },
  {
    period: "2017 – 2021", 
    institution: "University XYZ",
    degree: "BSc Computer Science",
    details: "Comprehensive foundation in software engineering, data structures, algorithms, and database management systems.",
    logo: "XY",
    achievement: "Graduated with Honors, 3.8 GPA"
  }
];
