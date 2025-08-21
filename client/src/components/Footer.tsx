import { SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-portfolio-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Jamil Rahman</h3>
          <p className="text-blue-100 mb-8">Software Engineer & Data Science Specialist</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href={SOCIAL_LINKS.github} 
              className="text-blue-100 hover:text-white text-2xl transition-colors" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              className="text-blue-100 hover:text-white text-2xl transition-colors" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`} 
              className="text-blue-100 hover:text-white text-2xl transition-colors" 
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {NAVIGATION_ITEMS.map((item) => (
              <a 
                key={item.path}
                href={item.path} 
                className="text-blue-100 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="border-t border-blue-400 pt-8">
            <p className="text-blue-100 text-sm">
              © 2024 Jamil Rahman. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
