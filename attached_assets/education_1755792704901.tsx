import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { fadeInUp, slideInLeft, hoverLift } from "@/lib/animations";

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Excellence",
      period: "2020-2022",
      gpa: "3.8 GPA",
      description: "Specialized in Machine Learning and Data Science with thesis on 'Advanced Classification Models for Healthcare Data Analysis'",
      technologies: ["Machine Learning", "Data Mining", "Algorithms"],
      color: "border-electric-violet",
      bgColor: "from-electric-violet/10 to-neon-teal/10",
    },
    {
      degree: "Bachelor of Science in Software Engineering", 
      institution: "Tech University",
      period: "2016-2020",
      gpa: "3.7 GPA",
      description: "Comprehensive foundation in software development, system design, and programming methodologies",
      technologies: ["Software Architecture", "Web Development", "Database Systems"],
      color: "border-neon-teal",
      bgColor: "from-neon-teal/10 to-golden-amber/10",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-4" data-testid="education-title">
            Education
          </h2>
          <div className="w-24 h-1 bg-electric-violet mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic foundation in computer science and continuous learning in emerging technologies.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className={`bg-gradient-to-r ${edu.bgColor} rounded-2xl p-8 border-l-4 ${edu.color} hover-lift`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              {...hoverLift}
              data-testid={`education-item-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-2xl text-electric-violet mr-3" />
                    <h3 className="text-2xl font-semibold text-slate-gray">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-electric-violet font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-electric-violet/20 text-electric-violet rounded-full text-sm"
                        data-testid={`education-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8 text-center">
                  <div className="text-3xl font-bold text-electric-violet">{edu.gpa}</div>
                  <div className="text-slate-600">{edu.period}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-golden-amber/20 to-neon-teal/20 rounded-2xl p-8 text-center"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          data-testid="continuous-learning"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="text-3xl text-golden-amber mr-4" />
            <h3 className="text-2xl font-semibold text-slate-gray">Continuous Learning</h3>
          </div>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Committed to staying current with emerging technologies through online courses, workshops, industry conferences, and hands-on experimentation with new tools and frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["AWS Certification", "Google Cloud Platform", "Advanced ML", "React Ecosystem", "DevOps Tools"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/50 text-slate-700 rounded-full text-sm font-medium"
                data-testid={`continuous-learning-${skill.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
