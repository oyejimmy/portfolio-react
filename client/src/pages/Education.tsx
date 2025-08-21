import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <Card key={index} className="bg-white card-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                  index === 0 ? 'bg-primary' : 'bg-secondary'
                }`}>
                  {item.logo}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.institution}</h3>
                  <p className="text-portfolio-secondary">{item.period}</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">{item.degree}</h4>
              <p className="text-portfolio-secondary mb-4 leading-relaxed">
                {item.details}
              </p>
              <div className="bg-portfolio-light p-3 rounded-lg">
                <p className="text-sm text-portfolio-secondary">
                  <strong>{item.thesis ? 'Thesis:' : 'Achievement:'}</strong> {item.thesis || item.achievement}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
