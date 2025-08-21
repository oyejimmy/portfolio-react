import SectionWrapper from "@/components/SectionWrapper";
import SkillTag from "@/components/SkillTag";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper>
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <div className="w-24 h-1 animated-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-portfolio-secondary mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies I use to build innovative solutions.
          </p>
        </div>
      </FadeIn>
      
      {skillCategories.map((category, categoryIndex) => (
        <FadeIn key={categoryIndex} direction="up" delay={categoryIndex * 0.2}>
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-center text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: categoryIndex * 0.1 + 0.3
              }}
            >
              {category.title}
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4,
                    delay: skillIndex * 0.05 + categoryIndex * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <SkillTag
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </SectionWrapper>
  );
}
