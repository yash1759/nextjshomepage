// components/NavBar.jsx
"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed ${isScrolled ? 'top-0' : 'top-4'} left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-5'}`}>
            <div className="mx-auto py-2 flex h-16 max-w-screen-xl items-center justify-between px-4">
                {/* Logo / Brand */}
                <div className="flex items-center">
                    <div className={`relative transition-all duration-300 ${isScrolled ? 'h-20 w-20' : 'h-30 w-30'}`}>
                        <Link href="/">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Tribeca Date Club Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden items-center space-x-6 text-sm font-light text-white lg:flex">
                    {["HOME", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
                        <Link href="#" className="hover:text-gray-300 transition-colors">{item}</Link>
                    ))}
                </nav>

                {/* Desktop "JOIN THE WAITLIST" Button */}
                <div className="hidden lg:block">
                    <Link
                        href="mailto:info@tribecadate.com"
                        className="bg-white px-6 py-4 text-xs tracking-wide font-light text-black transition-colors duration-200 hover:bg-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        HIRE US
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="text-white lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="absolute inset-0 bg-black/95">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex h-full items-center justify-center">
                        <ul className="space-y-8 text-center">
                            {/* <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl font-light text-white hover:text-gray-300">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl font-light text-white hover:text-gray-300">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl font-light text-white hover:text-gray-300">
                  TESTIMONIALS
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl font-light text-white hover:text-gray-300">
                  MEMBERSHIP
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl font-light text-white hover:text-gray-300">
                  CELEBRITY SERVICES
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl font-light text-white hover:text-gray-300">
                  EVENTS
                </Link>
              </li> */}
                            <li>
                                <Link
                                    href="mailto:info@tribecadate.com"
                                    className="mt-8 inline-block rounded-none bg-white px-8 py-4 text-sm font-light text-black transition hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    JOIN THE WAITLIST
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
