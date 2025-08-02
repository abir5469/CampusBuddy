"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setShowMessage(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 bg-white/20"
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

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Have questions, suggestions, or need help? We'd love to hear from you! Our team is here to support your
              learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>

              {showMessage && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-lg mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">✅</span>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your name"
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

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      <span className="mr-2">📧</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">support@skillnest.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        123 Education Street
                        <br />
                        Learning City, LC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Support Hours</h4>
                      <p className="text-gray-300">
                        Mon-Fri: 9 AM - 6 PM
                        <br />
                        Sat-Sun: 10 AM - 4 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <span className="text-white text-xl">📘</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  >
                    <span className="text-white text-xl">🐦</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                  >
                    <span className="text-white text-xl">📷</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-300"
                  >
                    <span className="text-white text-xl">💼</span>
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Help</h3>
                <div className="space-y-3">
                  <Link
                    href="/faq"
                    className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
                  >
                    📋 Frequently Asked Questions
                  </Link>
                  <Link
                    href="/help"
                    className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
                  >
                    🆘 Help Center
                  </Link>
                  <Link
                    href="/tutorials"
                    className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
                  >
                    🎓 Video Tutorials
                  </Link>
                  <Link
                    href="/community"
                    className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
                  >
                    👥 Community Forum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
