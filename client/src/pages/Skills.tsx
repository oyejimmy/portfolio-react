import SectionWrapper from "@/components/SectionWrapper";
import SkillTag from "@/components/SkillTag";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillTag
                key={skillIndex}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
