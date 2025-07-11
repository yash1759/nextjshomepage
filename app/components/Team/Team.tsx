"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import Image from 'next/image'

const Team = () => {
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

        const cards = containerRef.current?.querySelectorAll('.team-member')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const teamData = [
        {
            title: "John Doe",
            position: "System Administrator",
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
            title: "Jane Doe",
            position: "Cloud Engineer",
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
            title: "John Smith",
            position: "Security Specialist",
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
            title: "Jane Smith",
            position: "IT Strategy Consultant",
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
        {
            title: "Alex Johnson",
            position: "DevOps Engineer",
            image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        }
    ];

    return (
        <>
            
            {/* Team Members Section */}
            <div className="bg-[#051023] py-24">
                <Container>
                    <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
                        <h3 className='text-white text-4xl font-bold mb-4'>Our Expert Team</h3>
                        <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>
                            Meet our dedicated professionals who bring expertise and innovation to every project we undertake.
                        </p>
                    </div>
                    <div ref={containerRef} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                        {teamData.map((item, index) => (
                            <div
                                key={index}
                                className='team-member opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 group'
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className='flex flex-col items-center text-center'>
                                    <div className='relative w-28 md:w-32 h-28 md:h-32 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300'>
                                        <Image src={item.image} alt={item.title} fill className='object-cover' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2'>{item.title}</h3>
                                    <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300'>{item.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Team