import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Home() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{personalInfo.name}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{personalInfo.title}</p>
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-80">
          {personalInfo.description}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/about">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Learn More About Me
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-lg"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href={SOCIAL_LINKS.github} 
            className="text-white hover:text-gray-200 text-2xl transition-colors" 
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            className="text-white hover:text-gray-200 text-2xl transition-colors" 
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="/cv.pdf" 
            className="text-white hover:text-gray-200 text-2xl transition-colors" 
            aria-label="Download CV"
            download
          >
            <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
