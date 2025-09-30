import { motion } from 'framer-motion';
import { MessageCircle, DollarSign, Clock, Play, BookOpen, Users, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Productivity', 'Growth', 'Money'];
  
  const courses = [
    {
      id: 1,
      title: "Webinar Package",
      subtitle: "PERFECT FOR GETTING STARTED",
      category: "Productivity",
      language: "2-day live program",
      students: "Essential worksheets included",
      price: "280",
      originalPrice: "500",
      bgColor: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
      icon: MessageCircle,
      image: "💬"
    },
    {
      id: 2,
      title: "Basic Package",
      subtitle: "COMPREHENSIVE LEARNING",
      category: "Growth",
      language: "30+ recorded classes",
      students: "Lifetime access included",
      price: "470",
      originalPrice: "800",
      bgColor: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      icon: Star,
      image: "⭐"
    },
    {
      id: 3,
      title: "Complete Package",
      subtitle: "FULL TRANSFORMATION",
      category: "Money",
      language: "8-week live program",
      students: "16 live sessions with coach",
      price: "1800",
      originalPrice: "3000",
      bgColor: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      icon: Clock,
      image: "👑"
    }
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="section-padding bg-dark" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Choose Your <span className="text-gradient">Transformation Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select the package that best fits your learning style and commitment level. All packages include lifetime access to recorded content.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div 
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-80"
                style={{ background: course.bgColor }}
              >
                {/* Course Icon/Image - Larger */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <span className="text-4xl">{course.image}</span>
                </div>
                
                {/* Large Center Image */}
                <div className="flex items-center justify-center h-40 pt-8">
                  <div className="text-8xl opacity-20">
                    {course.image}
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <div className="mb-3">
                    <p className="text-xs font-semibold opacity-90 mb-1">
                      {course.subtitle}
                    </p>
                    <h3 className="text-lg font-bold leading-tight">
                      {course.title}
                    </h3>
                  </div>
                  
                  {/* Course Stats */}
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center text-sm opacity-90">
                      <Globe size={14} className="mr-2" />
                      {course.language}
                    </div>
                    <div className="flex items-center text-sm opacity-90">
                      <Users size={14} className="mr-2" />
                      {course.students}
                    </div>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">
                        {course.price} BDT
                      </div>
                      {course.originalPrice && (
                        <div className="text-sm opacity-75 line-through">
                          {course.originalPrice} BDT
                        </div>
                      )}
                    </div>
                    <div className="text-sm opacity-75">→</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors">
            <span className="text-gray-700">←</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors">
            <span className="text-gray-700">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;