import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, hoverLift } from "@/lib/animations";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "London, UK",
      status: "Current Role",
      description: "Leading development of enterprise-grade applications, architecting scalable microservices, and mentoring junior developers in modern development practices.",
      achievements: [
        "Reduced system latency by 60% through optimization",
        "Led team of 5 developers in agile environment",
        "Implemented CI/CD pipeline saving 20 hours/week",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      color: "border-electric-violet",
      bgColor: "bg-electric-violet",
    },
    {
      title: "Data Scientist", 
      company: "DataTech Analytics",
      period: "2020 - 2022",
      location: "Manchester, UK",
      status: "Previous Role",
      description: "Developed predictive models and analytics solutions for healthcare and finance sectors. Created machine learning pipelines that improved decision-making accuracy by 35%.",
      achievements: [
        "Built fraud detection system with 95% accuracy",
        "Processed 1M+ records daily with real-time insights",
        "Automated reporting saving 15 hours/week",
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "SQL", "Tableau"],
      color: "border-neon-teal",
      bgColor: "bg-neon-teal",
    },
    {
      title: "Software Developer",
      company: "StartupHub",
      period: "2019 - 2020", 
      location: "Remote",
      status: "Previous Role",
      description: "Built responsive web applications, integrated APIs, and contributed to the development of customer-facing products in an agile environment.",
      achievements: [
        "Delivered 8 projects on time and within budget",
        "Improved application performance by 40%",
        "Mentored 3 junior developers",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      color: "border-golden-amber",
      bgColor: "bg-golden-amber",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-electric-violet mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and technologies.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-electric-violet"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="relative mb-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`experience-item-${index}`}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:order-2 md:pl-8'} mb-6 md:mb-0`}>
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg hover-lift ml-8 md:ml-0"
                    {...hoverLift}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${exp.bgColor} rounded-full flex items-center justify-center mr-4`}>
                        <Briefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-gray">{exp.title}</h3>
                        <p className={`${exp.bgColor.replace('bg-', 'text-')} font-medium`}>{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    {exp.status === "Current Role" && (
                      <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {exp.status}
                      </div>
                    )}
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-slate-gray mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start text-slate-600"
                              data-testid={`achievement-${index}-${achievementIndex}`}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-gray mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 ${exp.bgColor.replace('bg-', 'bg-')}/20 ${exp.bgColor.replace('bg-', 'text-')} rounded-full text-sm`}
                              data-testid={`experience-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.bgColor} rounded-full flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:pr-8'}`}>
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} ml-8 md:ml-0`}>
                    <div className={`text-2xl font-bold ${exp.bgColor.replace('bg-', 'text-')}`}>{exp.period}</div>
                    <div className="text-slate-600">
                      {index === 0 ? "2+ years" : index === 1 ? "2 years" : "1 year"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
