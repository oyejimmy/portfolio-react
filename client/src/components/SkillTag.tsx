import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  icon: string;
  color: string;
  className?: string;
}

export default function SkillTag({ name, icon, color, className }: SkillTagProps) {
  return (
    <div className={cn(
      "skill-tag bg-white px-6 py-3 rounded-full card-shadow transition-transform duration-200",
      className
    )}>
      <div className="flex items-center">
        <i className={`${icon} ${color} text-xl mr-2`} />
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
}
