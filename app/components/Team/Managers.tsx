"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import Image from 'next/image'
import { Linkedin, Mail, Globe } from 'lucide-react'

const Managers = () => {
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

        const cards = containerRef.current?.querySelectorAll('.manager-card')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])
    const managersData = [
        {
          name: "Yash Kumar",
          position: "Chief Executive Officer",
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif",
          bio: "Yash is a seasoned full-stack developer and business leader with 15+ years of experience in scaling tech ventures and leading digital strategy.",
          linkedin: "https://linkedin.com/in/yash-kumar",
          email: "yash@sybotstack.com",
          website: "https://yashkumar.com"
        },
        {
          name: "Shubham Sharma",
          position: "Chief Technology Officer",
          image: "https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif",
          bio: "Shubham is a full-stack engineer and cloud expert who leads the company's technical vision, infrastructure, and product innovation.",
          linkedin: "https://linkedin.com/in/shubham-sharma",
          email: "shubham@sybotstack.com",
          website: "https://shubhamsharma.dev"
        }
      ];
      

    return (
        <div className="bg-[#0C182A] py-24">
            <Container>
                <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in text-center mb-16'>
                    <h3 className='text-white text-4xl font-bold mb-4'>Leadership Team</h3>
                    <p className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'>
                        Meet the visionary leaders who drive our mission to transform businesses through innovative technology solutions.
                    </p>
                </div>
                
                <div ref={containerRef} className='grid md:w-[70%] grid-cols-1 mx-auto md:grid-cols-2 justify-center lg:grid-cols-2 gap-8'>
                    {managersData.map((manager, index) => (
                        <div
                            key={index}
                            className='manager-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 group bg-[#051023] rounded-lg p-8 hover:border-blue-500/50'
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className='flex flex-col items-center text-center'>
                                {/* Profile Image */}
                                <div className='relative w-32 h-32 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300'>
                                    <Image 
                                        src={manager.image} 
                                        alt={manager.name} 
                                        fill 
                                        className='object-cover' 
                                    />
                                </div>
                                
                                {/* Name and Position */}
                                <h3 className='text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2'>
                                    {manager.name}
                                </h3>
                                <p className='text-blue-400 font-semibold text-lg mb-4'>
                                    {manager.position}
                                </p>
                                
                                {/* Bio */}
                                <p className='text-gray-300 text-sm leading-relaxed mb-6 md:min-h-[100px]'>
                                    {manager.bio}
                                </p>
                                
                                {/* Social Links */}
                                <div className='flex space-x-4'>
                                    <a 
                                        href={manager.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='p-2 bg-[#121837] rounded-lg hover:bg-blue-600 transition-colors duration-200 group-hover:scale-110'
                                    >
                                        <Linkedin className='text-white' size={20} />
                                    </a>
                                    <a 
                                        href={`mailto:${manager.email}`}
                                        className='p-2 bg-[#121837] rounded-lg hover:bg-blue-600 transition-colors duration-200 group-hover:scale-110'
                                    >
                                        <Mail className='text-white' size={20} />
                                    </a>
                                    <a 
                                        href={manager.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='p-2 bg-[#121837] rounded-lg hover:bg-blue-600 transition-colors duration-200 group-hover:scale-110'
                                    >
                                        <Globe className='text-white' size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Managers 