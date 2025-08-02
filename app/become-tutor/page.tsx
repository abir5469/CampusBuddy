"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function BecomeTutorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stream: "",
    subjects: "",
    experience: "",
    qualification: "",
    hourlyRate: "",
    availability: "",
    description: "",
    teachingMode: "both",
  })
  const [isLoading, setIsLoading] = useState(false)

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
    "Literature",
    "History",
    "Philosophy",
    "Design",
    "Architecture",
    "Law",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      alert("Your tutor application has been submitted successfully! We will review it and get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        stream: "",
        subjects: "",
        experience: "",
        qualification: "",
        hourlyRate: "",
        availability: "",
        description: "",
        teachingMode: "both",
      })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Find Tutors
                </Link>
                <Link
                  href="/become-tutor"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 bg-white/20"
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
            Become a{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Tutor
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Share your knowledge, help fellow students, and earn money by becoming a tutor on SkillNest. Students from
            all streams are welcome to advertise their tutoring services.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Earn Money</h3>
              <p className="text-gray-300">
                Set your own hourly rates and earn money by sharing your knowledge with other students.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Build Experience</h3>
              <p className="text-gray-300">
                Gain valuable teaching experience and enhance your resume with tutoring credentials.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-white mb-4">Help Others</h3>
              <p className="text-gray-300">
                Make a positive impact by helping fellow students succeed in their academic journey.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Tutor Application Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Stream/Field *</label>
                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800">
                      Select your stream
                    </option>
                    {streams.map((stream) => (
                      <option key={stream} value={stream} className="bg-gray-800">
                        {stream}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Subjects You Can Teach *</label>
                <input
                  type="text"
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Mathematics, Physics, Programming, etc."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Teaching Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800">
                      Select experience
                    </option>
                    <option value="beginner" className="bg-gray-800">
                      Beginner (0-1 years)
                    </option>
                    <option value="intermediate" className="bg-gray-800">
                      Intermediate (1-3 years)
                    </option>
                    <option value="experienced" className="bg-gray-800">
                      Experienced (3+ years)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Highest Qualification *</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., B.Tech, M.Sc, PhD, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Hourly Rate (₹) *</label>
                  <input
                    type="number"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    required
                    min="100"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your hourly rate"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Teaching Mode *</label>
                  <select
                    name="teachingMode"
                    value={formData.teachingMode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="online" className="bg-gray-800">
                      Online Only
                    </option>
                    <option value="offline" className="bg-gray-800">
                      Offline Only
                    </option>
                    <option value="both" className="bg-gray-800">
                      Both Online & Offline
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Availability *</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Mon-Fri 6-9 PM, Weekends 10 AM-6 PM"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  About Yourself & Teaching Approach *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                  placeholder="Tell us about yourself, your teaching style, and what makes you a great tutor..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="rounded border-gray-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-300">
                  I agree to the tutor terms and conditions and confirm that all information provided is accurate.
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </div>
                ) : (
                  "Submit Tutor Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
