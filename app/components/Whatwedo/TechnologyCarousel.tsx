"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const TechnologyCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const technologies = [
        // Frontend Frameworks
        { name: "React.js", icon: "⚛️", category: "Frontend", description: "Modern UI development" },
        { name: "Next.js", icon: "⚡", category: "Full-Stack", description: "React framework for production" },
        { name: "Angular", icon: "🅰️", category: "Frontend", description: "Enterprise-grade framework" },
        { name: "Vue.js", icon: "💚", category: "Frontend", description: "Progressive JavaScript framework" },
        
        // Backend Technologies
        { name: "Node.js", icon: "🟢", category: "Backend", description: "Server-side JavaScript" },
        { name: "Express.js", icon: "🚂", category: "Backend", description: "Fast web framework" },
        { name: "Python", icon: "🐍", category: "Backend", description: "Versatile programming language" },
        { name: "Django", icon: "🎸", category: "Backend", description: "High-level Python framework" },
        
        // Cloud & DevOps
        { name: "AWS", icon: "☁️", category: "Cloud", description: "Amazon Web Services" },
        { name: "Azure", icon: "🔷", category: "Cloud", description: "Microsoft cloud platform" },
        { name: "Google Cloud", icon: "🔵", category: "Cloud", description: "Google cloud services" },
        { name: "Docker", icon: "🐳", category: "DevOps", description: "Containerization platform" },
        
        // Databases
        { name: "MongoDB", icon: "🍃", category: "Database", description: "NoSQL database" },
        { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Advanced open source database" },
        { name: "MySQL", icon: "🐬", category: "Database", description: "Reliable database system" },
        { name: "Redis", icon: "🔴", category: "Database", description: "In-memory data store" },
        
        // UI Frameworks
        { name: "Tailwind CSS", icon: "🎨", category: "Styling", description: "Utility-first CSS framework" },
        { name: "Bootstrap", icon: "📦", category: "Styling", description: "Popular CSS framework" },
        { name: "Material-UI", icon: "🎭", category: "Styling", description: "React UI framework" },
        { name: "Ant Design", icon: "🐜", category: "Styling", description: "Enterprise UI design" },
        
        // Testing & Tools
        { name: "Jest", icon: "🃏", category: "Testing", description: "JavaScript testing framework" },
        { name: "Cypress", icon: "🌲", category: "Testing", description: "End-to-end testing" },
        { name: "Git", icon: "📝", category: "Version Control", description: "Distributed version control" },
        { name: "GitHub", icon: "🐙", category: "Version Control", description: "Code collaboration platform" }
    ]

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

        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="bg-[#0C182A] py-24">
            <Container>
                <div ref={containerRef} className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
                    <h3 className='text-white text-4xl font-bold mb-4'>Technologies We Master</h3>
                    <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>
                        We work with cutting-edge technologies and frameworks to deliver modern, scalable solutions for your business.
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        loop={true}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="technology-swiper"
                    >
                        {technologies.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#051023] p-6 rounded-lg hover:bg-[#121837] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group hover:border-blue-500/50 h-full">
                                    <div className="text-center">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {tech.icon}
                                        </div>
                                        <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                            {tech.name}
                                        </h4>
                                        <p className="text-blue-400 text-xs mb-2 font-medium">
                                            {tech.category}
                                        </p>
                                        <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                                            {tech.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                </div>

                {/* Technology Categories */}
                <div className="mt-16 text-center">
                    <div className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in">
                        <h4 className="text-white text-2xl font-bold mb-6">Our Expertise Areas</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Frontend', 'Backend', 'Cloud', 'Database', 'Styling', 'Testing', 'DevOps'].map((category) => (
                                <span
                                    key={category}
                                    className="bg-[#121837] text-blue-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#051023] transition-colors duration-200"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

           
        </div>
    )
}

export default TechnologyCarousel 