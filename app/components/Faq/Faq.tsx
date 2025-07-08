"use client"
import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import { MessageCircle, RefreshCw, Sparkle, User, ChevronDown } from 'lucide-react'

const Faq = () => {
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

        const cards = containerRef.current?.querySelectorAll('.faq-item')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const data = [
        {
            "question": "Which IT services are available?",
            "answer": "We offer managed IT support, cloud services, cybersecurity, and consulting for businesses. Our team keeps your systems secure and efficient."
        },
        {
            "question": "How fast is your support?",
            "answer": "Most requests are answered within one business day. Urgent issues receive priority to reduce downtime."
        },
        {
            "question": "Is the onboarding process easy?",
            "answer": "Onboarding is straightforward. We guide you through setup and ensure a smooth transition with minimal disruption."
        },
        {
            "question": "Can I get a custom solution?",
            "answer": "We customize IT services to your needs, including ongoing support, project work, and specialized consulting."
        }
    ]


    return (
        <div className="bg-[#0C182A] perspective-1000 transition-shadow duration-500 py-24">
            <Container>
                <div className='opacity-0 transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in'>
                    <p className='text-gray-600 text-lg mb-4 capitalize'>FAQ & support</p>
                    <h3 className='text-white text-4xl font-bold'>Your IT questions, answered</h3>
                    <p className='text-gray-600 text-lg mt-4'>Get clear, direct answers to common IT support and service questions.</p>
                </div>
                <div ref={containerRef} className='grid grid-cols-1 gap-8 mt-16'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='faq-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out hover:bg-[#0f1f3a] hover:shadow-lg hover:shadow-blue-500/10 rounded-lg p-6 group cursor-pointer'
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className='border-b border-blue-700/40 py-4 flex flex-col md:flex-row justify-between md:items-center gap-4'>
                                <div className='flex items-center justify-between w-full'>
                                    <h3 className='text-xl md:text-2xl text-white mb-2 md:mb-0 md:w-2/3 group-hover:text-blue-300 transition-colors duration-300'>{item.question}</h3>
                                </div>
                                <p className='text-gray-300 flex justify-end text-lg tracking-wide md:w-2/2 group-hover:text-white transition-colors duration-300'>{item.answer}</p>
                            </div>
                            <div className='mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                                <div className='w-16 h-0.5 bg-blue-500 rounded-full'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Faq