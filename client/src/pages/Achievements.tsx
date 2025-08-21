import SectionWrapper from "@/components/SectionWrapper";
import AchievementItem from "@/components/AchievementItem";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <SectionWrapper background="white">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Achievements</h2>
          <div className="w-24 h-1 animated-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-portfolio-secondary mt-6 max-w-3xl mx-auto">
            Key milestones and accomplishments that define my professional journey and academic excellence.
          </p>
        </div>
      </FadeIn>
      
      <div className="max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
          >
            <AchievementItem
              year={achievement.year}
              title={achievement.title}
              description={achievement.description}
              period={achievement.period}
              isLast={index === achievements.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
