export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  demo?: string;
  image: string;
  category: string[];
}

export const projects: Project[] = [
  {
    title: "Thalassemia Classification System",
    description: "Deep learning ensemble model for automated thalassemia diagnosis using medical images. Achieved 95% accuracy with intuitive web interface.",
    tech: ["Python", "TensorFlow", "React"],
    link: "https://github.com/jamil/thalassemia-classifier",
    demo: "#",
    image: "https://pixabay.com/get/gb4caebc97bf5860c1c4826edde4e99c882b1a15f92b9a47cd363870a925ab05207931fd084ab8f6875965b30a650e07126865885fea4ce335b810ae4d637698c_1280.jpg",
    category: ["web", "ml"]
  },
  {
    title: "HRM Dashboard",
    description: "Comprehensive human resource management system with onboarding workflows, employee tracking, and analytics dashboard.",
    tech: ["React", "TypeScript", "Ant Design"],
    link: "https://github.com/jamil/hrm-dashboard",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: ["web"]
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and responsive design for optimal user experience.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/jamil/ecommerce-platform",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: ["web"]
  },
  {
    title: "Data Analytics Platform",
    description: "Interactive data visualization platform with real-time analytics, predictive modeling, and customizable dashboard components.",
    tech: ["Python", "Pandas", "Plotly"],
    link: "https://github.com/jamil/data-analytics",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: ["ml"]
  },
  {
    title: "Task Management App",
    description: "Cross-platform mobile application for project management with team collaboration, real-time notifications, and offline functionality.",
    tech: ["React Native", "Redux", "Firebase"],
    link: "https://github.com/jamil/task-manager",
    demo: "#",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: ["mobile"]
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with 7-day forecasts, interactive maps, and location-based recommendations using multiple weather APIs.",
    tech: ["JavaScript", "CSS3", "API"],
    link: "https://github.com/jamil/weather-app",
    demo: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: ["web"]
  }
];
