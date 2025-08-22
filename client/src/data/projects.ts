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
    title: "Ensemble Deep Learning for Thalassemia Classification",
    description:
      "Designed ensemble CNN models (ResNet50, VGG16, MobileNetV2) for classifying beta-thalassemia from blood smear images. Achieved 75.61% validation accuracy with 7,108 erythrocyte images across 9 classes, focusing on clinical relevance and robustness.",
    tech: ["Python", "TensorFlow", "ResNet50", "VGG16", "MobileNetV2"],
    link: "#",
    demo: "#",
    image:
      "https://www.sciencephoto.com/image/1220905/large/C0543008-Blood_smear_light_micrograph-SPL.jpg",
    category: ["ml", "research"],
  },
  {
    title: "HRM System Prototype – Personal Project",
    description:
      "Built a fully functional onboarding module for a Human Resource Management system using React and TypeScript within 5 weeks. Designed automated workflows, role-based access, and intuitive UI components to streamline employee onboarding and reduce manual intervention.",
    tech: [
      "React",
      "TypeScript",
      "Context API",
      "Styled Components",
      "Ant Design",
    ],
    link: "",
    demo: "",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: ["web", "enterprise", "HRM"],
  },
  {
    title: "Intelligent Legal Information System",
    description:
      "AI-powered legal chatbot for predicting relevant Pakistani penal code sections based on user input about crimes. Applied NLP techniques to interpret natural language crime descriptions and map them to judicial rulings and legal statutes.",
    tech: ["Python", "NLP", "AI", "Rule-based Systems"],
    link: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: ["ai", "nlp", "research"],
  },
];
