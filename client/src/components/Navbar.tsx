import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Download, Github, Linkedin, Moon, Sun } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useTheme } from "@/context/ThemeContext";

const NAVIGATION_ITEMS = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#experience", label: "Experience" },
  { path: "#skills", label: "Skills" },
  { path: "#projects", label: "Projects" },
  { path: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAVIGATION_ITEMS.map((item) => item.path.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const isActive = (path: string) => activeSection === path.slice(1);

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-background/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-base">
              JR
            </div>
            <span className="hidden sm:inline font-semibold text-foreground">
              Jamil
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={`nav-link text-sm font-medium ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </motion.button>

            {/* Social Links - Desktop */}
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            {/* CV Button - Desktop */}
            <motion.a
              href="/JamilUrRahmanCV.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 button-gradient rounded-lg text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              CV
            </motion.a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className={`w-[320px] ${
                  isDark
                    ? "bg-card border-border"
                    : "bg-background border-border"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="py-6 border-b border-border">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                        JR
                      </div>
                      <div className="font-semibold text-foreground">
                        Jamil Ur Rahman
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Full-Stack Developer
                      </div>
                    </div>
                  </div>

                  <nav className="flex-1 py-6 space-y-2">
                    {NAVIGATION_ITEMS.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => scrollToSection(item.path)}
                        className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  <div className="border-t border-border pt-6 space-y-4">
                    <div className="flex justify-center gap-4">
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <a
                      href="/JamilUrRahmanCV.pdf"
                      download
                      className="w-full px-4 py-3 button-gradient rounded-lg font-medium text-center flex items-center justify-center gap-2"
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
      </div>
    </motion.nav>
  );
}
