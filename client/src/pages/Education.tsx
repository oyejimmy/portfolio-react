import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { fadeInUp, hoverLift } from "@/lib/animations";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-white"
      data-testid="education-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
          >
            <GraduationCap className="w-8 h-8 text-white" />
          </motion.div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            data-testid="education-title"
          >
            Education
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Academic foundation in computer science and continuous learning in
            emerging technologies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl p-8 border-l-4 border-indigo-600 shadow-lg"
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
                    <GraduationCap className="w-6 h-6 text-indigo-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-indigo-600 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {edu.details}
                  </p>
                  {(edu.thesis || edu.achievement) && (
                    <div className="mb-4">
                      <Badge
                        variant="outline"
                        className="bg-indigo-50 text-indigo-700 border-indigo-200"
                      >
                        <Award className="w-3 h-3 mr-1" />
                        {edu.thesis && `Thesis: ${edu.thesis}`}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="mt-4 md:mt-0 md:ml-8 text-center">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-4">
                    <div className="text-sm font-medium opacity-90 mb-1">
                      Period
                    </div>
                    <div className="text-lg font-bold">{edu.period}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-2xl p-8 text-center border border-amber-200"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          data-testid="continuous-learning"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="text-3xl text-amber-600 mr-4" />
            <h3 className="text-2xl font-semibold text-slate-800">
              Continuous Learning
            </h3>
          </div>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Committed to staying current with emerging technologies through
            online courses, workshops, industry conferences, and hands-on
            experimentation with new tools and frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "AWS Certification",
              "Google Cloud Platform",
              "Advanced ML",
              "React Ecosystem",
              "DevOps Tools",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/50 text-slate-700 rounded-full text-sm font-medium border border-amber-200"
                data-testid={`continuous-learning-${skill
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
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
