import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Colorful dev icons
import { FaJs, FaReact, FaBrain, FaTools, FaCloud } from "react-icons/fa";
import { skillCategories } from "@/data/skills";

// ✅ Icons with gradients
const categoryIcons: Record<
  string,
  { icon: any; gradient: string; textColor: string }
> = {
  "Languages & Programming": {
    icon: FaJs,
    gradient: "from-yellow-400 to-orange-500",
    textColor: "text-yellow-500",
  },
  "Frontend Frameworks & Libraries": {
    icon: FaReact,
    gradient: "from-blue-500 to-cyan-500",
    textColor: "text-blue-500",
  },
  "Data Science & Machine Learning": {
    icon: FaBrain,
    gradient: "from-green-500 to-emerald-600",
    textColor: "text-green-600",
  },
  "Tools & Development": {
    icon: FaTools,
    gradient: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
  },
  "Cloud & Analytics": {
    icon: FaCloud,
    gradient: "from-indigo-500 to-purple-600",
    textColor: "text-indigo-600",
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6"
            >
              <FaJs className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning full-stack development, data
              science, and cloud technologies to build innovative, scalable
              solutions.
            </p>
          </div>
        </FadeIn>

        {/* Interactive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const { icon: IconComponent, gradient } =
              categoryIcons[category.title] ||
              categoryIcons["Languages & Programming"];
            const isSelected = selectedCategory === category.title;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() =>
                  setSelectedCategory(isSelected ? null : category.title)
                }
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${
                  isSelected
                    ? "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300 shadow-lg"
                    : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm mb-4">
                  {category.skills.length} technologies
                </p>

                {/* Skills preview badges */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isSelected ? "auto" : 0,
                    opacity: isSelected ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                    {category.skills.slice(0, 6).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                    {category.skills.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.skills.length - 6} more
                      </Badge>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Skills View */}
        {selectedCategory && (
          <FadeIn key={selectedCategory}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-12 border border-indigo-200"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  {(() => {
                    const { icon: IconComponent, gradient } =
                      categoryIcons[selectedCategory] ||
                      categoryIcons["Languages & Programming"];
                    return (
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    );
                  })()}
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {selectedCategory}
                  </h3>
                </div>
                <p className="text-slate-600">
                  Technologies and frameworks I use for{" "}
                  {selectedCategory.toLowerCase()}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skillCategories
                  .find((cat) => cat.title === selectedCategory)
                  ?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 text-center border border-slate-200"
                    >
                      <div className="mb-3">
                        <i
                          className={`${skill.icon} text-2xl ${skill.color}`}
                        ></i>
                      </div>
                      <h4 className="font-medium text-slate-800 text-sm leading-tight">
                        {skill.name}
                      </h4>
                    </motion.div>
                  ))}
              </div>

              <div className="text-center mt-6">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant="outline"
                  className="border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                >
                  Close Details
                </Button>
              </div>
            </motion.div>
          </FadeIn>
        )}

        {/* Skills Overview Stats */}
        <FadeIn delay={0.3}>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skillCategories.map((category) => {
                const { icon: IconComponent, gradient } =
                  categoryIcons[category.title] ||
                  categoryIcons["Languages & Programming"];
                return (
                  <div key={category.title} className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg mb-3`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div
                      className={`text-3xl font-bold mb-1 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                    >
                      {category.skills.length}
                    </div>
                    <div className="text-sm text-slate-600 leading-tight">
                      {category.title.includes("Languages") &&
                        "Languages Skills"}
                      {category.title.includes("Frontend") && "Frontend Skills"}
                      {category.title.includes("Data") && "Data Skills"}
                      {category.title.includes("Tools") && "Tools Skills"}
                      {category.title.includes("Cloud") && "Cloud Skills"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
