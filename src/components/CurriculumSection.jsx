import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Users, Target, Zap, Heart, Trophy } from 'lucide-react';

const CurriculumSection = () => {
  const weeks = [
    {
      week: 1,
      title: "Foundation of Prophetic Productivity",
      description: "Understanding the Islamic framework for time management and productivity based on Quranic principles and Prophetic traditions.",
      icon: BookOpen,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      topics: ["Islamic Time Philosophy", "Barakah in Daily Life", "Intention Setting"]
    },
    {
      week: 2,
      title: "Time Consciousness & Salah Integration",
      description: "Learn how to structure your day around the five daily prayers while maximizing productivity and spiritual connection.",
      icon: Clock,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      topics: ["Prayer-Based Scheduling", "Time Blocking", "Spiritual Productivity"]
    },
    {
      week: 3,
      title: "Priority Matrix & Islamic Values",
      description: "Develop a priority system that aligns with Islamic values, focusing on what truly matters in this life and the hereafter.",
      icon: Target,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      topics: ["Akhirah-Focused Goals", "Urgent vs Important", "Value-Based Decisions"]
    },
    {
      week: 4,
      title: "Energy Management & Prophetic Habits",
      description: "Optimize your physical and mental energy using the Sunnah lifestyle, including sleep, nutrition, and exercise patterns.",
      icon: Zap,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      topics: ["Sunnah Sleep Cycle", "Prophetic Nutrition", "Energy Optimization"]
    },
    {
      week: 5,
      title: "Communication & Team Leadership",
      description: "Master effective communication and leadership skills based on the Prophet's (ﷺ) example in dealing with people and managing teams.",
      icon: Users,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      topics: ["Prophetic Leadership", "Conflict Resolution", "Team Building"]
    },
    {
      week: 6,
      title: "Digital Minimalism & Tech Balance",
      description: "Learn to use technology mindfully while maintaining spiritual focus and avoiding the pitfalls of digital distraction.",
      icon: Calendar,
      color: "text-teal-400",
      bgColor: "bg-teal-500/10",
      topics: ["Digital Detox", "Mindful Technology", "Social Media Balance"]
    },
    {
      week: 7,
      title: "Family & Work-Life Integration",
      description: "Create harmony between professional responsibilities and family obligations using Prophetic guidance on relationships.",
      icon: Heart,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      topics: ["Family Time Management", "Work-Life Balance", "Relationship Building"]
    },
    {
      week: 8,
      title: "Continuous Improvement & Muhasaba",
      description: "Establish systems for ongoing self-assessment, improvement, and maintaining your new productive lifestyle long-term.",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      topics: ["Self Accountability", "Progress Tracking", "Habit Maintenance"]
    }
  ];

  return (
    <section className="section-padding bg-dark" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            8-Week <span className="text-gradient">Transformation Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive curriculum designed to transform your productivity using timeless Islamic principles and modern techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`${week.color} ${week.bgColor} p-3 rounded-xl`}>
                  <week.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Week {week.week}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {week.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {week.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white text-sm">
                  Key Topics:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {week.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="glass-light text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Live Sessions: 2</span>
                  <span>Recorded Content: 4+ hours</span>
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
          <div className="gradient-card rounded-2xl p-8 text-white border border-slate-700 glow-blue">
            <h3 className="text-3xl font-display font-bold mb-4">
              Complete Transformation in 8 Weeks
            </h3>
            <p className="text-lg mb-8 text-slate-200 max-w-2xl mx-auto">
              Each week builds upon the previous, creating a comprehensive system that will revolutionize how you approach productivity, relationships, and spiritual growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">16</div>
                <div className="text-sm text-slate-300">Live Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">30+</div>
                <div className="text-sm text-slate-300">Recorded Classes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">∞</div>
                <div className="text-sm text-slate-300">Lifetime Access</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;