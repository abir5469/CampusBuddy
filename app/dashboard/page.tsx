"use client"

import { useState } from "react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    uploads: 12,
    earnings: 2500,
    tutoringSessions: 8,
    points: 1250,
  }

  const recentActivities = [
    { id: 1, type: "upload", title: "Data Structures Assignment uploaded", time: "2 hours ago", points: 50 },
    { id: 2, type: "tutoring", title: "Tutoring session with John completed", time: "1 day ago", earnings: 300 },
    { id: 3, type: "achievement", title: "Reached 1000 points milestone", time: "2 days ago", badge: "Gold" },
    { id: 4, type: "gig", title: "Web design project completed", time: "3 days ago", earnings: 800 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                SkillNest
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome back, Student!</span>
              <Link
                href="/"
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Student Dashboard</h1>
            <p className="text-gray-300">Manage your learning journey and track your progress</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Uploads</p>
                  <p className="text-3xl font-bold text-white">{stats.uploads}</p>
                </div>
                <div className="text-4xl">📚</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Earnings</p>
                  <p className="text-3xl font-bold text-green-400">₹{stats.earnings}</p>
                </div>
                <div className="text-4xl">💰</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Tutoring Sessions</p>
                  <p className="text-3xl font-bold text-white">{stats.tutoringSessions}</p>
                </div>
                <div className="text-4xl">🎓</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Reward Points</p>
                  <p className="text-3xl font-bold text-purple-400">{stats.points}</p>
                </div>
                <div className="text-4xl">⭐</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-8">
            <div className="flex flex-wrap border-b border-white/20">
              {[
                { id: "overview", label: "Overview", icon: "📊" },
                { id: "uploads", label: "My Uploads", icon: "📚" },
                { id: "tutoring", label: "Tutoring", icon: "🎓" },
                { id: "gigs", label: "Freelance Gigs", icon: "💼" },
                { id: "profile", label: "Profile", icon: "👤" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white bg-white/20 border-b-2 border-purple-400"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Recent Activities</h3>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                                {activity.type === "upload" && "📚"}
                                {activity.type === "tutoring" && "🎓"}
                                {activity.type === "achievement" && "🏆"}
                                {activity.type === "gig" && "💼"}
                              </div>
                              <div>
                                <p className="text-white font-medium">{activity.title}</p>
                                <p className="text-gray-400 text-sm">{activity.time}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              {activity.points && (
                                <span className="text-purple-400 font-semibold">+{activity.points} points</span>
                              )}
                              {activity.earnings && (
                                <span className="text-green-400 font-semibold">+₹{activity.earnings}</span>
                              )}
                              {activity.badge && (
                                <span className="text-yellow-400 font-semibold">{activity.badge} Badge</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                      <div className="space-y-4">
                        <Link
                          href="/upload"
                          className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-4">📚</span>
                            <div>
                              <h4 className="font-semibold">Upload Assignment</h4>
                              <p className="text-sm opacity-90">Share your work and earn points</p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          href="/become-tutor"
                          className="block bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-4">🎓</span>
                            <div>
                              <h4 className="font-semibold">Become a Tutor</h4>
                              <p className="text-sm opacity-90">Start teaching and earning</p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          href="/gigs"
                          className="block bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-4 rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-4">💼</span>
                            <div>
                              <h4 className="font-semibold">Find Freelance Gigs</h4>
                              <p className="text-sm opacity-90">Explore project opportunities</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center">
                            <span className="text-3xl mr-4">🥇</span>
                            <div>
                              <h4 className="text-white font-semibold">Top Contributor</h4>
                              <p className="text-gray-400 text-sm">Uploaded 10+ assignments</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center">
                            <span className="text-3xl mr-4">⭐</span>
                            <div>
                              <h4 className="text-white font-semibold">Rising Star</h4>
                              <p className="text-gray-400 text-sm">Earned 1000+ points</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center">
                            <span className="text-3xl mr-4">🎓</span>
                            <div>
                              <h4 className="text-white font-semibold">Helpful Tutor</h4>
                              <p className="text-gray-400 text-sm">Completed 5+ tutoring sessions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "uploads" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">My Uploads</h3>
                    <Link
                      href="/upload"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Upload New
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-2">Assignment {item}</h4>
                        <p className="text-gray-400 text-sm mb-4">Computer Science • Uploaded 2 days ago</p>
                        <div className="flex justify-between items-center">
                          <span className="text-green-400 text-sm">+50 points earned</span>
                          <span className="text-purple-400 text-sm">25 downloads</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "tutoring" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Tutoring Sessions</h3>
                    <Link
                      href="/become-tutor"
                      className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Become Tutor
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((session) => (
                      <div key={session} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Mathematics Tutoring</h4>
                            <p className="text-gray-400 text-sm mb-2">Student: John Doe • Duration: 1 hour</p>
                            <p className="text-gray-300 text-sm">Helped with calculus problems and derivatives</p>
                          </div>
                          <div className="text-right">
                            <span className="text-green-400 font-semibold">₹300</span>
                            <p className="text-gray-400 text-sm">Completed</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "gigs" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Freelance Gigs</h3>
                    <Link
                      href="/gigs"
                      className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
                    >
                      Browse Gigs
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((gig) => (
                      <div key={gig} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Website Design Project</h4>
                            <p className="text-gray-400 text-sm mb-2">Client: Tech Startup • Deadline: 5 days</p>
                            <p className="text-gray-300 text-sm">Create a modern landing page for a tech startup</p>
                          </div>
                          <div className="text-right">
                            <span className="text-green-400 font-semibold">₹5000</span>
                            <p className="text-yellow-400 text-sm">In Progress</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Profile Settings</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Stream</label>
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="computer-science" className="bg-gray-800">
                            Computer Science
                          </option>
                          <option value="engineering" className="bg-gray-800">
                            Engineering
                          </option>
                          <option value="business" className="bg-gray-800">
                            Business
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">University</label>
                        <input
                          type="text"
                          defaultValue="Tech University"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Bio</label>
                        <textarea
                          rows={4}
                          defaultValue="Passionate computer science student interested in web development and AI."
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Skills</label>
                        <input
                          type="text"
                          defaultValue="JavaScript, React, Python, Machine Learning"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
