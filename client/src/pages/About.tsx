import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo, aboutContent } from "@/data/personal";
import {
  Code,
  Database,
  Brain,
  Users,
  Award,
  Calendar,
  User,
} from "lucide-react";
import profilePic from "@/assets/profile1.jpeg";

export default function About() {
  const stats = [
    {
      value: `${personalInfo.yearsExperience}+`,
      label: "Years Experience",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      value: `${personalInfo.projectsBuilt}+`,
      label: "Projects Built",
      icon: Code,
      color: "text-blue-600",
    },
    {
      value: `${personalInfo.studentsMentored}+`,
      label: "Students Mentored",
      icon: Users,
      color: "text-green-600",
    },
    {
      value: `${personalInfo.technologies}+`,
      label: "Technologies",
      icon: Database,
      color: "text-orange-600",
    },
  ];

  const highlights = [
    {
      icon: Brain,
      title: "Data Science Expert",
      description:
        "MSc in Data Science with specialization in machine learning and deep learning algorithms.",
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description:
        "Proficient in modern web technologies including React, TypeScript, and Node.js.",
    },
    {
      icon: Award,
      title: "Research Excellence",
      description:
        "Published research in medical AI with 95% accuracy in thalassemia classification.",
    },
  ];

  return (
    <SectionWrapper>
      <FadeIn>
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
          >
            <User className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My About
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover my journey from data science to software engineering, and
            how I combine analytical thinking with creative problem-solving.
          </p>
        </div>
      </FadeIn>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image Section */}
        <FadeIn direction="left">
          <div className="relative">
            {/* Main profile container */}
            <motion.div
              className="relative w-full h-96 rounded-3xl overflow-hidden mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Professional Profile Image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 flex items-center justify-center relative">
                {/* Professional silhouette with better styling */}
                <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 relative overflow-hidden">
                  {/* Avatar representation */}
                  <div className="relative">
                    <motion.img
                      src={profilePic}
                      alt={`Professional Portrait`}
                      className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      data-testid="hero-portrait-image"
                    />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        Jamil Ur Rahman
                      </div>
                      <div className="text-white/80 text-sm">
                        Software Engineer
                      </div>
                      <div className="text-white/60 text-xs">
                        Data Science Specialist
                      </div>
                    </div>
                  </div>

                  {/* Floating tech icons */}
                  <motion.div
                    className="absolute top-8 right-8 w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Code className="w-4 h-4 text-yellow-300" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 left-8 w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Brain className="w-3 h-3 text-green-300" />
                  </motion.div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/30 via-blue-500/30 to-purple-600/30 blur-2xl -z-10" />
            </motion.div>

            {/* Floating cards around image */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Award className="w-6 h-6 text-purple-600" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Database className="w-6 h-6 text-blue-600" />
            </motion.div>
          </div>
        </FadeIn>

        {/* Content Section */}
        <div className="space-y-8">
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              {aboutContent.story.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-portfolio-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </FadeIn>

          {/* Highlights */}
          <FadeIn direction="right" delay={0.4}>
            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-primary mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-portfolio-secondary text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>

          {/* Key Statistics */}
          <FadeIn direction="right" delay={0.6}>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <Card className="stat-card card-shadow text-center hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <IconComponent
                          className={`w-8 h-8 mx-auto mb-3 ${stat.color}`}
                        />
                        <motion.div
                          className={`text-3xl font-bold mb-2 ${stat.color}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            delay: index * 0.1 + 1,
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-portfolio-secondary font-medium">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
