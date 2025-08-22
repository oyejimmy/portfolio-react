import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { fadeInUp, hoverLift } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Smart Forum",
      period: "Oct 2023 – Present",
      location: "Islamabad, Pakistan",
      status: "Current Role",
      description:
        "Elevating my career as a Software Engineer, delivering scalable solutions and optimizing performance while mentoring juniors and contributing to team growth.",
      achievements: [
        "Delivered scalable front-end solutions using React.js and modern JavaScript",
        "Refactored and optimized legacy codebases, improving performance by 80%",
        "Collaborated with cross-functional teams to deliver critical client projects",
        "Took ownership of complex features while mentoring junior developers",
      ],
      technologies: [
        "React.js",
        "REST APIs",
        "Git",
        "Code Refactoring",
        "Agile",
      ],
      color: "border-indigo-600",
      bgColor: "bg-indigo-600",
    },
    {
      title: "Junior Software Engineer",
      company: "Smart Forum",
      period: "Oct 2021 – Oct 2023",
      location: "Islamabad, Pakistan",
      status: "Previous Role",
      description:
        "Focused on application development, debugging, and proactive learning during 2 years as Junior Engineer.",
      achievements: [
        "Developed and maintained web applications using React.js",
        "Debugged, tested, and documented new software features",
        "Researched and resolved a wide range of technical issues",
        "Awarded 'Employee of the Month' in July 2023 for outstanding performance",
      ],
      technologies: ["React.js", "CSS", "JavaScript", "Unit Testing", "Agile"],
      color: "border-green-600",
      bgColor: "bg-green-600",
    },
    {
      title: "Engineer Intern",
      company: "Smart Forum",
      period: "Sep 2021 – Oct 2021",
      location: "Islamabad, Pakistan",
      status: "Internship",
      description:
        "Hands-on internship focusing on web development, debugging, and component testing.",
      achievements: [
        "Built and tested front-end components using React.js",
        "Assisted senior engineers in debugging and optimization",
        "Proactively learned new tools and technologies during internship",
      ],
      technologies: ["React.js", "JavaScript", "CSS", "Debugging"],
      color: "border-purple-600",
      bgColor: "bg-purple-600",
    },
    {
      title: "Teacher",
      company: "Leads School and System",
      period: "Aug 2016 – Sep 2017",
      location: "Khyber Pakhtunkhwa, Pakistan",
      status: "Previous Role",
      description:
        "Dedicated educator with 14 months of experience fostering dynamic learning environments and promoting academic excellence.",
      achievements: [
        "Taught and managed classrooms with a focus on student growth and development",
        "Collaborated in curriculum design and implemented adaptable teaching methods",
        "Built strong communication and leadership skills managing diverse student groups",
      ],
      technologies: ["Teaching", "Management", "Communication"],
      color: "border-yellow-600",
      bgColor: "bg-yellow-600",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
          >
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            data-testid="experience-title"
          >
            Professional Experience
          </h2>

          <div className="w-24 h-1 animated-gradient mx-auto rounded-full mb-6"></div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Driven by curiosity and creativity, I transform challenges into
            opportunities through problem-solving and innovation.
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
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:order-2 md:pl-8"
                  } mb-6 md:mb-0`}
                >
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg ml-8 md:ml-0"
                    {...hoverLift}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${exp.bgColor} rounded-full flex items-center justify-center mr-4`}
                      >
                        <Briefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">
                          {exp.title}
                        </h3>
                        <p className="text-indigo-600 font-medium">
                          {exp.company}
                        </p>
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
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start text-slate-600"
                              data-testid={`achievement-${index}-${achievementIndex}`}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                            data-testid={`experience-tech-${tech
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.bgColor} rounded-full flex items-center justify-center`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:order-2 md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "text-right" : "text-left"
                    } ml-8 md:ml-0`}
                  >
                    <div className="text-2xl font-bold text-indigo-600">
                      {exp.period}
                    </div>
                    <div className="text-slate-600">
                      {exp.status === "Current Role"
                        ? "Present"
                        : exp.period.includes("2023")
                        ? "2 years"
                        : exp.period.includes("2017")
                        ? "1 year"
                        : "Internship"}
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
