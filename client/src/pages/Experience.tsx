import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { experience } from "@/data/experience";
import { fadeInUp, hoverLift } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      title: "Data Scientist/ML Engineer",
      company: "Tech Solutions Ltd",
      period: "2022 - Present",
      location: "Islamabad, Pakistan",
      status: "Current Role",
      description: "Leading data science initiatives and developing machine learning solutions for business analytics and predictive modeling. Managing end-to-end ML pipelines from data preprocessing to model deployment.",
      achievements: [
        "Improved model accuracy by 40% through advanced feature engineering",
        "Developed automated ML pipeline reducing processing time by 60%",
        "Led team of 3 junior data scientists in agile environment",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"],
      color: "border-indigo-600",
      bgColor: "bg-indigo-600",
    },
    {
      title: "Software Developer", 
      company: "Digital Innovation Hub",
      period: "2020 - 2022",
      location: "Islamabad, Pakistan",
      status: "Previous Role",
      description: "Developed scalable web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions for diverse client requirements.",
      achievements: [
        "Built responsive applications serving 10K+ daily users",
        "Reduced application load time by 50% through optimization",
        "Implemented automated testing increasing code coverage to 85%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      color: "border-green-600",
      bgColor: "bg-green-600",
    },
    {
      title: "Junior Developer",
      company: "StartupTech",
      period: "2019 - 2020", 
      location: "Remote",
      status: "Previous Role",
      description: "Started career contributing to various web development projects. Gained experience in full-stack development while working in an agile startup environment focused on rapid product development.",
      achievements: [
        "Delivered 5+ projects on time and within budget",
        "Learned modern development practices and tools",
        "Contributed to open-source projects",
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Git"],
      color: "border-purple-600",
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and technologies.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-600"></div>
          
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
                    className="bg-white rounded-xl p-6 shadow-lg ml-8 md:ml-0"
                    {...hoverLift}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${exp.bgColor} rounded-full flex items-center justify-center mr-4`}>
                        <Briefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                        <p className="text-indigo-600 font-medium">{exp.company}</p>
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
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
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
                      <h4 className="font-semibold text-slate-800 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                            data-testid={`experience-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.bgColor} rounded-full flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:pr-8'}`}>
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} ml-8 md:ml-0`}>
                    <div className="text-2xl font-bold text-indigo-600">{exp.period}</div>
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
