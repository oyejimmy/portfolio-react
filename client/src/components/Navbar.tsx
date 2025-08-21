import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const NAVIGATION_ITEMS = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#achievements", label: "Achievements" },
  { path: "#education", label: "Education" },
  { path: "#experience", label: "Experience" },
  { path: "#skills", label: "Skills" },
  { path: "#projects", label: "Projects" },
  { path: "#certificates", label: "Certificates" },
  { path: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAVIGATION_ITEMS.map(item => item.path.slice(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.slice(1));
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return activeSection === path.slice(1);
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-card shadow-2xl" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button 
              onClick={() => scrollToSection("#home")}
              className="flex items-center group cursor-pointer"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow glow-effect">
                  JR
                </div>
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Jamil Rahman</span>
                <div className="text-sm text-slate-600">Full-Stack Developer</div>
              </div>
            </button>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <button
                  onClick={() => scrollToSection(item.path)}
                  className={`nav-link text-slate-600 hover:text-indigo-600 transition-all duration-300 ${
                    isActive(item.path) ? "active text-indigo-600 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              </motion.div>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-6 border-l border-slate-200 pl-6">
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </motion.a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-white/95 backdrop-blur-xl border-l border-indigo-200">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center py-6 border-b border-indigo-100">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 glow-effect">
                      JR
                    </div>
                    <div className="font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Jamil Rahman</div>
                    <div className="text-sm text-slate-600">Full-Stack Developer</div>
                  </div>
                </div>
                
                <nav className="flex-1 py-8">
                  <div className="space-y-4">
                    {NAVIGATION_ITEMS.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.path)}
                          className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                            isActive(item.path) 
                              ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-semibold" 
                              : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                          }`}
                        >
                          {item.label}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </nav>
                
                <div className="border-t border-indigo-100 pt-6 pb-4">
                  <div className="flex justify-center space-x-4 mb-4">
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <a
                    href="/cv.pdf"
                    download
                    className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium text-center flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
