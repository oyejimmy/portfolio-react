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
    <AnimatedBackground className="hero-gradient min-h-screen flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <motion.div 
              className="relative mx-auto lg:mx-0 w-80 h-80 rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Professional Profile Image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 flex items-center justify-center relative">
                {/* Placeholder professional silhouette */}
                <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                  <div className="text-6xl font-bold text-white">JR</div>
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">Available for new opportunities</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="text-gradient">{personalInfo.name}</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="text-xl md:text-2xl mb-8 opacity-90 min-h-[3rem]">
                <TypingAnimation 
                  text={personalInfo.title}
                  duration={80}
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <p className="text-lg mb-12 max-w-2xl mx-auto lg:mx-0 opacity-80 leading-relaxed">
                {personalInfo.description}
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
    </AnimatedBackground>
  );
}
