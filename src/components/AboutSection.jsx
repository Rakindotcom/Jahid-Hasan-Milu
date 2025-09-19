import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Students Transformed", color: "text-blue-500" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "text-green-500" },
    { icon: BookOpen, number: "10+", label: "Courses Created", color: "text-purple-500" },
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
    <section id="about" className="section-padding bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your <span className="text-gradient">Coach</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-3"></div>
              <div className="relative w-full h-full card rounded-2xl flex flex-col items-center justify-center p-6">
                <div className="w-52 h-52 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                  <img
                    src="/jahidhasanmilu.jpg"
                    alt="Muhammad Jahid Hasan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold" style={{ display: 'none' }}>
                    MJH
                  </div>
                </div>
                <p className="text-white font-semibold text-lg">Muhammad Jahid Hasan</p>
                <p className="text-slate-400 text-sm">Founder, Divine Consultancy</p>
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
                  className="card text-center hover:scale-105 transition-transform duration-300"
                >
                  <achievement.icon className={`${achievement.color} mx-auto mb-2`} size={28} />
                  <div className="text-2xl font-bold text-white">{achievement.number}</div>
                  <div className="text-sm text-slate-400">{achievement.label}</div>
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
              <h3 className="text-3xl font-bold text-white mb-4">
                Ustadh Muhammad Jahid Hasan
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Assalamu Alaikum! I'm Muhammad Jahid Hasan, founder of Divine Consultancy and your guide on this transformative journey. For over 5 years, I've been helping Muslims worldwide integrate the beautiful teachings of Islam with modern productivity techniques.
              </p>
            </div>

            <div>
              <p className="text-slate-300 leading-relaxed mb-4">
                My journey began when I realized that despite being busy all the time, I wasn't truly productive in a way that pleased Allah (SWT). I spent years studying the Quran, Sunnah, and modern productivity science to develop a system that honors our Islamic values while achieving real-world results.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The Prophetic Productivity system I've developed has helped hundreds of Muslims transform their relationship with time, work, and worship. It's not just about getting more done – it's about living a life filled with barakah and purpose.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Credentials & Expertise</h4>
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
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{credential}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3 text-gradient-accent">My Mission</h4>
              <p className="leading-relaxed text-white">
                "To help every Muslim live a productive, purposeful life that brings them closer to Allah (SWT) while achieving success in this world. Through the timeless wisdom of our Prophet (ﷺ), we can transform our daily struggles into acts of worship and sources of barakah."
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 transition-all duration-300">
                Start Your Transformation
              </button>
              <button className="btn-outline flex-1 text-center">
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
          <div className="card max-w-4xl mx-auto">
            <div className="text-4xl text-indigo-400 mb-4">"</div>
            <p className="text-xl text-slate-200 leading-relaxed italic mb-4">
              The best of people are those who benefit others. Through this masterclass, I pray that Allah (SWT) allows us to benefit each other and grow together in both dunya and akhirah.
            </p>
            <div className="text-lg font-semibold text-white">
              - Ustadh Muhammad Jahid Hasan
            </div>
            <div className="text-sm text-slate-400 mt-2">
              Founder, Divine Consultancy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
