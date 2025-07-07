import React from "react";
import Image from "next/image";

const AboveFold: React.FC = () => {
    return (
        <div className="py-10 grid grid-cols-2 gap-5 items-center">
            <div className="animate-fade-in-up">
                <div className="text-center mt-5 text-primary-color text-5xl font-bold animate-slide-in-left">
                    <h1 className="leading-tight animate-text-glow"> 
                        <span className="inline-block animate-fade-in-delay-1">Crafting</span>{" "}
                        <span className="inline-block animate-fade-in-delay-2">Future-Ready</span>{" "}
                        <span className="inline-block animate-fade-in-delay-3">Digital</span>{" "}
                        <span className="inline-block animate-fade-in-delay-4">Experiences</span>
                    </h1>
                </div>
                <div className="text-center mt-5 text-primary-color text-2xl animate-slide-in-right">
                    <p className="leading-relaxed animate-typewriter">
                        At Sybotstack, we're a full-spectrum digital product studio on a mission to turn bold ideas into market-ready web and mobile solutions. We blend product strategy, intuitive design, and robust development to help startups, nonprofits, and enterprises build experiences that resonate and scale.
                    </p>
                </div>
            </div>
            <div className="relative group perspective-1000">
                <div className="transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-110 group-hover:translate-z-20 hover:shadow-2xl hover:shadow-red-500/30">
                    <Image 
                        src="/images/abovefold.jpg" 
                        alt="Sybotstack" 
                        width={600} 
                        height={600}
                        className="rounded-2xl border-2 border-red-500/20 shadow-2xl shadow-red-500/20 backdrop-blur-sm filter brightness-110 contrast-125 saturate-110 hover:brightness-125 hover:contrast-150 hover:saturate-125 transition-all duration-500 transform-gpu hover:scale-105 hover:rotate-1"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
            </div>
        </div>
    );
};

export default AboveFold;
