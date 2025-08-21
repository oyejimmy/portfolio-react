import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card bg-white rounded-xl card-shadow transition-all duration-300 overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-portfolio-secondary mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => {
            const colorMap: { [key: string]: string } = {
              Python: "bg-blue-100 text-blue-800",
              TensorFlow: "bg-green-100 text-green-800", 
              React: "bg-purple-100 text-purple-800",
              TypeScript: "bg-indigo-100 text-indigo-800",
              "Ant Design": "bg-cyan-100 text-cyan-800",
              "Node.js": "bg-green-100 text-green-800",
              MongoDB: "bg-yellow-100 text-yellow-800",
              Pandas: "bg-orange-100 text-orange-800",
              Plotly: "bg-red-100 text-red-800",
              "React Native": "bg-blue-100 text-blue-800",
              Redux: "bg-purple-100 text-purple-800",
              Firebase: "bg-green-100 text-green-800",
              JavaScript: "bg-blue-100 text-blue-800",
              CSS3: "bg-yellow-100 text-yellow-800",
              API: "bg-green-100 text-green-800"
            };
            
            return (
              <Badge 
                key={index} 
                variant="secondary" 
                className={`px-3 py-1 rounded-full text-sm ${colorMap[tech] || 'bg-gray-100 text-gray-800'}`}
              >
                {tech}
              </Badge>
            );
          })}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.link} 
            className="text-primary hover:text-blue-600 font-medium flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              className="text-primary hover:text-blue-600 font-medium flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
