import { motion } from "framer-motion";
import { aboutContent, personalInfo } from "@/data/personal";
import { Code, Zap, TrendingUp, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React, TypeScript, Node.js, Python - building modern web applications",
    },
    {
      icon: Zap,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Deep Learning - solving complex problems with AI",
    },
    {
      icon: TrendingUp,
      title: "Data Science",
      description: "Analytics, visualization, and data-driven decision making",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Analytical thinking with creative solutions for real-world challenges",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a passionate software engineer and data scientist who loves building
            innovative solutions. Let me share my story and expertise with you.
          </p>
        </motion.div>
      </motion.div>

      {/* Stories */}
      <motion.div
        className="space-y-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutContent.story.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {/* Highlights Grid */}
      <motion.div
        className="grid sm:grid-cols-2 gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { label: "Years Experience", value: `${personalInfo.yearsExperience}+` },
          { label: "Projects Built", value: `${personalInfo.projectsBuilt}+` },
          { label: "Mentored", value: `${personalInfo.studentsMentored}+` },
          { label: "Technologies", value: `${personalInfo.technologies}+` },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center p-4 rounded-lg bg-card/50 border border-border/50"
          >
            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
