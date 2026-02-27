import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MapPin, Clock } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import { personalInfo } from "@/data/personal";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Jamil,\n\n${formData.message}\n\nBest regards,\n${formData.firstName} ${formData.lastName}\n${formData.email}`
    );
    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Compose your message in your default email client.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: personalInfo.phone || "+92 312 1999696",
      href: "tel:+923121999696",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: personalInfo.location,
      href: "https://www.google.com/maps/place/Islamabad,+Pakistan",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6"
            whileHover={{ scale: 1.1 }}
          >
            <Send className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you. 
            Let's connect and create something amazing together.
          </p>
        </motion.div>

        {/* Quick Contact Methods */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") && method.href !== "#" ? "_blank" : undefined}
              rel={method.href.startsWith("http") && method.href !== "#" ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors mb-3">
                {method.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1">{method.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/30"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/30"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border/30"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border/30"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border/30 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
              <p className="text-muted-foreground mb-8">
                Follow me on social platforms to stay connected and see my latest projects!
              </p>
            </div>

            <div className="space-y-3">
              {[
                { 
                  icon: <FaGithub className="w-5 h-5" />, 
                  label: "GitHub", 
                  url: SOCIAL_LINKS.github,
                  desc: "View my repositories"
                },
                { 
                  icon: <FaLinkedin className="w-5 h-5" />, 
                  label: "LinkedIn", 
                  url: SOCIAL_LINKS.linkedin,
                  desc: "Professional profile"
                },
                { 
                  icon: <FaEnvelope className="w-5 h-5" />, 
                  label: "Email", 
                  url: `mailto:${SOCIAL_LINKS.email}`,
                  desc: "Direct contact"
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all group"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform bg-primary/10 rounded-lg">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{social.label}</p>
                    <p className="text-xs text-muted-foreground">{social.desc}</p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
                </motion.a>
              ))}
            </div>

            {/* Info Card */}
            <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Available for Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                I'm actively looking for opportunities. Expect a response within 24 hours!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
