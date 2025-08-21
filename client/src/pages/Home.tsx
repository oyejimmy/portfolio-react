import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Linkedin, Download, ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Home() {
  const socialLinks = [
    {
      href: SOCIAL_LINKS.github,
      icon: Github,
      label: "GitHub Profile",
      color: "hover:bg-gray-700"
    },
    {
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      label: "LinkedIn Profile", 
      color: "hover:bg-blue-700"
    },
    {
      href: "/cv.pdf",
      icon: Download,
      label: "Download CV",
      color: "hover:bg-purple-700",
      download: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            top: "10%",
            left: "5%",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-8"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
            top: "60%",
            right: "10%",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
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
                      <div className="text-6xl font-bold text-white">JR</div>
                    </div>
                    <div className="px-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Jamil Rahman</h3>
                      <p className="text-lg text-slate-600 mb-2">Full-Stack Developer</p>
                      <p className="text-sm text-slate-500">Data Science • AI/ML • Web Development</p>
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
                <span className="text-sm font-medium text-indigo-700">Available for new opportunities</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-slate-800">Hi, I'm</span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">{personalInfo.name}</span>
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
                I craft exceptional digital experiences with modern web technologies, machine learning, and data-driven insights. Passionate about building scalable applications that make a difference.
              </p>
            </FadeIn>
            
            {/* CTA Buttons */}
            <FadeIn direction="up" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Learn More About Me
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white transition-all duration-300"
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </FadeIn>
            
            {/* Social Links */}
            <FadeIn direction="up" delay={1.2}>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      download={social.download}
                      className={`p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white ${social.color} transition-all duration-300 group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 1.4 }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <FadeIn direction="up" delay={1.6}>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center text-white/70">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
