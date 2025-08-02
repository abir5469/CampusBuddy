"use client"

import { useState } from "react"
import Link from "next/link"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalUsers: 25600,
    totalUploads: 15420,
    totalTutors: 1250,
    totalEarnings: 125000,
  }

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", stream: "Computer Science", joinDate: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", stream: "Engineering", joinDate: "2024-01-14" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", stream: "Business", joinDate: "2024-01-13" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", stream: "Medicine", joinDate: "2024-01-12" },
  ]

  const pendingTutors = [
    { id: 1, name: "Alex Kumar", stream: "Mathematics", experience: "3 years", rate: 500, status: "pending" },
    { id: 2, name: "Priya Sharma", stream: "Physics", experience: "2 years", rate: 400, status: "pending" },
    { id: 3, name: "Rahul Patel", stream: "Chemistry", experience: "4 years", rate: 450, status: "pending" },
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
      <nav className="relative z-50 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 shadow-2xl border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
              >
                SkillNest Admin
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, Administrator!</span>
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
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-300">Manage the SkillNest platform and monitor activities</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Users</p>
                  <p className="text-3xl font-bold text-white">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <div className="text-4xl">👥</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Uploads</p>
                  <p className="text-3xl font-bold text-blue-400">{stats.totalUploads.toLocaleString()}</p>
                </div>
                <div className="text-4xl">📚</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Active Tutors</p>
                  <p className="text-3xl font-bold text-green-400">{stats.totalTutors.toLocaleString()}</p>
                </div>
                <div className="text-4xl">🎓</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Platform Revenue</p>
                  <p className="text-3xl font-bold text-yellow-400">₹{stats.totalEarnings.toLocaleString()}</p>
                </div>
                <div className="text-4xl">💰</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-8">
            <div className="flex flex-wrap border-b border-white/20">
              {[
                { id: "overview", label: "Overview", icon: "📊" },
                { id: "users", label: "Users", icon: "👥" },
                { id: "tutors", label: "Tutors", icon: "🎓" },
                { id: "content", label: "Content", icon: "📚" },
                { id: "reports", label: "Reports", icon: "📈" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white bg-white/20 border-b-2 border-orange-400"
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Recent Users</h3>
                      <div className="space-y-4">
                        {recentUsers.map((user) => (
                          <div key={user.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-semibold">{user.name}</h4>
                                <p className="text-gray-400 text-sm">{user.email}</p>
                                <p className="text-purple-300 text-sm">{user.stream}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-gray-400 text-sm">Joined</p>
                                <p className="text-white text-sm">{user.joinDate}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Pending Tutor Applications</h3>
                      <div className="space-y-4">
                        {pendingTutors.map((tutor) => (
                          <div key={tutor.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h4 className="text-white font-semibold">{tutor.name}</h4>
                                <p className="text-purple-300 text-sm">{tutor.stream}</p>
                                <p className="text-gray-400 text-sm">{tutor.experience} experience</p>
                              </div>
                              <div className="text-right">
                                <p className="text-green-400 font-semibold">₹{tutor.rate}/hr</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-300">
                                Approve
                              </button>
                              <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all duration-300">
                                Reject
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        <div className="text-center">
                          <div className="text-2xl mb-2">👥</div>
                          <div className="font-semibold">Manage Users</div>
                        </div>
                      </button>
                      <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🎓</div>
                          <div className="font-semibold">Review Tutors</div>
                        </div>
                      </button>
                      <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📚</div>
                          <div className="font-semibold">Content Review</div>
                        </div>
                      </button>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📈</div>
                          <div className="font-semibold">View Reports</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "users" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">User Management</h3>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Search users..."
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                        Export Data
                      </button>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="text-left p-4 text-white font-semibold">Name</th>
                          <th className="text-left p-4 text-white font-semibold">Email</th>
                          <th className="text-left p-4 text-white font-semibold">Stream</th>
                          <th className="text-left p-4 text-white font-semibold">Join Date</th>
                          <th className="text-left p-4 text-white font-semibold">Status</th>
                          <th className="text-left p-4 text-white font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-t border-white/10">
                            <td className="p-4 text-white">{user.name}</td>
                            <td className="p-4 text-gray-300">{user.email}</td>
                            <td className="p-4 text-purple-300">{user.stream}</td>
                            <td className="p-4 text-gray-300">{user.joinDate}</td>
                            <td className="p-4">
                              <span className="bg-green-600/30 text-green-300 px-2 py-1 rounded-full text-sm">
                                Active
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                                  View
                                </button>
                                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                                  Suspend
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "tutors" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Tutor Management</h3>
                    <div className="flex gap-4">
                      <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="all" className="bg-gray-800">
                          All Status
                        </option>
                        <option value="pending" className="bg-gray-800">
                          Pending
                        </option>
                        <option value="approved" className="bg-gray-800">
                          Approved
                        </option>
                        <option value="rejected" className="bg-gray-800">
                          Rejected
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pendingTutors.map((tutor) => (
                      <div key={tutor.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <div className="mb-4">
                          <h4 className="text-xl font-bold text-white mb-2">{tutor.name}</h4>
                          <p className="text-purple-300 mb-1">{tutor.stream}</p>
                          <p className="text-gray-400 text-sm mb-2">{tutor.experience} experience</p>
                          <p className="text-green-400 font-semibold">₹{tutor.rate}/hour</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                            Approve
                          </button>
                          <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "content" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Content Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-2">Assignment {item}</h4>
                        <p className="text-gray-400 text-sm mb-2">Computer Science • Uploaded by John Doe</p>
                        <p className="text-gray-300 text-sm mb-4">Data structures and algorithms implementation</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-yellow-400 text-sm">⭐ 4.8 rating</span>
                          <span className="text-purple-400 text-sm">125 downloads</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors">
                            Approve
                          </button>
                          <button className="flex-1 bg-red-600 text-white py-2 px-3 rounded text-sm hover:bg-red-700 transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reports" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Analytics & Reports</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-xl font-bold text-white mb-4">User Growth</h4>
                      <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">Chart placeholder - User growth over time</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-xl font-bold text-white mb-4">Revenue Trends</h4>
                      <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">Chart placeholder - Revenue trends</p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-xl font-bold text-white mb-4">Popular Streams</h4>
                      <div className="space-y-3">
                        {["Computer Science", "Engineering", "Business", "Medicine"].map((stream, index) => (
                          <div key={stream} className="flex justify-between items-center">
                            <span className="text-white">{stream}</span>
                            <div className="flex items-center">
                              <div className="w-32 bg-white/10 rounded-full h-2 mr-3">
                                <div
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                  style={{ width: `${(4 - index) * 25}%` }}
                                ></div>
                              </div>
                              <span className="text-gray-400 text-sm">{(4 - index) * 25}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-xl font-bold text-white mb-4">Recent Activity</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">New user registered</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">Assignment uploaded</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">Tutor application submitted</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">Payment processed</span>
                        </div>
                      </div>
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
