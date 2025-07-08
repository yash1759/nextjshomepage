"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import { MessageCircle, RefreshCw, Sparkle, User } from 'lucide-react'

const Growth = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const cards = containerRef.current?.querySelectorAll('.growth-card')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const data = [
        {
          "title": "Managed IT services",
          "description": "Ongoing system monitoring, maintenance, and support for reliable business performance.",
          icon:<RefreshCw />
        },
        {
          "title": "Cloud integration",
          "description": "Efficient cloud migration and management for flexible, scalable operations.",
          icon:<User  />
        },
        {
          "title": "Cybersecurity solutions",
          "description": "Robust protection with advanced security tools and expert oversight.",
          icon:<Sparkle /> 
        },
        {
          "title": "IT consulting",
          "description": "Strategic guidance to align technology with your business goals.",
          icon:<MessageCircle />    
        }
      ]
      
    return (
        <div className="bg-[#051023] perspective-1000 shadow-blue-900/60 shadow-[0_0_60px_10px_rgba(0,176,255,0.35)] transition-shadow duration-500 py-24">
            <Container>
                <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in'>
                    <h3 className='text-white text-4xl font-bold'>IT solutions for business growth</h3>
                    <p className='text-gray-600 text-lg mt-4'>Explore essential IT services to optimize operations, secure your data, and drive business efficiency.</p>
                </div>
                <div ref={containerRef} className='grid md:grid-cols-4 grid-cols-1 gap-4 mt-16'>
                    {data.map((item, index) => (
                        <div 
                            key={index} 
                            className='cursor-pointer growth-card bg-[#0C182A] rounded-lg p-8 opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-[#0f1f3a] group'
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className='flex items-center justify-start'>
                                <div className='text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12'>
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className='text-2xl font-base mt-8 text-white group-hover:text-blue-300 transition-colors duration-300'>{item.title}</h3>
                            <p className='text-gray-600 text-md mt-4 group-hover:text-gray-300 transition-colors duration-300'>{item.description}</p>
                            <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                                <div className='w-8 h-1 bg-blue-500 rounded-full'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Growth