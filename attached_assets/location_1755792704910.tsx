import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { fadeInUp, slideInLeft, slideInRight, hoverLift, floatingAnimation } from "@/lib/animations";

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-white" data-testid="location-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-4" data-testid="location-title">
            Location & Availability
          </h2>
          <div className="w-24 h-1 bg-electric-violet mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Currently based in the {PORTFOLIO_DATA.personal.location} and available for remote collaboration worldwide.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" {...slideInLeft} data-testid="location-info">
            <div className="bg-gradient-to-r from-electric-violet/10 to-neon-teal/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-electric-violet rounded-full flex items-center justify-center mr-6">
                  <MapPin className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-gray">Current Location</h3>
                  <p className="text-electric-violet font-medium">{PORTFOLIO_DATA.personal.location}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Based in the UK with extensive experience working with international teams across different time zones. 
                Originally from Pakistan, bringing a global perspective to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div className="text-center p-4 bg-white rounded-lg" {...hoverLift} data-testid="timezone-info">
                  <div className="text-2xl font-bold text-neon-teal">GMT+0</div>
                  <div className="text-slate-600 text-sm">Time Zone</div>
                </motion.div>
                <motion.div className="text-center p-4 bg-white rounded-lg" {...hoverLift} data-testid="work-style-info">
                  <div className="text-2xl font-bold text-golden-amber">Remote</div>
                  <div className="text-slate-600 text-sm">Work Style</div>
                </motion.div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-gray">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="text-electric-violet text-lg mr-4" />
                  <span className="text-slate-600">Available via contact form</span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-electric-violet text-lg mr-4" />
                  <a 
                    href={PORTFOLIO_DATA.personal.linkedin} 
                    className="text-slate-600 hover:text-electric-violet transition-colors"
                    data-testid="location-linkedin-link"
                  >
                    linkedin.com/in/jamilurrahman
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="text-electric-violet text-lg mr-4" />
                  <span className="text-slate-600">Available 9 AM - 6 PM GMT</span>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-green-50 border border-green-200 rounded-xl p-6"
              {...hoverLift}
              data-testid="availability-status"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-green-800">Currently Available</h4>
              </div>
              <p className="text-green-700 mb-4">
                Open to new projects and collaborations. Quick response time guaranteed.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-green-800 font-medium hover:text-green-900 transition-colors flex items-center"
                data-testid="get-in-touch-link"
              >
                Get in touch 
                <span className="ml-2">→</span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Map Container */}
          <motion.div className="relative" {...slideInRight} data-testid="location-map">
            <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-96 bg-gradient-to-br from-royal-blue/20 to-neon-teal/20 flex items-center justify-center">
                <motion.img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="UK map with location highlighted"
                  className="w-full h-full object-cover"
                  {...hoverLift}
                />
                
                {/* Location Pin Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="relative" {...floatingAnimation} data-testid="location-pin">
                    <div className="w-8 h-8 bg-electric-violet rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-electric-violet rounded-full flex items-center justify-center">
                      <MapPin className="text-white text-sm" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Location Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-electric-violet rounded-full mr-2"></div>
                    <span className="text-slate-700 font-medium">{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
              {...floatingAnimation}
              data-testid="global-collaboration-card"
            >
              <div className="flex items-center space-x-2">
                <Globe className="text-neon-teal text-xl" />
                <div>
                  <div className="font-semibold text-slate-gray">Global</div>
                  <div className="text-sm text-slate-500">Collaboration</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Coverage Areas */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          data-testid="coverage-areas"
        >
          <h3 className="text-2xl font-semibold text-royal-blue mb-8 text-center">Service Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="text-center" {...hoverLift} data-testid="coverage-local">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-royal-blue mb-2">Local (UK)</h4>
              <p className="text-slate-gray">On-site collaborations across the United Kingdom</p>
            </motion.div>
            <motion.div className="text-center" {...hoverLift} data-testid="coverage-european">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-purple-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-royal-blue mb-2">European</h4>
              <p className="text-slate-gray">Travel available for projects across Europe</p>
            </motion.div>
            <motion.div className="text-center" {...hoverLift} data-testid="coverage-global">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600 text-2xl" />
              </div>
              <h4 className="font-semibold text-royal-blue mb-2">Global Remote</h4>
              <p className="text-slate-gray">Remote collaborations worldwide</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
