import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Mail, Wifi } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { personalInfo } from "@/data/personal";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  hoverLift,
  floatingAnimation,
} from "@/lib/animations";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
      data-testid="location-section"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading with icon */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg mb-6"
          >
            <MapPin className="w-8 h-8 text-white" />
          </motion.div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="location-title"
          >
            Location & Availability
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Currently based in{" "}
            <span className="font-semibold text-indigo-600">
              {personalInfo.location}
            </span>{" "}
            and available for remote collaboration worldwide.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            className="space-y-8"
            {...slideInLeft}
            data-testid="location-info"
          >
            {/* Location Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-indigo-100 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-md">
                  <MapPin className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    Current Location
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Based in Pakistan's capital city with extensive experience
                working with international teams across different time zones.
                Bringing a global perspective while maintaining strong local
                connections.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-sm"
                  {...hoverLift}
                  data-testid="timezone-info"
                >
                  <div className="text-2xl font-bold text-green-600">GMT+5</div>
                  <div className="text-slate-600 text-sm">Time Zone</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg shadow-sm"
                  {...hoverLift}
                  data-testid="work-style-info"
                >
                  <div className="text-2xl font-bold text-purple-600">
                    Remote
                  </div>
                  <div className="text-slate-600 text-sm">Work Style</div>
                </motion.div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-800">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="text-indigo-600 text-lg mr-4" />
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="text-purple-600 text-lg mr-4" />
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                    data-testid="location-linkedin-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="text-green-600 text-lg mr-4" />
                  <span className="text-slate-600">
                    Available 9 AM - 6 PM PKT
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 shadow-md"
              {...hoverLift}
              data-testid="availability-status"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-green-800">
                  Currently Available
                </h4>
              </div>
              <p className="text-green-700 mb-4">
                Open to new projects and collaborations. Quick response time
                guaranteed.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-green-800 font-medium hover:text-green-900 transition-colors flex items-center"
                data-testid="get-in-touch-link"
              >
                Get in touch
                <span className="ml-2">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            className="relative"
            {...slideInRight}
            data-testid="location-map"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5667958663!2d72.82079822539756!3d33.61619864894985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699123456789!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Islamabad, Pakistan Location"
                />

                {/* Location Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></div>
                    <span className="text-slate-700 font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-indigo-100"
              {...floatingAnimation}
              data-testid="global-collaboration-card"
            >
              <div className="flex items-center space-x-2">
                <Wifi className="text-indigo-600 text-xl" />
                <div>
                  <div className="font-semibold text-slate-800">Global</div>
                  <div className="text-sm text-slate-500">Collaboration</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Coverage Areas */}
        <motion.div
          className="mt-16 bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-slate-200"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          data-testid="coverage-areas"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
            Service Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              {...hoverLift}
              data-testid="coverage-local"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Local (Pakistan)
              </h4>
              <p className="text-slate-600">
                On-site collaborations across Pakistan
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              {...hoverLift}
              data-testid="coverage-regional"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Globe className="text-purple-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Regional</h4>
              <p className="text-slate-600">
                Remote work across South Asia and Middle East
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              {...hoverLift}
              data-testid="coverage-global"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Globe className="text-green-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Global Remote
              </h4>
              <p className="text-slate-600">Remote collaborations worldwide</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
