import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((item, index) => (
          <Card key={index} className="bg-portfolio-light card-shadow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.role}</h3>
                  <h4 className="text-lg font-semibold text-portfolio-secondary">{item.company}</h4>
                </div>
                <div className="text-portfolio-secondary font-medium mt-2 md:mt-0">
                  {item.period}
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-semibold mb-3 text-portfolio-primary">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {item.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start text-portfolio-secondary">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
