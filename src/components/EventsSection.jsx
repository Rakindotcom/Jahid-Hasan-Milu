import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, BookOpen, Video, Award } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      title: "Prophetic Time Management Workshop",
      date: "January 15, 2025",
      time: "7:00 PM - 9:00 PM BDT",
      location: "Online (Zoom)",
      type: "Workshop",
      price: "Free",
      description: "Learn the fundamental principles of time management from the Sunnah of Prophet Muhammad (ﷺ).",
      attendees: 150,
      status: "upcoming"
    },
    {
      title: "Productivity & Prayer Integration Seminar",
      date: "January 22, 2025",
      time: "8:00 PM - 10:00 PM BDT",
      location: "Dhaka, Bangladesh",
      type: "Seminar",
      price: "200 BDT",
      description: "Discover how to structure your entire day around the five daily prayers for maximum productivity.",
      attendees: 75,
      status: "upcoming"
    },
    {
      title: "Islamic Leadership Masterclass",
      date: "February 5, 2025",
      time: "6:00 PM - 8:00 PM BDT",
      location: "Online (Zoom)",
      type: "Masterclass",
      price: "500 BDT",
      description: "Learn leadership principles from the life of Prophet Muhammad (ﷺ) and apply them in modern contexts.",
      attendees: 100,
      status: "upcoming"
    }
  ];

  const coachingServices = [
    {
      title: "1-on-1 Productivity Coaching",
      duration: "60 minutes",
      price: "2000 BDT",
      description: "Personalized coaching session to address your specific productivity challenges using Islamic principles.",
      features: ["Personal assessment", "Custom action plan", "Follow-up support", "Islamic guidance"]
    },
    {
      title: "Family Productivity Consultation",
      duration: "90 minutes",
      price: "3000 BDT",
      description: "Help your entire family develop productive habits and better time management skills.",
      features: ["Family assessment", "Household systems", "Children's routines", "Couple coordination"]
    },
    {
      title: "Business Islamic Ethics Consulting",
      duration: "2 hours",
      price: "5000 BDT",
      description: "Align your business practices with Islamic values while maintaining high productivity and growth.",
      features: ["Business audit", "Islamic compliance", "Team training", "Growth strategies"]
    }
  ];

  const books = [
    {
      title: "Prophetic Productivity: A Muslim's Guide to Time Management",
      author: "Muhammad Jahid Hasan",
      price: "800 BDT",
      format: "Paperback & Digital",
      pages: 250,
      description: "The complete guide to integrating Islamic principles with modern productivity techniques.",
      coverColor: "from-blue-500 to-blue-600"
    },
    {
      title: "Salah & Success: Structuring Life Around Prayer",
      author: "Muhammad Jahid Hasan",
      price: "600 BDT",
      format: "Digital Only",
      pages: 180,
      description: "Learn how the five daily prayers can become the foundation of a highly productive life.",
      coverColor: "from-green-500 to-green-600"
    },
    {
      title: "The Barakah Principle: Finding Blessing in Productivity",
      author: "Muhammad Jahid Hasan",
      price: "700 BDT",
      format: "Paperback & Digital",
      pages: 220,
      description: "Discover how to invite Allah's blessings into your work and daily activities.",
      coverColor: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our live workshops, seminars, and masterclasses to deepen your understanding of Prophetic productivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-green-400 font-bold">{event.price}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-slate-300 mb-4">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Users size={16} />
                    <span>{event.attendees} registered</span>
                  </div>
                </div>

                <button className="w-full btn-primary py-3 rounded-xl font-semibold">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coaching Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Personal <span className="text-gradient">Coaching</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get personalized guidance to overcome your specific productivity challenges using Islamic principles.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coachingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-300">
                  Book Session
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Books Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Published <span className="text-gradient">Books</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deepen your knowledge with our comprehensive guides on Islamic productivity and time management.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover-lift"
              >
                <div className="flex space-x-4 mb-6">
                  <div className={`w-20 h-28 bg-gradient-to-br ${book.coverColor} rounded-lg shadow-md flex items-center justify-center`}>
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{book.title}</h3>
                    <p className="text-sm text-slate-400 mb-2">by {book.author}</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span>{book.pages} pages</span>
                      <span>{book.format}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 text-sm">{book.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-400">{book.price}</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;