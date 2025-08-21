import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";
import { SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: SOCIAL_LINKS.github,
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-300",
    },
    {
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: Mail,
      label: "Email",
      color: "hover:text-purple-300",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPgo=')] opacity-20"></div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-80"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg glow-effect mr-3">
                  JR
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">
                    Jamil Ur Rahman
                  </h3>
                  <p className="text-gray-300 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Passionate about creating innovative solutions through code.
                Building the future, one line at a time.
              </p>

              {/* Social Links */}
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
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h4 className="text-lg font-semibold mb-6 text-gradient">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <h4 className="text-lg font-semibold mb-6 text-gradient">
                Let's Connect
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-purple-400" />
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-gray-300">
                  <Github className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-gray-300">
                  <Linkedin className="w-4 h-4 mr-3 text-blue-400" />
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0 flex items-center">
                <span>© {currentYear} Jamil Ur Rahman. Built with</span>
                <Heart className="w-4 h-4 mx-2 text-red-400 animate-pulse" />
                <span>using</span>
                <Code className="w-4 h-4 mx-2 text-blue-400" />
                <span>React & TypeScript</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Coffee className="w-4 h-4 mr-2" />
                <span>Powered by caffeine and creativity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
