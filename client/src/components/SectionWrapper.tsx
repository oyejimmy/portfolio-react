import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "white" | "gray";
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  background = "default",
  id
}: SectionWrapperProps) {
  const backgroundClasses = {
    default: "bg-background",
    white: "bg-white",
    gray: "bg-portfolio-light"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-20",
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
