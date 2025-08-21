import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-4" data-testid="testimonials-title">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-electric-violet mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testimonials from satisfied clients and colleagues who have experienced the impact of my work.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          data-testid="testimonials-grid"
        >
          {PORTFOLIO_DATA.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
              variants={fadeInUp}
              {...hoverLift}
              data-testid={`testimonial-item-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-golden-amber">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-slate-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <motion.img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <div className="font-semibold text-slate-gray">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          data-testid="trust-indicators"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div {...hoverLift} data-testid="trust-clients">
              <div className="text-3xl font-bold text-electric-violet">{PORTFOLIO_DATA.stats.clients}</div>
              <div className="text-slate-gray">Happy Clients</div>
            </motion.div>
            <motion.div {...hoverLift} data-testid="trust-satisfaction">
              <div className="text-3xl font-bold text-neon-teal">{PORTFOLIO_DATA.stats.satisfaction}</div>
              <div className="text-slate-gray">Satisfaction Rate</div>
            </motion.div>
            <motion.div {...hoverLift} data-testid="trust-rating">
              <div className="text-3xl font-bold text-golden-amber">5.0</div>
              <div className="text-slate-gray">Average Rating</div>
            </motion.div>
            <motion.div {...hoverLift} data-testid="trust-success">
              <div className="text-3xl font-bold text-royal-blue">100%</div>
              <div className="text-slate-gray">Project Success</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
