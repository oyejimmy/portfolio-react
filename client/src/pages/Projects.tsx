import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { Layers } from "lucide-react"; // changed icon to match "Projects"
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <SectionWrapper background="white">
      {/* Section Heading */}
      <motion.div className="text-center mb-16" {...fadeInUp}>
        {/* Animated Icon Box */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
        >
          <Layers className="w-8 h-8 text-white" />
        </motion.div>

        {/* Gradient Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Underline */}
        <div className="w-24 h-1 animated-gradient mx-auto rounded-full mb-6"></div>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A showcase of my work from experimental builds to production-ready
          apps, highlighting creativity, functionality, and design.
        </p>
      </motion.div>

      {/* Project Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {PROJECT_CATEGORIES.map((category) => (
          <Button
            key={category.value}
            onClick={() => setActiveFilter(category.value)}
            variant={activeFilter === category.value ? "default" : "secondary"}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeFilter === category.value
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-200 text-portfolio-secondary hover:bg-gray-300"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-portfolio-secondary text-lg">
            No projects found for the selected category.
          </p>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
