export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  category: 'cloud' | 'frontend' | 'backend' | 'data-science' | 'cybersecurity' | 'project-management' | 'other';
  icon: string;
  color: string;
}

export const certificates: Certificate[] = [
  {
    id: "oracle-cloud-ai-foundations",
    title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
    issuer: "Oracle",
    issueDate: "2023",
    credentialId: "312875443OCI23AIFCA",
    skills: ["Oracle Cloud", "AI", "Cloud Infrastructure", "Machine Learning"],
    category: "cloud",
    icon: "fas fa-cloud",
    color: "text-red-600"
  },
  {
    id: "advanced-python-coursera",
    title: "Advanced Python Programming",
    issuer: "Coursera",
    issueDate: "2023",
    skills: ["Python", "Advanced Programming", "Data Structures"],
    category: "data-science",
    icon: "fab fa-python",
    color: "text-blue-600"
  },
  {
    id: "deep-learning-specialization",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issueDate: "2023",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Machine Learning"],
    category: "data-science",
    icon: "fas fa-brain",
    color: "text-orange-600"
  },
  {
    id: "llm-intro-simplilearn",
    title: "Introduction to Large Language Models",
    issuer: "Simplilearn",
    issueDate: "2023",
    credentialId: "7449596",
    skills: ["Large Language Models", "NLP", "AI", "Generative AI"],
    category: "data-science",
    icon: "fas fa-robot",
    color: "text-purple-600"
  },
  {
    id: "power-bi-great-learning",
    title: "Data Visualization with Power BI",
    issuer: "Great Learning Academy",
    issueDate: "2023",
    skills: ["Power BI", "Data Visualization", "Business Intelligence"],
    category: "other",
    icon: "fas fa-chart-pie",
    color: "text-yellow-600"
  },
  {
    id: "devops-foundations-linkedin",
    title: "DevOps Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    skills: ["DevOps", "CI/CD", "Continuous Integration", "Continuous Delivery"],
    category: "other",
    icon: "fas fa-cogs",
    color: "text-blue-500"
  },
  {
    id: "google-data-studio",
    title: "Introduction to Data Studio",
    issuer: "Google",
    issueDate: "Sep 2022",
    expiryDate: "Sep 2025",
    skills: ["Google Data Studio", "Data Visualization", "Analytics"],
    category: "other",
    icon: "fab fa-google",
    color: "text-green-600"
  },
  {
    id: "jira-software-linkedin",
    title: "JIRA Software",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    skills: ["JIRA", "Project Management", "Agile", "Issue Tracking"],
    category: "project-management",
    icon: "fab fa-jira",
    color: "text-blue-700"
  },
  {
    id: "github-professional",
    title: "Career Essentials in GitHub Professional Certificate",
    issuer: "Microsoft & LinkedIn",
    issueDate: "2023",
    skills: ["GitHub", "Version Control", "Collaboration", "Code Management"],
    category: "other",
    icon: "fab fa-github",
    color: "text-gray-800"
  },
  {
    id: "microsoft-365-copilot",
    title: "Streamlining Work with Microsoft Copilot",
    issuer: "Microsoft & LinkedIn",
    issueDate: "2023",
    skills: ["Microsoft 365 Copilot", "AI Productivity", "Automation"],
    category: "other",
    icon: "fab fa-microsoft",
    color: "text-blue-600"
  },
  {
    id: "generative-ai-career",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    issueDate: "2023",
    skills: ["Generative AI", "AI Ethics", "AI Applications"],
    category: "data-science",
    icon: "fas fa-robot",
    color: "text-purple-500"
  },
  {
    id: "figma-essential",
    title: "Figma Essential Training: The Basics",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    skills: ["Figma", "UI Design", "Prototyping", "Design Tools"],
    category: "frontend",
    icon: "fab fa-figma",
    color: "text-purple-500"
  },
  {
    id: "scrum-basics",
    title: "Scrum: The Basics",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    skills: ["Scrum", "Agile Methodology", "Project Management"],
    category: "project-management",
    icon: "fas fa-users",
    color: "text-purple-600"
  },
  {
    id: "react-hooks",
    title: "React Hooks",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    skills: ["React", "React Hooks", "Frontend Development"],
    category: "frontend",
    icon: "fab fa-react",
    color: "text-blue-400"
  },
  {
    id: "agile-testing",
    title: "Agile Testing",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    skills: ["Agile", "Software Testing", "Quality Assurance"],
    category: "other",
    icon: "fas fa-vial",
    color: "text-green-600"
  }
];

export const certificateCategories = [
  { id: 'cloud', name: 'Cloud & Infrastructure', color: 'bg-blue-100 text-blue-700' },
  { id: 'frontend', name: 'Frontend Development', color: 'bg-green-100 text-green-700' },
  { id: 'backend', name: 'Backend Development', color: 'bg-purple-100 text-purple-700' },
  { id: 'data-science', name: 'Data Science & AI', color: 'bg-orange-100 text-orange-700' },
  { id: 'cybersecurity', name: 'Cybersecurity', color: 'bg-red-100 text-red-700' },
  { id: 'project-management', name: 'Project Management', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'other', name: 'Other', color: 'bg-gray-100 text-gray-700' }
];