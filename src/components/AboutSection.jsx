import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Students Transformed", color: "text-blue-600" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "text-green-600" },
    { icon: BookOpen, number: "10+", label: "Courses Created", color: "text-purple-600" },
    { icon: Award, number: "4.9/5", label: "Student Rating", color: "text-yellow-500" },
  ];

  const credentials = [
    "Certified Islamic Life Coach",
    "Productivity & Time Management Expert",
    "Quran & Sunnah Scholar",
    "Business Consultant",
    "Author of 'Prophetic Productivity'",
    "Speaker at 50+ Islamic Events",
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Coach</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Learn from someone who has successfully integrated Islamic principles with modern productivity techniques.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Coach Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-lg transform rotate-3"></div>
              <div className="relative w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-md">
                <div className="w-52 h-52 rounded-full overflow-hidden mb-4 border-4 border-gray-100 shadow">
                  <img
                    src="/jahidhasanmilu.jpg"
                    alt="Muhammad Jahid Hasan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold" style={{ display: 'none' }}>
                    MJH
                  </div>
                </div>
                <p className="text-gray-900 font-semibold text-lg">Muhammad Jahid Hasan</p>
                <p className="text-gray-700 text-sm">Founder, Divine Consultancy</p>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 shadow-md text-center hover:scale-105 transition-transform duration-300"
                >
                  <achievement.icon className={`${achievement.color} mx-auto mb-2`} size={28} />
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-700">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ustadh Muhammad Jahid Hasan
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Assalamu Alaikum! I'm Muhammad Jahid Hasan, founder of Divine Consultancy and your guide on this transformative journey. For over 5 years, I've been helping Muslims worldwide integrate the beautiful teachings of Islam with modern productivity techniques.
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                My journey began when I realized that despite being busy all the time, I wasn't truly productive in a way that pleased Allah (SWT). I spent years studying the Quran, Sunnah, and modern productivity science to develop a system that honors our Islamic values while achieving real-world results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Prophetic Productivity system I've developed has helped hundreds of Muslims transform their relationship with time, work, and worship. It's not just about getting more done – it's about living a life filled with barakah and purpose.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Credentials & Expertise</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{credential}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-6 shadow-md border border-white/10">
              <h4 className="text-xl font-bold mb-3 text-white">My Mission</h4>
              <p className="leading-relaxed text-slate-100">
                Our mission is to empower Muslims to design lives of purpose and service by aligning time, worship, and work with the Sunnah. We teach practical, faith-centered systems that cultivate istiqamah, increase barakah in daily routines, and enable meaningful contribution to family, community, and Ummah.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex-1 transition-all duration-300">
                Start Your Transformation
              </button>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg flex-1 text-center transition-all duration-300">
                Read My Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto border-2">
            <div className="text-4xl text-indigo-900 mb-4">"</div>
            <p className="text-xl leading-relaxed italic mb-4">
              The best of people are those who benefit others. Through this masterclass, I pray that Allah (SWT) allows us to benefit each other and grow together in both dunya and akhirah.
            </p>
            <div className="text-lg font-semibold text-gray-900">
              - Ustadh Muhammad Jahid Hasan
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Founder, Divine Consultancy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;