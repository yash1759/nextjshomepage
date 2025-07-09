"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animatedElements = entry.target.querySelectorAll('.testimonial-card')
                        animatedElements.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fade-in')
                            }, index * 200)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [])

    const testimonialsData = [
        {
            name: "David Martinez",
            position: "CTO, TechFlow Solutions",
            company: "TechFlow Solutions",
            content: "Sybotstack transformed our entire IT infrastructure. Their cloud migration expertise saved us 40% in operational costs while improving our system reliability. The team's professionalism and technical knowledge are outstanding.",
            rating: 5,
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
            name: "Sarah Williams",
            position: "Operations Director",
            company: "Global Retail Corp",
            content: "Working with Sybotstack has been a game-changer for our business. Their cybersecurity solutions protected us from multiple threats, and their 24/7 support team is always there when we need them.",
            rating: 5,
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
            name: "Michael Chen",
            position: "Founder & CEO",
            company: "InnovateTech",
            content: "The IT consulting services from Sybotstack helped us scale our operations efficiently. Their strategic approach and deep industry knowledge made all the difference in our digital transformation journey.",
            rating: 5,
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
            />
        ));
    };

    return (
        <div className="bg-[#0C182A] py-24">
            <Container>
                <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
                    <h3 className='text-white text-4xl font-bold mb-4'>What Our Clients Say</h3>
                    <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>
                        Don{`'`}t just take our word for it. Here{`'`}s what our clients have to say about their experience working with us.
                    </p>
                </div>
                
                <div ref={containerRef} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className='testimonial-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 group bg-[#051023] rounded-lg p-8  hover:border-blue-500/50'
                        >
                            <div className='flex flex-col h-full'>
                                {/* Quote Icon */}
                                <div className='mb-6'>
                                    <Quote className='text-blue-400 w-8 h-8' />
                                </div>
                                
                                {/* Rating */}
                                <div className='flex mb-4'>
                                    {renderStars(testimonial.rating)}
                                </div>
                                
                                {/* Content */}
                                <p className='text-gray-300 text-sm leading-relaxed mb-6 flex-grow'>
                                    {testimonial.content}
                                </p>
                                
                                {/* Author */}
                                <div className='flex items-center space-x-4'>
                                    <div className='w-12 h-12 bg-[#121837] rounded-full flex items-center justify-center'>
                                        <span className='text-white font-semibold text-sm'>
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className='text-white font-semibold text-sm'>
                                            {testimonial.name}
                                        </h4>
                                        <p className='text-gray-400 text-xs'>
                                            {testimonial.position}
                                        </p>
                                        <p className='text-blue-400 text-xs'>
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action */}
                <div className='text-center mt-16'>
                    <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in'>
                        <h4 className='text-white text-2xl font-bold mb-4'>
                            Ready to Join Our Success Stories?
                        </h4>
                        <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
                            Let{`'`}s discuss how we can help transform your business with our innovative IT solutions.
                        </p>
                        <button className='bg-[#121837] hover:bg-[#051023] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 hover:scale-105 transform'>
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials 