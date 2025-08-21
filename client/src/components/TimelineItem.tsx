import { ReactNode } from "react";

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
}

export default function TimelineItem({ children, className = "" }: TimelineItemProps) {
  return (
    <div className={`relative mb-8 ${className}`}>
      {children}
    </div>
  );
}
