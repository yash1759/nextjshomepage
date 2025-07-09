import React from 'react'
import ServicesHero from '../../components/HeroSection/ServicesHero'
import WhatWeDo from '../../components/Whatwedo/WhatWeDo'
import Growth from '../../components/Growth/Growth'
import Faq from '../../components/Faq/Faq'
import Cta from '../../components/Cta/Cta'

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Services Overview */}
      <WhatWeDo />
      
      {/* Detailed Services */}
      <Growth />
      
      {/* FAQ Section */}
      <Faq />
      
      {/* CTA Section */}
      <Cta />
    </div>
  )
}

export default Services 