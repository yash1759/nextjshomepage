import React from 'react'
import Container from '../container/Container'

const Cta = () => {
  return (
    <div className="py-20 bg-[#051023]">
    <Container>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our IT solutions can help you achieve your goals and drive business success.
        </p>
        <button className="bg-[#051023] hover:bg-[#121837] cursor-pointer text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
          Get Started Today
        </button>
      </div>
    </Container>
  </div>
  )
}

export default Cta