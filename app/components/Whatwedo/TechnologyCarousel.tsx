"use client"
import React, { useEffect, useRef, useState } from 'react'
import Container from '../container/Container'

const categories = [
  'All',
  'Frontend',
  'Backend',
  'Cloud',
  'Database',
  'Styling',
  'Testing',
  'DevOps',
  'Version Control',
]

const technologies = [
  { name: "React.js", icon: "⚛️", category: "Frontend", description: "Modern UI development" },
  { name: "Next.js", icon: "⚡", category: "Full-Stack", description: "React framework for production" },
  { name: "Angular", icon: "🅰️", category: "Frontend", description: "Enterprise-grade framework" },
  { name: "Vue.js", icon: "💚", category: "Frontend", description: "Progressive JavaScript framework" },
  { name: "Node.js", icon: "🟢", category: "Backend", description: "Server-side JavaScript" },
  { name: "Express.js", icon: "🚂", category: "Backend", description: "Fast web framework" },
  { name: "Python", icon: "🐍", category: "Backend", description: "Versatile programming language" },
  { name: "Django", icon: "🎸", category: "Backend", description: "High-level Python framework" },
  { name: "AWS", icon: "☁️", category: "Cloud", description: "Amazon Web Services" },
  { name: "Azure", icon: "🔷", category: "Cloud", description: "Microsoft cloud platform" },
  { name: "Google Cloud", icon: "🔵", category: "Cloud", description: "Google cloud services" },
  { name: "Docker", icon: "🐳", category: "DevOps", description: "Containerization platform" },
  { name: "Vercel", icon: "▲", category: "Cloud", description: "Frontend cloud platform for Next.js" },
  { name: "Firebase", icon: "🔥", category: "Cloud", description: "Google's app development platform" },
  { name: "MongoDB", icon: "🍃", category: "Database", description: "NoSQL database" },
  { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Advanced open source database" },
  { name: "MySQL", icon: "🐬", category: "Database", description: "Reliable database system" },
  { name: "Redis", icon: "🔴", category: "Database", description: "In-memory data store" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling", description: "Utility-first CSS framework" },
  { name: "Bootstrap", icon: "📦", category: "Styling", description: "Popular CSS framework" },
  { name: "Material-UI", icon: "🎭", category: "Styling", description: "React UI framework" },
  { name: "Ant Design", icon: "🐜", category: "Styling", description: "Enterprise UI design" },
  { name: "Jest", icon: "🃏", category: "Testing", description: "JavaScript testing framework" },
  { name: "Cypress", icon: "🌲", category: "Testing", description: "End-to-end testing" },
  { name: "Git", icon: "📝", category: "Version Control", description: "Distributed version control" },
  { name: "GitHub", icon: "🐙", category: "Version Control", description: "Code collaboration platform" }
]

const PAGE_SIZE = 8

const TechnologyGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [selectedCategory])

  const filtered = selectedCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === selectedCategory)

  const visibleTechs = filtered.slice(0, visibleCount)
  const canLoadMore = visibleCount < filtered.length

  return (
    <div className="bg-[#0C182A] py-24">
      <Container>
        <div ref={containerRef} className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
          <h3 className='text-white text-4xl font-bold mb-4'>Technologies We Master</h3>
          <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>We work with cutting-edge technologies and frameworks to deliver modern, scalable solutions for your business.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 cursor-pointer rounded-full text-sm font-semibold transition-all duration-200 border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-[#121837] text-blue-400 border-[#1a2a4a] hover:bg-blue-900 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleTechs.map((tech, idx) => (
            <div key={tech.name + idx} className="bg-[#051023] p-6 rounded-2xl shadow-xl border border-gray-800 hover:bg-[#121837] hover:scale-105 hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">{tech.name}</h4>
              <span className="text-blue-400 text-xs font-semibold mb-2 uppercase tracking-wide">{tech.category}</span>
              <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300 mb-0">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {canLoadMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default TechnologyGrid 