import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Award, Star } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
            >
              <Trophy className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Milestones and accomplishments that showcase my dedication to
              excellence in technology, research, and professional development.
            </p>
          </div>
        </FadeIn>

        {/* Achievement Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-purple-300"></div>

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-indigo-500 rounded-full z-10"
              />

              {/* Year Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-12 md:-translate-y-0 md:-translate-x-1/2"
              >
                <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 text-sm font-semibold">
                  20{achievement.year}
                </Badge>
              </motion.div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{achievement.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Achievement Type Badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {index === 0
                        ? "Research Excellence"
                        : index === 1
                        ? "Technical Achievement"
                        : index === 2
                        ? "Research Excellence Award"
                        : "Academic Honor"}
                    </Badge>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <FadeIn delay={0.4}>
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Major Achievements */}
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 
                     bg-gradient-to-br from-yellow-400 to-orange-500 
                     rounded-2xl shadow-lg mb-3"
                >
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-3xl font-bold mb-1 
                        bg-gradient-to-r from-yellow-500 to-orange-600 
                        bg-clip-text text-transparent"
                >
                  {achievements.length}
                </div>
                <div className="text-sm text-slate-600">Major Achievements</div>
              </div>

              {/* Research Place */}
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 
                     bg-gradient-to-br from-blue-500 to-indigo-600 
                     rounded-2xl shadow-lg mb-3"
                >
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-3xl font-bold mb-1 
                        bg-gradient-to-r from-blue-500 to-indigo-600 
                        bg-clip-text text-transparent"
                >
                  1st
                </div>
                <div className="text-sm text-slate-600">Place Research</div>
              </div>

              {/* Model Accuracy */}
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 
                     bg-gradient-to-br from-green-500 to-emerald-600 
                     rounded-2xl shadow-lg mb-3"
                >
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-3xl font-bold mb-1 
                        bg-gradient-to-r from-green-500 to-emerald-600 
                        bg-clip-text text-transparent"
                >
                  75%
                </div>
                <div className="text-sm text-slate-600">Model Accuracy</div>
              </div>

              {/* Years Progress */}
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 
                     bg-gradient-to-br from-purple-500 to-pink-600 
                     rounded-2xl shadow-lg mb-3"
                >
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-3xl font-bold mb-1 
                        bg-gradient-to-r from-purple-500 to-pink-600 
                        bg-clip-text text-transparent"
                >
                  4
                </div>
                <div className="text-sm text-slate-600">Years Progress</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
