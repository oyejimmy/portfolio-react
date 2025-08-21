import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievements";
import Education from "@/pages/Education";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <Navbar />
          <main className="overflow-x-hidden">
            <section id="home">
              <Home />
            </section>
            <section id="about" className="section-padding">
              <About />
            </section>
            <section id="achievements" className="section-padding">
              <Achievements />
            </section>
            <section id="education" className="section-padding">
              <Education />
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
    </QueryClientProvider>
  );
}

export default App;
