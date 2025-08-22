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
    description:
      "Elevating my career from Junior to Software Engineer with a focus on high-quality solutions and team collaboration.",
    responsibilities: [
      "Delivered scalable front-end solutions using React.js and modern JavaScript.",
      "Refactored and optimized legacy codebases, boosting performance and maintainability.",
      "Collaborated with cross-functional teams on critical projects, ensuring timely delivery.",
      "Demonstrated strong problem-solving skills and adaptability in fast-paced environments.",
      "Key Skills: React.js, Code Refactoring, REST APIs, Git, Agile Development",
    ],
  },
  {
    period: "Oct 2021 – Oct 2023",
    role: "Junior Software Engineer",
    company: "Central Asian Cellular Forum (CACF)",
    description:
      "Focused on application development, debugging, and proactive learning during 2 years as Junior Engineer.",
    responsibilities: [
      "Developed and maintained applications using React.js.",
      "Debugged, tested, and documented new software features.",
      "Researched and resolved a wide range of technical issues.",
      "Earned 'Employee of the Month' in July 2023 for outstanding performance.",
      "Key Skills: CSS, React.js, JavaScript, Unit Testing, Agile Teamwork",
    ],
  },
  {
    period: "Sep 2021 – Oct 2021",
    role: "Engineer Intern",
    company: "3G TECHNOLOGIES (GUARANTEE) LTD.",
    description:
      "Hands-on internship focused on React.js development, debugging, and testing.",
    responsibilities: [
      "Assisted senior engineers in building and testing front-end components.",
      "Debugged and optimized code to resolve UI/UX issues.",
      "Proactively learned new technologies and applied them to project tasks.",
      "Key Tools: React.js, CSS, JavaScript, Debugging",
    ],
  },
  {
    period: "Aug 2016 – Sep 2017",
    role: "Teacher",
    company: "Leads School and System",
    description:
      "Educator with over a year of experience fostering dynamic learning environments.",
    responsibilities: [
      "Taught and managed classrooms, focusing on student development and academic excellence.",
      "Collaborated in curriculum development and promoted adaptable teaching methods.",
      "Built strong communication skills and leadership through managing diverse student groups.",
      "Key Skills: Teaching, Management, Communication",
    ],
  },
];
