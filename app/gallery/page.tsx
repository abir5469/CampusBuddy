"use client"

import { useState } from "react"
import Link from "next/link"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = ["all", "events", "clubs", "workshops", "competitions", "achievements"]

  const galleryItems = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      category: "events",
      image: "/placeholder.svg?height=300&width=400",
      description: "Students showcasing their innovative projects at the annual technology festival.",
    },
    {
      id: 2,
      title: "Coding Club Workshop",
      category: "clubs",
      image: "/placeholder.svg?height=300&width=400",
      description: "Weekly coding workshop where students learn new programming languages and frameworks.",
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      category: "workshops",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interactive workshop on design thinking and user experience principles.",
    },
    {
      id: 4,
      title: "Hackathon Winners",
      category: "competitions",
      image: "/placeholder.svg?height=300&width=400",
      description: "Celebrating our students who won the inter-college hackathon competition.",
    },
    {
      id: 5,
      title: "Business Club Meeting",
      category: "clubs",
      image: "/placeholder.svg?height=300&width=400",
      description: "Monthly business club meeting discussing entrepreneurship and startup ideas.",
    },
    {
      id: 6,
      title: "AI/ML Workshop",
      category: "workshops",
      image: "/placeholder.svg?height=300&width=400",
      description: "Hands-on workshop on artificial intelligence and machine learning concepts.",
    },
    {
      id: 7,
      title: "Cultural Fest Performance",
      category: "events",
      image: "/placeholder.svg?height=300&width=400",
      description: "Students performing at the annual cultural festival celebration.",
    },
    {
      id: 8,
      title: "Research Paper Awards",
      category: "achievements",
      image: "/placeholder.svg?height=300&width=400",
      description: "Students receiving awards for their outstanding research contributions.",
    },
    {
      id: 9,
      title: "Startup Pitch Competition",
      category: "competitions",
      image: "/placeholder.svg?height=300&width=400",
      description: "Students pitching their innovative startup ideas to industry experts.",
    },
    {
      id: 10,
      title: "Photography Club Exhibition",
      category: "clubs",
      image: "/placeholder.svg?height=300&width=400",
      description: "Annual photography exhibition showcasing student creativity and talent.",
    },
    {
      id: 11,
      title: "Robotics Workshop",
      category: "workshops",
      image: "/placeholder.svg?height=300&width=400",
      description: "Students learning robotics and automation in hands-on workshop sessions.",
    },
    {
      id: 12,
      title: "Academic Excellence Awards",
      category: "achievements",
      image: "/placeholder.svg?height=300&width=400",
      description: "Recognizing students for their outstanding academic performance.",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 bg-white/20"
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

      {/* Gallery Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Community{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore the vibrant life of our SkillNest community through events, workshops, competitions, and
              achievements.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white text-sm">Click to view</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                  <span className="inline-block bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-xs font-medium">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-white mb-2">No images found</h3>
              <p className="text-gray-300">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
