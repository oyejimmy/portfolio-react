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
    description: "Designed ensemble CNN models (ResNet50, VGG16, MobileNetV2) for classifying beta-thalassemia from blood smear images. Achieved 75.61% validation accuracy with 7,108 erythrocyte images across 9 classes, focusing on clinical relevance and robustness.",
    tech: ["Python", "TensorFlow", "ResNet50", "VGG16", "MobileNetV2"],
    link: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: ["ml", "research"]
  },
  {
    title: "DIRBS Portal - Pakistan Telecommunication Authority",
    description: "Contributed to PTA's DIRBS portal for IMEI registration and mobile device verification across Pakistan. Implemented responsive UI components using React.js and Ant Design, serving over a million monthly users with 40% improved data processing latency.",
    tech: ["React.js", "Redux", "REST API", "Ant Design"],
    link: "https://dirbs.pta.gov.pk",
    demo: "https://dirbs.pta.gov.pk",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: ["web", "government"]
  },
  {
    title: "Intelligent Legal Information System",
    description: "AI-powered legal chatbot for predicting relevant Pakistani penal code sections based on user input about crimes. Applied NLP techniques to interpret natural language crime descriptions and map them to judicial rulings and legal statutes.",
    tech: ["Python", "NLP", "AI", "Rule-based Systems"],
    link: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: ["ai", "nlp", "research"]
  }
];
