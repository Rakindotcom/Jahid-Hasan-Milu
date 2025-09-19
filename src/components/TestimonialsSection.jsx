import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Software Engineer",
      initial: "AR",
      rating: 5,
      text: "This course completely transformed how I manage my time. The integration of Islamic principles with modern productivity techniques is brilliant. I'm now more productive at work while maintaining my spiritual obligations.",
      course: "8-Week Prophetic Productivity"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Marketing Manager & Mother",
      initial: "FA",
      rating: 5,
      text: "As a working mother, I struggled to balance everything. This masterclass taught me how to prioritize using Islamic values. Now I feel more organized and at peace with my daily routine.",
      course: "8-Week Prophetic Productivity"
    },
    {
      name: "Omar Hassan",
      role: "Business Owner",
      initial: "OH",
      rating: 5,
      text: "The Prophetic productivity system helped me grow my business while staying true to Islamic principles. The time management techniques based on Sunnah are incredibly effective.",
      course: "8-Week Prophetic Productivity"
    },
    {
      name: "Aisha Malik",
      role: "University Student",
      initial: "AM",
      rating: 5,
      text: "I was always stressed about deadlines and exams. This course taught me how to study effectively while maintaining my prayers and spiritual growth. My grades improved significantly!",
      course: "8-Week Prophetic Productivity"
    },
    {
      name: "Ibrahim Khan",
      role: "Team Lead",
      initial: "IK",
      rating: 5,
      text: "The communication and leadership modules based on Prophet's (ﷺ) example transformed how I lead my team. We're more productive and have better relationships at work.",
      course: "8-Week Prophetic Productivity"
    },
    {
      name: "Zainab Ahmed",
      role: "Freelancer",
      initial: "ZA",
      rating: 5,
      text: "Working from home was chaotic until I learned the Prophetic time management system. Now I have clear boundaries between work, family time, and worship. Life feels more balanced.",
      course: "8-Week Prophetic Productivity"
    }
  ];

  return (
    <section className="section-padding bg-dark" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join hundreds of Muslims who have transformed their productivity and found balance in their lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-400/30" size={24} />
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-glow">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="text-sm text-gradient font-semibold">
                - {testimonial.course}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-8 text-white border border-slate-700 glow-blue">
            <h3 className="text-3xl font-display font-bold mb-4">
              Join 500+ Successful Students
            </h3>
            <p className="text-lg mb-8 text-slate-200 max-w-2xl mx-auto">
              Don't just take our word for it. See the real transformations happening in the lives of Muslims worldwide.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">500+</div>
                <div className="text-sm text-slate-300">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">4.9/5</div>
                <div className="text-sm text-slate-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">95%</div>
                <div className="text-sm text-slate-300">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">100%</div>
                <div className="text-sm text-slate-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;