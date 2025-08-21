import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-royal-blue/95 backdrop-blur-lg border-b border-white/20"
          : "bg-royal-blue/90 backdrop-blur-lg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            data-testid="logo"
          >
            {PORTFOLIO_DATA.personal.name}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {PORTFOLIO_DATA.navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-golden-amber transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-golden-amber"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-royal-blue/95 backdrop-blur-lg border-t border-white/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          data-testid="mobile-menu"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {PORTFOLIO_DATA.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white hover:text-golden-amber transition-colors duration-300 py-2"
                data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
