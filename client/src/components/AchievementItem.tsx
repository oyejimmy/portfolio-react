interface AchievementItemProps {
  year: string;
  title: string;
  description: string;
  period: string;
  isLast?: boolean;
}

export default function AchievementItem({ 
  year, 
  title, 
  description, 
  period, 
  isLast = false 
}: AchievementItemProps) {
  return (
    <div className={`relative ${!isLast ? 'timeline-line' : ''} mb-12`}>
      <div className="flex items-start">
        <div className="timeline-dot shrink-0">
          <span className="text-sm">{year}</span>
        </div>
        <div className="ml-8 bg-portfolio-light p-6 rounded-xl card-shadow flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-portfolio-secondary mb-2">{period}</p>
          <p className="text-portfolio-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
