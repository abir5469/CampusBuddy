"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const roles = [
    "Web Developer",
    "Poster Designer",
    "Assignment Seller",
    "Tutor",
    "Startup Seeker",
    "Content Creator",
    "Data Analyst",
    "UI/UX Designer",
  ]

  // Typewriter effect
  useEffect(() => {
    const typeEffect = () => {
      const role = roles[roleIndex]

      if (isDeleting) {
        setCurrentRole(role.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        setCurrentRole(role.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === role.length) {
        typeSpeed = 2000
        setIsDeleting(true)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        typeSpeed = 500
      }

      setTimeout(typeEffect, typeSpeed)
    }

    const timeout = setTimeout(typeEffect, 100)
    return () => clearTimeout(timeout)
  }, [roleIndex, charIndex, isDeleting, roles])

  // Animated counters
  const [counters, setCounters] = useState({
    uploads: 0,
    gigs: 0,
    notes: 0,
    users: 0,
  })

  useEffect(() => {
    const targets = { uploads: 15420, gigs: 8750, notes: 12300, users: 25600 }
    const duration = 2000
    const steps = 60

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0
      let step = 0

      const timer = setInterval(() => {
        current += increment
        step++

        setCounters((prev) => ({
          ...prev,
          [key]: Math.min(Math.floor(current), target),
        }))

        if (step >= steps) {
          clearInterval(timer)
          setCounters((prev) => ({
            ...prev,
            [key]: target,
          }))
        }
      }, duration / steps)
    })
  }, [])

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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              SkillNest
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            The ultimate platform for student freelancers, collaborators, and knowledge sharers. Connect, learn, and
            grow together in our vibrant community.
          </p>

          <div className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-12 h-12 flex items-center justify-center">
            Find your next: {currentRole}
            <span className="animate-pulse">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              🚀 Join Now
            </Link>
            <Link
              href="/become-tutor"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              💼 Become a Tutor
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What You Can Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover endless opportunities to showcase your skills, collaborate with peers, and build your
              professional network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Upload Assignments",
                desc: "Share your academic work and help fellow students learn from your expertise.",
              },
              {
                icon: "💻",
                title: "Freelance Projects",
                desc: "Take on exciting freelance projects and build your professional portfolio.",
              },
              {
                icon: "💡",
                title: "Post Ideas",
                desc: "Share innovative ideas and collaborate with like-minded individuals.",
              },
              { icon: "👥", title: "Join Clubs", desc: "Connect with student organizations and expand your network." },
              {
                icon: "📅",
                title: "Attend Events",
                desc: "Participate in workshops, seminars, and networking events.",
              },
              {
                icon: "⭐",
                title: "Earn Points",
                desc: "Get rewarded for your contributions and climb the leaderboard.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Community Stats</h2>
            <p className="text-xl text-gray-300">See how our vibrant community is growing and thriving together.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">
                {counters.uploads.toLocaleString()}
              </div>
              <div className="text-gray-300 text-lg">Total Uploads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-pink-400 mb-2">{counters.gigs.toLocaleString()}</div>
              <div className="text-gray-300 text-lg">Student Gigs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">{counters.notes.toLocaleString()}</div>
              <div className="text-gray-300 text-lg">Notes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                {counters.users.toLocaleString()}
              </div>
              <div className="text-gray-300 text-lg">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of students who are already building their future with SkillNest.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
