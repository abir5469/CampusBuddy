"use client"

import { useState } from "react"
import Link from "next/link"

export default function TutorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStream, setSelectedStream] = useState("")
  const [selectedMode, setSelectedMode] = useState("")

  const streams = [
    "Computer Science",
    "Engineering",
    "Business",
    "Medicine",
    "Arts",
    "Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "Psychology",
  ]

  const tutors = [
    {
      id: 1,
      name: "Rahul Sharma",
      stream: "Computer Science",
      subjects: ["Programming", "Data Structures", "Algorithms"],
      experience: "3 years",
      rating: 4.8,
      hourlyRate: 500,
      mode: "Both",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "Experienced software developer and tutor specializing in programming languages and computer science fundamentals.",
    },
    {
      id: 2,
      name: "Priya Patel",
      stream: "Mathematics",
      subjects: ["Calculus", "Linear Algebra", "Statistics"],
      experience: "2 years",
      rating: 4.9,
      hourlyRate: 400,
      mode: "Online",
      image: "/placeholder.svg?height=100&width=100",
      description: "Mathematics graduate with a passion for teaching complex mathematical concepts in simple ways.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      stream: "Physics",
      subjects: ["Mechanics", "Thermodynamics", "Quantum Physics"],
      experience: "4 years",
      rating: 4.7,
      hourlyRate: 450,
      mode: "Both",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "PhD student in Physics with extensive experience in tutoring undergraduate and graduate level physics.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      stream: "Chemistry",
      subjects: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
      experience: "2 years",
      rating: 4.6,
      hourlyRate: 350,
      mode: "Offline",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "Chemistry major with hands-on lab experience and a knack for making chemistry fun and understandable.",
    },
    {
      id: 5,
      name: "Vikash Singh",
      stream: "Engineering",
      subjects: ["Mechanical Engineering", "Thermodynamics", "CAD Design"],
      experience: "5 years",
      rating: 4.8,
      hourlyRate: 600,
      mode: "Both",
      image: "/placeholder.svg?height=100&width=100",
      description: "Professional engineer with industry experience, specializing in mechanical engineering concepts.",
    },
    {
      id: 6,
      name: "Anita Reddy",
      stream: "Business",
      subjects: ["Marketing", "Finance", "Business Strategy"],
      experience: "3 years",
      rating: 4.7,
      hourlyRate: 550,
      mode: "Online",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "MBA graduate with corporate experience, helping students understand real-world business applications.",
    },
  ]

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStream = selectedStream === "" || tutor.stream === selectedStream
    const matchesMode = selectedMode === "" || tutor.mode === selectedMode || tutor.mode === "Both"

    return matchesSearch && matchesStream && matchesMode
  })

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

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Features
                </Link>
                <Link
                  href="/tutors"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 bg-white/20"
                >
                  Find Tutors
                </Link>
                <Link
                  href="/become-tutor"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Become Tutor
                </Link>
                <Link
                  href="/gallery"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Tutor
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Connect with experienced student tutors from all streams. Get personalized help and excel in your studies.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Search tutors or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="" className="bg-gray-800">
                    All Streams
                  </option>
                  {streams.map((stream) => (
                    <option key={stream} value={stream} className="bg-gray-800">
                      {stream}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="" className="bg-gray-800">
                    All Modes
                  </option>
                  <option value="Online" className="bg-gray-800">
                    Online
                  </option>
                  <option value="Offline" className="bg-gray-800">
                    Offline
                  </option>
                  <option value="Both" className="bg-gray-800">
                    Both
                  </option>
                </select>
              </div>
              <div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Search Tutors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-white">
          <p className="text-lg">Found {filteredTutors.length} tutors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={tutor.image || "/placeholder.svg"}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full border-2 border-purple-400 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{tutor.name}</h3>
                  <p className="text-purple-300">{tutor.stream}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white ml-1">{tutor.rating}</span>
                  <span className="text-gray-300 ml-2">({tutor.experience})</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tutor.subjects.map((subject) => (
                    <span key={subject} className="bg-purple-600/30 text-purple-200 px-2 py-1 rounded-full text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-3">{tutor.description}</p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold text-green-400">₹{tutor.hourlyRate}</span>
                  <span className="text-gray-300 text-sm">/hour</span>
                </div>
                <span className="bg-cyan-600/30 text-cyan-200 px-3 py-1 rounded-full text-sm">{tutor.mode}</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                  Contact
                </button>
                <button className="flex-1 bg-transparent border-2 border-purple-400 text-purple-400 py-2 px-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No tutors found</h3>
            <p className="text-gray-300">Try adjusting your search criteria or browse all tutors.</p>
          </div>
        )}
      </div>
    </div>
  )
}
