import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
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
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            My professional journey building scalable solutions and driving innovation.
          </p>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors group"
          >
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-l-lg"></div>

            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div>
                <h3 className="font-bold text-lg mb-1">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <div className="col-span-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{exp.description}</p>

            {/* Highlights */}
            {exp.responsibilities && (
              <ul className="space-y-2">
                {exp.responsibilities.slice(0, 2).map((responsibility, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Experience() {
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
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            My professional journey building scalable solutions and driving innovation.
          </p>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experienceData.slice(0, 4).map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors group"
          >
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-l-lg"></div>

            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div>
                <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <div className="col-span-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.startDate} – {exp.endDate || "Present"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{exp.description}</p>

            {/* Highlights */}
            {exp.highlights && (
              <ul className="space-y-2 mb-4">
                {exp.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Technologies */}
            {exp.technologies && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.slice(0, 5).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {exp.technologies.length > 5 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{exp.technologies.length - 5} more
                  </span>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

