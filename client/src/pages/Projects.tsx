import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/lib/constants";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter);
  });

  return (
    <SectionWrapper background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        
        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              variant={activeFilter === category.value ? "default" : "secondary"}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category.value
                  ? "bg-primary text-white hover:bg-blue-600"
                  : "bg-gray-200 text-portfolio-secondary hover:bg-gray-300"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-portfolio-secondary text-lg">
            No projects found for the selected category.
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
