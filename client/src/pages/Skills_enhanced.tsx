import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Code, Zap, Brain, Layers } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const categoryIcons = {
  "Languages & Programming": <Code className="w-6 h-6" />,
  "Frontend Frameworks & Libraries": <Layers className="w-6 h-6" />,
  "Data Science & Machine Learning": <Brain className="w-6 h-6" />,
  "Tools & Development": <Zap className="w-6 h-6" />,
  "Cloud & Analytics": <Code className="w-6 h-6" />,
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
            whileHover={{ scale: 1.1 }}
          >
            <Zap className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I've mastered
          </p>
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {categoryIcons[category.category as keyof typeof categoryIcons] || <Code className="w-6 h-6" />}
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
                <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -2 }}
                    transition={{
                      duration: 0.3,
                      delay: skillIndex * 0.05,
                    }}
                    className="px-4 py-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-200 group text-center"
                  >
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-primary/5 border border-primary/20"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
              </div>
              <p className="text-muted-foreground">Technologies Learned</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {skillCategories.length}
              </div>
              <p className="text-muted-foreground">Skill Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                5+
              </div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
