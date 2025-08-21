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
    period: "Sep 2022 – Sep 2024",
    institution: "Bahria University",
    degree: "Master's in Data Sciences",
    details: "Specialized in Machine Learning, Deep Learning, Pattern Recognition, Big Data Analysis, and NLP. Focused on ensemble learning techniques for medical image classification.",
    logo: "BU",
    thesis: "Ensemble Deep Learning for Precise Thalassemia Classification in Blood Smear Images - Achieved 75.61% validation accuracy"
  },
  {
    period: "Sep 2017 – Sep 2021", 
    institution: "University of Agriculture, Peshawar",
    degree: "Bachelor's in Computer Science",
    details: "Comprehensive foundation in Electronics, Software Engineering, Operating Systems, Algorithms, and Artificial Intelligence. Built strong programming and analytical skills.",
    logo: "UA",
    achievement: "Strong foundation in core computer science principles"
  }
];
