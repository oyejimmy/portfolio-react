import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, aboutContent } from "@/data/personal";
import { User } from "lucide-react";

export default function About() {
  const stats = [
    { value: `${personalInfo.yearsExperience}+`, label: "Years Experience" },
    { value: `${personalInfo.projectsBuilt}+`, label: "Projects Built" },
    { value: `${personalInfo.studentsMentored}+`, label: "Students Mentored" },
    { value: `${personalInfo.technologies}+`, label: "Technologies" }
  ];

  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Professional headshot placeholder */}
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <User className="h-24 w-24 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-6">
          {aboutContent.story.map((paragraph, index) => (
            <p key={index} className="text-lg text-portfolio-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          {/* Key Statistics */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card card-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-portfolio-secondary">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
