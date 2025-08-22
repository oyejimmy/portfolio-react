export const NAVIGATION_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Achievements", path: "/achievements" },
  { label: "Education", path: "/education" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/oyejimmy",
  linkedin: "https://www.linkedin.com/in/jamilurahman/",
  email: "jamirahm@hotmail.com",
  phone: "+92 312-1999-696",
} as const;

export const PROJECT_CATEGORIES = [
  { label: "All Projects", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "Machine Learning", value: "ml" },
  { label: "Mobile App", value: "mobile" },
] as const;
