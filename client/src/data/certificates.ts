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
    id: "aws-solutions-architect",
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issueDate: "2023-08",
    expiryDate: "2026-08",
    credentialId: "AWS-ASA-12345",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
    category: "cloud",
    icon: "fab fa-aws",
    color: "text-orange-500"
  },
  {
    id: "google-cloud-professional",
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    issueDate: "2023-06",
    expiryDate: "2025-06",
    credentialId: "GCP-PCA-67890",
    verificationUrl: "https://cloud.google.com/certification",
    skills: ["Google Cloud", "Kubernetes", "BigQuery", "Cloud Functions"],
    category: "cloud",
    icon: "fab fa-google",
    color: "text-blue-500"
  },
  {
    id: "react-advanced",
    title: "Advanced React Development",
    issuer: "Meta",
    issueDate: "2023-04",
    credentialId: "META-REACT-456",
    verificationUrl: "https://developers.facebook.com/certification",
    skills: ["React", "Redux", "React Native", "GraphQL"],
    category: "frontend",
    icon: "fab fa-react",
    color: "text-blue-400"
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    issuer: "IBM",
    issueDate: "2023-03",
    credentialId: "IBM-PDS-789",
    verificationUrl: "https://ibm.com/certification",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    category: "data-science",
    icon: "fab fa-python",
    color: "text-blue-600"
  },
  {
    id: "tensorflow-developer",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    issueDate: "2023-02",
    expiryDate: "2026-02",
    credentialId: "TF-DEV-321",
    verificationUrl: "https://tensorflow.org/certificate",
    skills: ["TensorFlow", "Machine Learning", "Deep Learning", "Neural Networks"],
    category: "data-science",
    icon: "fas fa-brain",
    color: "text-orange-600"
  },
  {
    id: "node-js-microservices",
    title: "Node.js Microservices Development",
    issuer: "Linux Foundation",
    issueDate: "2023-01",
    credentialId: "LF-NODE-654",
    verificationUrl: "https://training.linuxfoundation.org",
    skills: ["Node.js", "Express.js", "Microservices", "Docker", "API Design"],
    category: "backend",
    icon: "fab fa-node-js",
    color: "text-green-600"
  },
  {
    id: "kubernetes-admin",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "2022-11",
    expiryDate: "2025-11",
    credentialId: "CKA-987",
    verificationUrl: "https://cncf.io/certification",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "YAML"],
    category: "cloud",
    icon: "fas fa-ship",
    color: "text-blue-700"
  },
  {
    id: "agile-scrum-master",
    title: "Certified ScrumMaster",
    issuer: "Scrum Alliance",
    issueDate: "2022-09",
    expiryDate: "2024-09",
    credentialId: "CSM-147",
    verificationUrl: "https://scrumalliance.org/certification",
    skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
    category: "project-management",
    icon: "fas fa-users",
    color: "text-purple-600"
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    issuer: "CompTIA",
    issueDate: "2022-07",
    expiryDate: "2025-07",
    credentialId: "SEC-258",
    verificationUrl: "https://comptia.org/certifications",
    skills: ["Cybersecurity", "Network Security", "Risk Assessment", "Compliance"],
    category: "cybersecurity",
    icon: "fas fa-shield-alt",
    color: "text-red-600"
  },
  {
    id: "mongodb-developer",
    title: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    issueDate: "2022-05",
    expiryDate: "2025-05",
    credentialId: "MDB-369",
    verificationUrl: "https://university.mongodb.com/certification",
    skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
    category: "backend",
    icon: "fas fa-leaf",
    color: "text-green-700"
  },
  {
    id: "firebase-developer",
    title: "Firebase Certified Developer",
    issuer: "Google",
    issueDate: "2022-03",
    credentialId: "FB-741",
    verificationUrl: "https://firebase.google.com/certification",
    skills: ["Firebase", "Real-time Database", "Authentication", "Cloud Functions"],
    category: "backend",
    icon: "fas fa-fire",
    color: "text-yellow-600"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Specialization",
    issuer: "California Institute of the Arts",
    issueDate: "2022-01",
    credentialId: "CALARTS-UX-852",
    verificationUrl: "https://coursera.org/specializations/ui-ux-design",
    skills: ["UI Design", "UX Research", "Prototyping", "User Testing", "Figma"],
    category: "frontend",
    icon: "fas fa-palette",
    color: "text-pink-600"
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