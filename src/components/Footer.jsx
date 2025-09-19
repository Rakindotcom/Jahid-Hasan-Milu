import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: '8-Week Prophetic Productivity', href: '/courses/prophetic-productivity' },
    { name: 'Productive Life with Salah', href: '/courses/productive-salah' },
    { name: 'Islamic Leadership Mastery', href: '/courses/islamic-leadership' },
    { name: 'Time Management Workshop', href: '/courses/time-management' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">
                  <Sparkles size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient">Divine Consultancy</h3>
                <p className="text-slate-400 font-medium">Prophetic Productivity</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg max-w-md">
              Transforming lives through the integration of Islamic principles with modern productivity techniques. Join thousands of Muslims on their journey to a more productive and blessed life.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: 'info@divineconsultancy.org' },
                { icon: Phone, text: '+880 1234 567890' },
                { icon: MapPin, text: 'Dhaka, Bangladesh' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 glass-light rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <contact.icon size={18} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-display font-bold mb-8 text-gradient">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-display font-bold mb-8 text-gradient">Stay Connected</h4>
            
            <div className="mb-8">
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for productivity tips and course updates.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-2xl bg-dark-lighter border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition-all duration-300"
                />
                <motion.button 
                  className="absolute right-2 top-2 bottom-2 bg-blue-500 px-4 rounded-xl hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-sm mb-4">Follow us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-light rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:bg-white/20 text-xs font-medium"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-16 pt-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-sm text-slate-500 flex items-center space-x-2">
              <span>© 2025 Divine Consultancy. Made with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span><p>
              by{" "}
                <a
                  href="https://www.linkedin.com/in/rakinalshahriar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-600 hover:text-teal-800 cursor-pointer transition-colors underline"
                >
                  Rakin Al Shahriar
                </a>
              </p></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="hover:text-white transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            className="text-center mt-12 p-6 glass-light rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-slate-400 italic leading-relaxed">
              "And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth."
            </p>
            <p className="text-xs text-slate-500 mt-2 font-medium">- Quran 6:73</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;