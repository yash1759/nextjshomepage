"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../container/Container'

const Howtowork = () => {
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

        const cards = containerRef.current?.querySelectorAll('.card-item')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const data = [
        {
            "title": "IT support you can trust",
            "description": "Expert helpdesk and monitoring to keep your business running efficiently, with quick response and proactive care.",
            "cta": "Learn more",
            image:"https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c97db86be20a94b58_5bb1c838-9af5-411f-ae14-e25201e40250.avif"
        },
        {
            "title": "Cloud solutions for business",
            "description": "Flexible, secure cloud platforms for collaboration, storage, and business continuity—tailored to your needs.",
            "cta": "Discover",
            image:"https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410b6291ac3647df85da_cef58cb8-a397-45b0-8a5c-8fb63e422a09.avif"
        },
        {
            "title": "Business-grade cybersecurity",
            "description": "Safeguard your data with threat detection, risk analysis, and ongoing security management for peace of mind.",
            "cta": "Protect",
            image:"https://cdn.prod.website-files.com/686d4049ce7f7422269655f3/686d410c75ab9a8ea2a6aef9_46badf08-742e-408e-99c5-1a34c082403c.avif"
        },
    ]

    return (
        <div className="pb-24">
            <Container>
                {/* Perfect heading here */}
                <div className="text-start md:pt-18 py-6 ">
                    <h2 className="text-4xl font-bold text-white mb-4">How Our IT Services Work for You</h2>
                    <p className="text-lg text-gray-500 max-w-2xl ">
                        Discover the core ways we empower your business with reliable IT support, secure cloud solutions, robust cybersecurity, and seamless network management.
                    </p>
                </div>
                <div ref={containerRef} className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    {data.map((item, index) => (
                        <div 
                            key={index} 
                            className='card-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl rounded-xl  flex flex-col bg-[#051023] w-full'
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className='flex-1 flex flex-col p-4'>
                                <div className='relative h-[181px]  mx-auto  w-full rounded-lg overflow-hidden mb-8 group'>
                                    <Image src={item.image} alt={item.title} fill className='object-cover transition-transform duration-500 group-hover:scale-110' />
                                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h1 className='text-2xl mb-6 font-semibold transition-colors duration-300 group-hover:text-blue-600'>{item.title}</h1>
                                <p className='text-md mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-800'>{item.description}</p>
                            </div>
                                <Link
                                    href="#"
                                    className="px-6 my-8 text-end py-2 text-gray-600 leading-0.5 underline"
                                >
                                    {item.cta}
                                </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Howtowork