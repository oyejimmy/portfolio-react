export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2023 – Present",
    role: "Software Engineer",
    company: "Smart Forum",
    description: "Leading React.js development and legacy system optimization",
    responsibilities: [
      "Leading React.js development across multiple client-facing platforms",
      "Refactored legacy codebases, improving maintainability and performance by 80%",
      "Collaborated with cross-functional teams to deliver scalable solutions",
      "Key Technologies: React.js, REST APIs, Git, Code Optimization"
    ]
  },
  {
    period: "Oct 2021 – Oct 2023",
    role: "Junior Software Engineer",
    company: "Smart Forum",
    description: "Frontend development and UI optimization specialist",
    responsibilities: [
      "Developed front-end modules using React.js and optimized UI performance",
      "Participated in code reviews and debugging processes, ensuring production quality",
      "Earned 'Employee of the Month' in July 2023 for outstanding performance",
      "Key Skills: CSS, JavaScript, Unit Testing, Agile Teamwork"
    ]
  },
  {
    period: "Sep 2021 – Oct 2021",
    role: "Engineering Intern",
    company: "3G Technologies",
    description: "Web development and component testing",
    responsibilities: [
      "Built and tested web components using React.js",
      "Worked under senior engineers to resolve critical frontend bugs",
      "Key Tools: CSS, JavaScript, Debugging"
    ]
  }
];
