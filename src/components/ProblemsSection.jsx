import { motion } from 'framer-motion';
import { Clock, Target, Users, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Always Busy but Nothing Finished",
      description: "You're constantly working but feel like you're not making real progress. Tasks pile up, deadlines are missed, and you end each day feeling unproductive despite being busy all the time.",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Target,
      title: "No Control Over Time & Priorities",
      description: "Your day controls you instead of you controlling your day. You struggle to prioritize what's truly important, often getting distracted by urgent but unimportant tasks.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Users,
      title: "Poor Teamwork & Miscommunication",
      description: "Whether at work or home, you face constant miscommunication, unclear expectations, and difficulty coordinating with others, leading to frustration and inefficiency.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Zap,
      title: "Falling Behind in Tech & Spiritual Balance",
      description: "You struggle to keep up with modern productivity tools while maintaining your spiritual practices. Finding balance between worldly efficiency and Islamic values feels impossible.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section className="section-padding bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 glass-light text-red-400 px-6 py-3 rounded-full mb-8 glow-accent"
          >
            <AlertTriangle size={20} />
            <span className="font-semibold">Common Struggles</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Are you living this <span className="text-gradient">reality?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            If any of these problems sound familiar, you're not alone. Thousands of Muslims struggle with these same challenges every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className={`${problem.color} ${problem.bgColor} p-3 rounded-xl`}>
                  <problem.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {problem.description}
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
          className="text-center"
        >
          <div className="gradient-card rounded-2xl p-8 text-white border border-slate-700 glow-blue">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 glass-light px-6 py-3 rounded-full mb-8"
            >
              <CheckCircle size={20} className="text-green-400" />
              <span className="font-semibold">The Solution</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What if there was a <span className="text-gradient-accent">better way?</span>
            </h3>
            
            <p className="text-lg mb-8 text-slate-200 max-w-2xl mx-auto">
              A system that combines the timeless wisdom of Prophet Muhammad (ﷺ) with modern productivity techniques to transform your life completely.
            </p>
            
            <motion.div
              className="inline-flex items-center space-x-3 glass-light px-8 py-4 rounded-2xl glow-accent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <span className="text-yellow-400 font-bold text-lg">
                That's exactly what this masterclass offers
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;