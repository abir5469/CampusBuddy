"use client"

import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: "📚",
      title: "Upload & Share Assignments",
      description:
        "Share your academic work and help fellow students learn from your expertise. Build a repository of knowledge that benefits the entire community.",
      benefits: [
        "Earn points for contributions",
        "Help other students",
        "Build your reputation",
        "Create passive income",
      ],
    },
    {
      icon: "💻",
      title: "Freelance Projects",
      description:
        "Take on exciting freelance projects and build your professional portfolio. Connect with clients who need your specific skills.",
      benefits: [
        "Flexible working hours",
        "Build professional network",
        "Gain real-world experience",
        "Earn money while studying",
      ],
    },
    {
      icon: "🎓",
      title: "Find Expert Tutors",
      description:
        "Connect with experienced student tutors from all streams. Get personalized help and excel in your studies.",
      benefits: ["One-on-one sessions", "Affordable rates", "Peer-to-peer learning", "Flexible scheduling"],
    },
    {
      icon: "💡",
      title: "Share Innovative Ideas",
      description:
        "Post your innovative ideas and collaborate with like-minded individuals. Turn concepts into reality through community support.",
      benefits: ["Find co-founders", "Get feedback", "Validate ideas", "Build teams"],
    },
    {
      icon: "👥",
      title: "Join Student Clubs",
      description:
        "Connect with student organizations and expand your network. Participate in activities that align with your interests.",
      benefits: ["Network building", "Skill development", "Leadership opportunities", "Social connections"],
    },
    {
      icon: "📅",
      title: "Attend Events & Workshops",
      description:
        "Participate in workshops, seminars, and networking events. Stay updated with industry trends and enhance your skills.",
      benefits: ["Learn new skills", "Industry exposure", "Certificate courses", "Professional development"],
    },
    {
      icon: "⭐",
      title: "Earn Rewards & Points",
      description:
        "Get rewarded for your contributions and climb the leaderboard. Redeem points for exclusive benefits and recognition.",
      benefits: ["Recognition system", "Exclusive perks", "Achievement badges", "Community status"],
    },
    {
      icon: "🔍",
      title: "Smart Search & Discovery",
      description:
        "Find exactly what you need with our advanced search and recommendation system. Discover opportunities tailored to your interests.",
      benefits: ["Personalized recommendations", "Advanced filters", "Smart matching", "Saved searches"],
    },
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
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 bg-white/20"
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

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Platform{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover all the powerful features that make SkillNest the ultimate platform for student collaboration,
              learning, and growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using SkillNest to enhance their learning experience and build
              their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                🚀 Join SkillNest Today
              </Link>
              <Link
                href="/tutors"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                🔍 Explore Tutors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
