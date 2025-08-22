import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Linkedin, Download, ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SOCIAL_LINKS } from "@/lib/constants";
import profilePic from "@/assets/profile.jpeg";

export default function Home() {
  const socialLinks = [
    {
      href: SOCIAL_LINKS.github,
      icon: Github,
      label: "GitHub Profile",
      bg: "bg-[#181717]",
      hover: "hover:bg-black",
    },
    {
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      label: "LinkedIn Profile",
      bg: "bg-[#0A66C2]",
      hover: "hover:bg-blue-700",
    },
    {
      href: "../../public/JamilUrRahmanCV.pdf",
      icon: Download,
      label: "Download CV",
      bg: "bg-gradient-to-r from-purple-600 to-fuchsia-600",
      hover: "hover:from-purple-700 hover:to-fuchsia-700",
      download: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-20 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"
          style={{ top: "10%", left: "5%" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-15 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400"
          style={{ top: "60%", right: "10%" }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full opacity-25 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400"
          style={{ top: "30%", right: "20%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <motion.div
              className="relative mx-auto lg:mx-0 w-96 h-96 rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Professional Profile Image */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative border border-slate-200 shadow-2xl">
                {/* Professional dummy portrait */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
                  <div className="text-center">
                    {/* Professional avatar placeholder */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <div
                        className="text-6xl text-white"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                      >
                        Jimmy
                      </div>
                    </div>
                    <div className="px-8">
                      {/* Name with animated border */}
                      <h3 className="text-2xl font-bold text-slate-800 mb-2 relative inline-block px-4 py-1">
                        <motion.span
                          className="relative z-10"
                          initial={{ borderColor: "#6366F1" }}
                          animate={{
                            borderColor: [
                              "#6366F1",
                              "#A855F7",
                              "#EC4899",
                              "#F59E0B",
                              "#10B981",
                              "#22D3EE",
                              "#6366F1",
                            ],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          Jamil Ur Rahman
                        </motion.span>
                        <motion.span
                          className="absolute inset-0 rounded-md border-2"
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </h3>

                      <p className="text-lg text-slate-600 mb-2">
                        Full-Stack Developer
                      </p>

                      {/* Multi-color skill tags */}
                      <div className="flex gap-2 justify-center lg:justify-start flex-wrap mb-4">
                        {["Software Engineer", "Data Scientist"].map(
                          (skill, idx) => (
                            <span
                              key={skill}
                              className="px-3 py-1 font-medium rounded-full text-white"
                              style={{
                                background: `linear-gradient(90deg, ${
                                  [
                                    "#6366F1",
                                    "#A855F7",
                                    "#EC4899",
                                    "#F59E0B",
                                    "#10B981",
                                    "#22D3EE",
                                  ][idx % 6]
                                }, ${
                                  [
                                    "#A855F7",
                                    "#EC4899",
                                    "#F59E0B",
                                    "#10B981",
                                    "#22D3EE",
                                    "#6366F1",
                                  ][idx % 6]
                                })`,
                              }}
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements around image */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 bg-pink-300 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/50 via-blue-500/50 to-purple-600/50 blur-xl -z-10 animate-pulse" />
            </motion.div>
          </FadeIn>

          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <FadeIn direction="up" delay={0.2}>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-100/80 backdrop-blur-sm border border-indigo-200 mb-8">
                <Sparkles className="w-5 h-5 mr-3 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  Available for new opportunities
                </span>
              </div>
            </FadeIn>

            {/* Heading with animated multicolor gradient inside the name */}
            <FadeIn direction="up" delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-slate-800">Hi, I&apos;m</span>
                <motion.span
                  className="bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #6366F1, #A855F7, #EC4899, #F59E0B, #10B981, #22D3EE, #6366F1)",
                    backgroundSize: "300% 300%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {personalInfo.name}
                </motion.span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="text-2xl md:text-3xl mb-8 text-slate-700 min-h-[3rem]">
                <TypingAnimation
                  text="Full-Stack Developer & Data Scientist"
                  duration={80}
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <p className="text-lg mb-12 max-w-2xl mx-auto lg:mx-0 text-slate-600 leading-relaxed">
                I craft exceptional digital experiences with modern web
                technologies, machine learning, and data-driven insights.
                Passionate about building scalable applications that make a
                difference.
              </p>
            </FadeIn>

            {/* Enhanced CTA Buttons */}
            <FadeIn direction="up" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                {/* Learn More Button */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <Button
                    size="lg"
                    className="relative w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg border-0"
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="flex items-center space-x-2">
                      <span>Learn More About Me</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>

                {/* Contact Button */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative w-full sm:w-auto border-2 border-purple-300 text-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-purple-600 px-8 py-6 text-lg font-semibold rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="flex items-center space-x-2">
                      <span>Get In Touch</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✨
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

            {/* Social Links (brand backgrounds + white icons) */}
            <FadeIn direction="up" delay={1.2}>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      download={social.download}
                      className={`relative p-4 rounded-xl ${social.bg} ${social.hover} text-white shadow-lg border border-white/10 transition-all duration-300 group`}
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 1.4 }}
                      aria-label={social.label}
                    >
                      {/* Subtle glow on hover */}
                      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 blur-md transition duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                      <IconComponent className="relative w-6 h-6 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Enhanced Profile Image Section */}
          <FadeIn direction="right" delay={1.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Enhanced glow effects */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/40 to-purple-400/40 blur-2xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                  style={{ perspective: "1000px" }}
                >
                  <motion.img
                    src={profilePic}
                    alt={`Professional Portrait`}
                    className="w-80 h-80 mx-auto lg:mx-0 rounded-full object-cover shadow-2xl border-4 border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    data-testid="hero-portrait-image"
                  />

                  {/* Orbiting elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-4 left-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute top-1/2 -right-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg"></div>
                  </motion.div>

                  {/* Enhanced floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl border-2 border-white"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-semibold text-white">
                        Available for hire
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={1.6}>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center text-red/70">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
