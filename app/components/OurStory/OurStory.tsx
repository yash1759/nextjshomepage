import React from 'react'
import Container from '../container/Container'

const OurStory = () => {
    return (
        <div className="py-20 bg-[#051023]">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Founded with a vision to bridge the gap between complex technology and business success, Sybotstack has evolved into a trusted partner for organizations seeking digital transformation.
                        </p>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Our journey began with a simple belief: that technology should work for your business, not against it. Today, we help companies of all sizes leverage cutting-edge solutions to achieve their goals.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            From startups to enterprise organizations, we've built a reputation for delivering reliable, scalable, and innovative IT solutions that drive real business impact.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚀</div>
                                <p className="text-white text-lg">Innovation at Work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default OurStory