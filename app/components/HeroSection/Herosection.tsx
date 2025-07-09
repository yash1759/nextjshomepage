"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'

const Herosection = () => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const descriptionRef = useRef<HTMLParagraphElement>(null)

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

        if (titleRef.current) observer.observe(titleRef.current)
        if (descriptionRef.current) observer.observe(descriptionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#051023] to-[#0C182A]"></div>
            <Container>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 
                        ref={titleRef}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                    >
                        About <span className="text-blue-400">Sybotstack</span>
                    </h1>
                    <p 
                        ref={descriptionRef}
                        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
                        style={{ transitionDelay: '200ms' }}
                    >
                        We{`'`}re a full-spectrum digital product studio dedicated to transforming businesses through innovative technology solutions.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Herosection