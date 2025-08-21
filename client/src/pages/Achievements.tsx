import SectionWrapper from "@/components/SectionWrapper";
import AchievementItem from "@/components/AchievementItem";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Achievements</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementItem
            key={index}
            year={achievement.year}
            title={achievement.title}
            description={achievement.description}
            period={achievement.period}
            isLast={index === achievements.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
