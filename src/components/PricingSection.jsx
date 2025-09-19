import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const packages = [
    {
      name: "Webinar Package",
      price: "280",
      originalPrice: "500",
      icon: Zap,
      popular: false,
      description: "Perfect for getting started with Prophetic Productivity",
      features: [
        "2-day live program",
        "Essential worksheets",
        "Lifetime recorded access",
        "Productivity Circle lifetime membership",
        "Basic community support",
        "Email support"
      ],
      cta: "Start Your Journey"
    },
    {
      name: "Basic Package",
      price: "470",
      originalPrice: "800",
      icon: Star,
      popular: true,
      description: "Comprehensive learning with lifetime access",
      features: [
        "30+ recorded classes",
        "Complete worksheets collection",
        "Lifetime recorded access",
        "Productivity Circle lifetime membership",
        "Priority community support",
        "Monthly Q&A sessions",
        "Progress tracking tools",
        "Bonus productivity templates"
      ],
      cta: "Most Popular Choice"
    },
    {
      name: "Complete Package",
      price: "1800",
      originalPrice: "3000",
      icon: Crown,
      popular: false,
      description: "Full transformation with personal guidance",
      features: [
        "8-week live program",
        "16 live sessions with coach",
        "30+ recorded classes",
        "Weekly homework & feedback",
        "Muhasaba App (6 months)",
        "Complete worksheets collection",
        "Personal progress tracking (6 months)",
        "Lifetime recorded access",
        "Productivity Circle lifetime membership",
        "1-on-1 coaching session",
        "WhatsApp group access",
        "Priority support"
      ],
      cta: "Complete Transformation"
    }
  ];

  return (
    <section className="section-padding bg-dark-lighter" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Choose Your <span className="text-gradient">Transformation Path</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the package that best fits your learning style and commitment level. All packages include lifetime access to recorded content.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative card-glass hover-lift overflow-hidden border-2 border-white ${
                pkg.popular ? 'ring-2 ring-blue-500 transform scale-105 glow-blue' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 gradient-primary text-white text-center py-3 text-sm font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles size={16} />
                    <span>MOST POPULAR</span>
                    <Sparkles size={16} />
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`${pkg.popular ? 'bg-blue-500/20 text-blue-400' : 'glass-light text-slate-400'} p-3 rounded-xl`}>
                    <pkg.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm">{pkg.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-lg text-slate-400">BDT</span>
                    <span className="text-lg text-slate-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-400 font-semibold mt-1">
                    Save {((pkg.originalPrice - pkg.price) / pkg.originalPrice * 100).toFixed(0)}%
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/login"
                  className={`w-full ${pkg.popular ? 'btn-primary' : 'btn-accent'} py-4 px-6 rounded-xl font-semibold text-center block hover-lift`}
                >
                  {pkg.cta}
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-glass glow-accent">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              🎁 Special Launch Offer
            </h3>
            <p className="text-slate-300 mb-6">
              Enroll in any package before <span className="font-semibold text-gradient-accent">December 31st</span> and get:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="gradient-accent text-black p-4 rounded-xl">
                <div className="font-bold">Bonus Workshop</div>
                <div className="text-sm opacity-90">Time Management Mastery</div>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-xl">
                <div className="font-bold">Free Templates</div>
                <div className="text-sm opacity-90">50+ Productivity Templates</div>
              </div>
              <div className="gradient-primary text-white p-4 rounded-xl">
                <div className="font-bold">Extended Support</div>
                <div className="text-sm opacity-90">3 Months Extra Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;