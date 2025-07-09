import React from 'react'
import Herosection from '../../components/HeroSection/Herosection'
import OurStory from '../../components/OurStory/OurStory'
import OurValue from '../../components/OurValue/OurValue'
import WhatWeDo from '../../components/Whatwedo/WhatWeDo'
import Cta from '../../components/Cta/Cta'

const About = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <Herosection />

      {/* Our Story Section */}
      <OurStory />
      {/* Our Values Section */}
      <OurValue />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* CTA Section */}
      <Cta />
    </div>
  )
}

export default About