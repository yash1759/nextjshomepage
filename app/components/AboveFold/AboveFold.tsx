import React from "react";
import Image from "next/image";

const AboveFold: React.FC = () => {
    return (
        <div className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/abovefold.jpg" 
                    alt="Sybotstack Background" 
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
            </div>
            
            {/* Centered Content Overlay */}
            <div className="relative mt-20 z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
                <div className="text-center text-white text-5xl font-bold animate-slide-in-left">
                    <h1 className="leading-tight animate-text-glow drop-shadow-2xl"> 
                        <span className="inline-block animate-fade-in-delay-1 hover:scale-110 transition-transform duration-300 hover:text-red-300">Crafting</span>{" "}
                        <span className="inline-block animate-fade-in-delay-2 hover:scale-110 transition-transform duration-300 hover:text-red-300">Future-Ready</span>{" "}
                        <span className="inline-block animate-fade-in-delay-3 hover:scale-110 transition-transform duration-300 hover:text-red-300">Digital</span>{" "}
                        <span className="inline-block animate-fade-in-delay-4 hover:scale-110 transition-transform duration-300 hover:text-red-300">Experiences</span>
                    </h1>
                </div>
                <div className="text-center mt-8 text-white text-2xl animate-slide-in-right">
                    <p className="leading-relaxed animate-typewriter drop-shadow-xl">
                        <span className="inline-block animate-fade-in-delay-5 hover:text-red-200 transition-colors duration-300">At Sybotstack, we{`'`}re a full-spectrum digital product studio</span>{" "}
                        <span className="inline-block animate-fade-in-delay-6 hover:text-red-200 transition-colors duration-300">on a mission to turn bold ideas into market-ready</span>{" "}
                        <span className="inline-block animate-fade-in-delay-7 hover:text-red-200 transition-colors duration-300">web and mobile solutions. We blend product strategy,</span>{" "}
                        <span className="inline-block animate-fade-in-delay-8 hover:text-red-200 transition-colors duration-300">intuitive design, and robust development to help</span>{" "}
                        <span className="inline-block animate-fade-in-delay-9 hover:text-red-200 transition-colors duration-300">startups, nonprofits, and enterprises build experiences</span>{" "}
                        <span className="inline-block animate-fade-in-delay-10 hover:text-red-200 transition-colors duration-300">that resonate and scale.</span>
                    </p>
                </div>
                
                {/* Animated CTA Button */}
                <div className="mt-12 animate-fade-in-delay-11">
                    <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 animate-pulse">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboveFold;
