import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code,
  Coffee,
  Link,
  Send,
} from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      bg: "bg-[#181717]",
      hover: "hover:bg-black",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      bg: "bg-[#0A66C2]",
      hover: "hover:bg-blue-700",
    },
    {
      href: "mailto:jamirahm2@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      bg: "bg-purple-600",
      hover: "hover:bg-purple-700",
    },
    {
      href: "https://wa.me/923121999696",
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
      bg: "bg-[#25D366]",
      hover: "hover:bg-green-600",
    },
    {
      href: "https://www.instagram.com/imjamilrahman?igsh=M3F6OWc2eDg5dmtv",
      icon: <FaInstagram className="w-5 h-5" />,
      label: "Instagram",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      hover: "hover:opacity-90",
    },
    {
      href: "https://facebook.com/yourusername",
      icon: <FaFacebook className="w-5 h-5" />,
      label: "Facebook",
      bg: "bg-[#1877F2]",
      hover: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPgo=')] opacity-20"></div>
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg mr-3">
                  JR
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 animate-text">
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
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${social.bg} ${social.hover} transition-all duration-300 shadow-md`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
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
              <h4 className="flex items-center justify-center lg:justify-start text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-text">
                <Link className="w-5 h-5 mr-2 text-blue-300" />
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
              <h4 className="flex items-center justify-center lg:justify-start text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-text">
                <Send className="w-5 h-5 mr-2 text-purple-300" />
                Let’s Connect
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-purple-400" />
                  <a
                    href="mailto:jamirahm2@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    jamirahm2@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-gray-300">
                  <Github className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://github.com/oyejimmy"
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
                    href="https://www.linkedin.com/in/jamilurahman/"
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
                <Coffee className="w-4 h-4 mr-2 text-yellow-300" />
                <span>Powered by caffeine and creativity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
