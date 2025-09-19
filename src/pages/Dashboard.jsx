import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Award,
  Bell,
  Download,
  Play,
  MessageCircle,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: "Ahmed Rahman",
    email: "ahmed@example.com",
    package: "Complete Package",
    joinDate: "January 15, 2025",
    progress: 65
  };

  const weeklyModules = [
    {
      week: 1,
      title: "Foundation of Prophetic Productivity",
      status: "completed",
      progress: 100,
      liveSession: "Jan 20, 2025 - 8:00 PM",
      recordings: 4,
      worksheets: 3
    },
    {
      week: 2,
      title: "Time Consciousness & Salah Integration",
      status: "completed",
      progress: 100,
      liveSession: "Jan 27, 2025 - 8:00 PM",
      recordings: 4,
      worksheets: 3
    },
    {
      week: 3,
      title: "Priority Matrix & Islamic Values",
      status: "current",
      progress: 60,
      liveSession: "Feb 3, 2025 - 8:00 PM",
      recordings: 2,
      worksheets: 2
    },
    {
      week: 4,
      title: "Energy Management & Prophetic Habits",
      status: "locked",
      progress: 0,
      liveSession: "Feb 10, 2025 - 8:00 PM",
      recordings: 0,
      worksheets: 0
    }
  ];

  const announcements = [
    {
      title: "Week 3 Live Session Tomorrow",
      message: "Don't forget to join tomorrow's live session on Priority Matrix & Islamic Values.",
      date: "Feb 2, 2025",
      type: "reminder"
    },
    {
      title: "New Worksheet Available",
      message: "Week 3 worksheet on Islamic Priority Setting is now available for download.",
      date: "Feb 1, 2025",
      type: "update"
    },
    {
      title: "Community Discussion",
      message: "Join the discussion about implementing Prophetic time management in your daily routine.",
      date: "Jan 30, 2025",
      type: "community"
    }
  ];

  const stats = [
    { label: "Completed Modules", value: "2/8", icon: CheckCircle, color: "text-green-500" },
    { label: "Live Sessions Attended", value: "4/16", icon: Video, color: "text-blue-500" },
    { label: "Worksheets Downloaded", value: "6/24", icon: FileText, color: "text-purple-500" },
    { label: "Overall Progress", value: "65%", icon: BarChart3, color: "text-indigo-500" }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
        <p className="opacity-90 mb-4">Continue your journey to Prophetic Productivity</p>
        <div className="bg-white bg-opacity-20 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span>Overall Progress</span>
            <span className="font-bold">{user.progress}%</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${user.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover-lift"
          >
            <div className="flex items-center space-x-3">
              <stat.icon className={stat.color} size={24} />
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current Week */}
      <div className="card">
        <h3 className="text-xl font-bold text-white mb-6">Current Week</h3>
        {weeklyModules.find(module => module.status === 'current') && (
          <div className="border-2 border-indigo-500/30 rounded-xl p-6 bg-indigo-500/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Week {weeklyModules.find(module => module.status === 'current').week}: {weeklyModules.find(module => module.status === 'current').title}
                </h4>
                <p className="text-slate-300">Next Live Session: {weeklyModules.find(module => module.status === 'current').liveSession}</p>
              </div>
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                In Progress
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="bg-indigo-500 text-white p-4 rounded-xl hover:bg-indigo-600 transition-colors duration-200 flex items-center space-x-2">
                <Video size={20} />
                <span>Join Live Session</span>
              </button>
              <button className="btn-outline p-4 rounded-xl flex items-center space-x-2">
                <Play size={20} />
                <span>Watch Recordings</span>
              </button>
              <button className="btn-outline p-4 rounded-xl flex items-center space-x-2">
                <Download size={20} />
                <span>Download Materials</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Announcements */}
      <div className="card">
        <h3 className="text-xl font-bold text-white mb-6">Recent Announcements</h3>
        <div className="space-y-4">
          {announcements.slice(0, 3).map((announcement, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
              <h4 className="font-semibold text-white">{announcement.title}</h4>
              <p className="text-blue-200 text-sm">{announcement.message}</p>
              <span className="text-xs text-blue-400">{announcement.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCourseContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Course Content</h2>
      
      {weeklyModules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`card ${
            module.status === 'locked' ? 'opacity-60' : 'hover-lift'
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Week {module.week}: {module.title}
              </h3>
              <p className="text-slate-300">Live Session: {module.liveSession}</p>
            </div>
            <div className="flex items-center space-x-2">
              {module.status === 'completed' && (
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              )}
              {module.status === 'current' && (
                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Current
                </span>
              )}
              {module.status === 'locked' && (
                <span className="bg-blue-800 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                  Locked
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-400">Progress</span>
              <span className="text-sm font-semibold text-white">{module.progress}%</span>
            </div>
            <div className="w-full bg-blue-800 rounded-full h-2">
              <div 
                className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-slate-400">
              <Video size={16} />
              <span className="text-sm">{module.recordings} Recordings</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <FileText size={16} />
              <span className="text-sm">{module.worksheets} Worksheets</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Clock size={16} />
              <span className="text-sm">2 Hours Content</span>
            </div>
          </div>

          {module.status !== 'locked' && (
            <div className="flex space-x-3 mt-4">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center space-x-2">
                <Play size={16} />
                <span>Watch</span>
              </button>
              <button className="btn-outline px-4 py-2 rounded-lg flex items-center space-x-2">
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Community</h2>
      
      <div className="card">
        <h3 className="text-lg font-bold text-white mb-4">WhatsApp Group</h3>
        <p className="text-slate-300 mb-4">
          Join our exclusive WhatsApp group to connect with fellow students, ask questions, and share your progress.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2">
          <MessageCircle size={20} />
          <span>Join WhatsApp Group</span>
        </button>
      </div>

      <div className="card">
        <h3 className="text-lg font-bold text-white mb-4">Productivity Circle</h3>
        <p className="text-slate-300 mb-4">
          Access our lifetime membership to the Productivity Circle community platform.
        </p>
        <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center space-x-2">
          <Users size={20} />
          <span>Access Community</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="bg-dark-lighter shadow-soft border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gradient">Divine Consultancy</h1>
              <span className="text-blue-400">|</span>
              <span className="text-blue-200">Student Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-slate-400 hover:text-white">
                <Bell size={20} />
              </button>
              <button className="text-slate-400 hover:text-white">
                <Settings size={20} />
              </button>
              <button className="text-slate-400 hover:text-white">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  {user.name.charAt(0)}
                </div>
                <h3 className="font-bold text-white">{user.name}</h3>
                <p className="text-sm text-blue-300">{user.package}</p>
                <p className="text-xs text-blue-400">Joined {user.joinDate}</p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'content', label: 'Course Content', icon: BookOpen },
                  { id: 'community', label: 'Community', icon: Users },
                  { id: 'certificates', label: 'Certificates', icon: Award }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'bg-indigo-500/20 text-indigo-400'
                        : 'text-blue-300 hover:bg-blue-800/50 hover:text-white'
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'content' && renderCourseContent()}
            {activeTab === 'community' && renderCommunity()}
            {activeTab === 'certificates' && (
              <div className="card text-center">
                <Award size={64} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Certificates</h3>
                <p className="text-blue-200">Complete the course to earn your certificate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;