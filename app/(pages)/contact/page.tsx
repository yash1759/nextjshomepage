import React from 'react'
import ContactHero from '../../components/HeroSection/ContactHero'
import Contact from '../../components/Contact/Contact'
import ContactForm from '../../components/Contact/ContactForm'
import Testimonials from '../../components/Contact/Testimonials'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Information Section */}
      <Contact />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}

export default ContactPage 