import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="overflow-x-hidden">
          <section id="home">
            <Home />
          </section>
          <section id="about" className="section-padding">
            <About />
          </section>
          <section id="experience" className="section-padding">
            <Experience />
          </section>
          <section id="skills" className="section-padding">
            <Skills />
          </section>
          <section id="projects" className="section-padding">
            <Projects />
          </section>
          <section id="contact" className="section-padding">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
