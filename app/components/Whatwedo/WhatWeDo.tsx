import React from 'react'
import Container from '../container/Container'
import TechnologyCarousel from './TechnologyCarousel'

const WhatWeDo = () => {
  return (
    <>
      <div className="py-20 bg-[#051023]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive IT services designed to power your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0C182A] p-6 rounded-lg hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <span className="text-2xl">🛠️</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">IT Support</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                Proactive monitoring, maintenance, and 24/7 support to keep your systems running smoothly.
              </p>
            </div>
            
            <div className="bg-[#0C182A] p-6 rounded-lg hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <span className="text-2xl">☁️</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Cloud Solutions</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                Secure, scalable cloud infrastructure and migration services for modern business needs.
              </p>
            </div>
            
            <div className="bg-[#0C182A] p-6 rounded-lg hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Cybersecurity</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                Comprehensive security solutions to protect your data and systems from evolving threats.
              </p>
            </div>
            
            <div className="bg-[#0C182A] p-6 rounded-lg hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">IT Consulting</h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                Strategic guidance to align technology with your business objectives and growth plans.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Technology Carousel Section */}
      <TechnologyCarousel />
    </>
  )
}

export default WhatWeDo