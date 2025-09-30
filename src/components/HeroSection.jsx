import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Clock, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const stats = [
    { icon: Users, label: '500+ Enrolled', value: '500+' },
    { icon: Clock, label: '8 Weeks Program', value: '8 Weeks' },
    { icon: Star, label: '4.9/5 Rating', value: '4.9/5' },
  ];

  const courseDetails = [
    { label: 'Course Duration', value: '8 Weeks', icon: Clock },
    { label: 'Live Sessions', value: '16 Sessions', icon: Users },
    { label: 'Recorded Classes', value: '30+ Videos', icon: Play },
    { label: 'Starting Price', value: '280 BDT', icon: Star, highlight: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center animated-bg">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 glass-light rounded-full px-6 py-3 glow-blue"
            >
              <div className="flex text-yellow-700">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-800">Trusted by 500+ Students</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              <span className="block">8-Week</span>
              <span className="block text-gradient-accent">Prophetic</span>
              <span className="block">Productivity</span>
              <span className="block text-3xl md:text-4xl font-normal text-gray-800 mt-2">
                Masterclass
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl text-gray-700 leading-relaxed"
            >
              Transform your busy life into a{' '}
              <span className="text-yellow-800 font-semibold">barakah-driven life</span>{' '}
              using the Prophetic system in work, worship, family, and everything in life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/login"
                className="btn-accent inline-flex items-center justify-center space-x-3 px-10 py-5 text-lg font-bold hover-lift glow-accent"
              >
                <span>Enroll Now – Starting 280 BDT</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>

              <button className="btn-outline inline-flex items-center justify-center space-x-3 px-10 py-5 text-lg font-semibold hover-glow">
                <Play size={20} />
                <span>Watch Preview</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 glass-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={20} className="text-yellow-700" />
                  </div>
                  <div className="font-bold text-lg text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-800">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Course Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            
            <div className="card-glass hover-lift glow-blue space-y-8">
              {/* Video Preview */}
              <div className="aspect-video gradient-primary rounded-xl flex items-center justify-center cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all"></div>
                <div className="relative text-center text-gray-900 z-10">
                  <motion.div 
                    className="w-20 h-20 glass-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={24} className="ml-1" />
                  </motion.div>
                  <p className="text-lg font-bold">Course Preview</p>
                  <p className="text-sm opacity-90">2 min overview</p>
                </div>
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Course Details */}
              <div className="space-y-6">
                {courseDetails.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 glass-light rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 glass-light rounded-lg flex items-center justify-center">
                        <item.icon size={16} className="text-yellow-700" />
                      </div>
                      <span className="text-gray-800">{item.label}</span>
                    </div>
                    <span className={`font-bold text-lg ${
                      item.highlight ? 'text-yellow-800' : 'text-gray-900'
                    }`}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;