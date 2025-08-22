import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import { personalInfo } from "@/data/personal";
import SectionWrapper from "@/components/SectionWrapper";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

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
      description:
        "Your default email client should open with the message pre-filled.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-white w-6 h-6" />,
      title: "Email",
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
      bg: "from-pink-400 to-red-500",
    },
    {
      icon: <FaLinkedin className="text-white w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/jamilurahman",
      href: SOCIAL_LINKS.linkedin,
      bg: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaGithub className="text-white w-6 h-6" />,
      title: "GitHub",
      value: "github.com/jamilurahman",
      href: SOCIAL_LINKS.github,
      bg: "from-gray-800 to-gray-700",
    },
    {
      icon: <FaMapMarkerAlt className="text-white w-6 h-6" />,
      title: "Location",
      value: personalInfo.location,
      href: "#",
      bg: "from-green-500 to-emerald-600",
    },
  ];

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
              className="inline-flex items-center justify-center w-16 h-16 
                         bg-gradient-to-br from-indigo-600 to-purple-600 
                         rounded-2xl mb-6 shadow-lg"
            >
              <FaEnvelope className="w-7 h-7 text-white" />
            </motion.div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           bg-clip-text text-transparent"
            >
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can work together.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info with 3D Social Icons */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center space-x-4 cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${info.bg} 
                               rounded-2xl flex items-center justify-center 
                               shadow-md hover:shadow-xl transform hover:-rotate-3 
                               transition duration-300`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.href === "#" ? (
                      <p className="text-portfolio-secondary">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-portfolio-secondary hover:text-primary transition-colors"
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold shadow-lg">
              <a
                href="/JamilUrRahmanCV.pdf"
                download
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-lg border border-slate-200 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      First Name
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="mb-6">
                  <Label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="mb-6">
                  <Label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <SectionWrapper background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Find Me Here
            </h2>
            <div className="w-24 h-1 animated-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-portfolio-secondary mt-6 max-w-2xl mx-auto">
              You can reach me at my workspace in F-7 Markaz, Islamabad. Here’s
              the exact location on the map:
            </p>
          </div>

          <div className="relative w-full h-[400px] rounded-2xl shadow-lg overflow-hidden">
            <iframe
              title="Google Map - F7 Islamabad Markaz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.509185395343!2d73.0479!3d33.7294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd8cf73d2c7%3A0x7f6a44c77e9e0c47!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1692994822000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
