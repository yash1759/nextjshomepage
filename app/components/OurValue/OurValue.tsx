import React from 'react'
import Container from '../container/Container'

const OurValue = () => {
  return (
    <div className="py-20 bg-[#0C182A] ">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          The principles that guide everything we do and every solution we deliver.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg hover:bg-[#0C182A] transition-colors duration-300">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-semibold text-white mb-4">Innovation</h3>
          <p className="text-gray-300">
            We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.
          </p>
        </div>
        
        <div className="text-center p-6 rounded-lg hover:bg-[#0C182A] transition-colors duration-300">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-2xl font-semibold text-white mb-4">Partnership</h3>
          <p className="text-gray-300">
            We believe in building long-term relationships with our clients, working as an extension of their team to achieve shared goals.
          </p>
        </div>
        
        <div className="text-center p-6 rounded-lg hover:bg-[#0C182A] transition-colors duration-300">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-semibold text-white mb-4">Excellence</h3>
          <p className="text-gray-300">
            Every project we undertake is executed with the highest standards of quality, reliability, and attention to detail.
          </p>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default OurValue