"use client"
import React, { useState, useEffect, useRef } from 'react'
import Container from '../container/Container'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animatedElements = entry.target.querySelectorAll('.animate-on-scroll')
                        animatedElements.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fade-in')
                            }, index * 150)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData)
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
        })
        
        setIsSubmitting(false)
        alert('Thank you for your message! We\'ll get back to you soon.')
    }

    return (
        <div className="bg-[#051023] py-24">
            <Container>
                <div ref={containerRef} className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                            <p className="text-gray-300 text-lg">
                                Ready to transform your business? Let's discuss how we can help you achieve your goals.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out flex items-center space-x-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-[#121837] rounded-lg">
                                    <Mail className="text-blue-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Email</h3>
                                    <p className="text-gray-300">info@sybotstack.com</p>
                                </div>
                            </div>

                            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out flex items-center space-x-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-[#121837] rounded-lg">
                                    <Phone className="text-blue-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Phone</h3>
                                    <p className="text-gray-300">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out flex items-center space-x-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-[#121837] rounded-lg">
                                    <MapPin className="text-blue-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Office</h3>
                                    <p className="text-gray-300">123 Business Ave, Tech City, TC 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-[#0C182A] p-8 rounded-lg ">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#051023] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#051023] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#051023] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#051023] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your company name"
                                    />
                                </div>
                            </div>

                            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#051023] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="">Select a service</option>
                                    <option value="it-support">IT Support</option>
                                    <option value="cloud-services">Cloud Services</option>
                                    <option value="cybersecurity">Cybersecurity</option>
                                    <option value="consulting">IT Consulting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                        className="w-full px-4 py-3 bg-[#051023] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Tell us about your project or requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out w-full bg-[#121837] hover:bg-[#051023] cursor-pointer disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mb-4"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm 