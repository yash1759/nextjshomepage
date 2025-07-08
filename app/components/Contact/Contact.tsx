"use client"
import React from 'react'
import Container from '../container/Container'
import { Mail, MessageCircle } from 'lucide-react'

const Contact = () => {

    return (
        <div className="bg-[#051023] perspective-1000 transition-shadow duration-500 py-24">
            <Container>
                <div className='opacity-0 text-center transform translate-y-8 transition-all duration-1000 ease-out animate-fade-in'>
                    <p className='text-gray-600 text-lg mb-4 capitalize'>Contact</p>
                    <h3 className='text-white text-4xl font-bold'>Get in touch today</h3>
                    <p className='text-gray-600 text-lg mt-4'>We{`'`}re here to assist your business.</p>
                </div>
                <div className='flex text-center items-center justify-between gap-4 mt-16 md:w-[50%] mx-auto'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center gap-4 p-4 bg-[#121837] rounded-md w-16 h-16'>
                            <Mail className='text-[#9065EF]' size={40} />
                        </div>

                        <p className='text-white text-sm mt-4'>Email</p>
                        <p className='text-white text-sm mt-2'>info@example.com</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center gap-4 p-4 bg-[#121837] rounded-md w-16 h-16'>
                            <MessageCircle className='text-[#9065EF]' size={40} />
                        </div>

                        <p className='text-white text-sm mt-4'>Phone</p>
                        <p className='text-white text-sm mt-2'>{`+1 (555) 000-0000`}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact