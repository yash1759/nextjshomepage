import React from 'react'
import ContactHero from '../../components/HeroSection/ContactHero'
import Contact from '../../components/Contact/Contact'
import ContactForm from '../../components/Contact/ContactForm'
import { contactData } from '../../data/contactData'
import AboveFold from '../../components/AboveFold/AboveFold'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <AboveFold 
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        ctaText={contactData.hero.ctaText}
        backgroundImage={contactData.hero.backgroundImage}
      />
      
      {/* Contact Information Section */}
      <Contact />
      
      
      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}

export default ContactPage 