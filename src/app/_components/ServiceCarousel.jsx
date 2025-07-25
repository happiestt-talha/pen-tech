"use client"
import { generatePageMetadata, pageMetadata } from "../../lib/metadata"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

export const metadata = generatePageMetadata(pageMetadata.services)
export default function ServiceCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const carouselItems = [
        {
            id: 1,
            title: "Web Development Excellence",
            description:
                "Create stunning, responsive websites that captivate your audience and drive business growth with our cutting-edge development solutions.",
            ctaText: "Start Your Project",
            backgroundImage: "/images/web-dev.webp",
        },
        {
            id: 2,
            title: "Mobile App Innovation",
            description:
                "Transform your ideas into powerful mobile applications that engage users across iOS and Android platforms with seamless performance.",
            ctaText: "Build Your App",
            backgroundImage: "/images/app-development.webp",
        },
        {
            id: 3,
            title: "Cloud Solutions Mastery",
            description:
                "Leverage the power of cloud computing to scale your business operations, reduce costs, and enhance security with our expert solutions.",
            ctaText: "Go Cloud",
            backgroundImage: "/images/cloud.webp",
        },
        {
            id: 4,
            title: "Digital Transformation",
            description:
                "Revolutionize your business processes with comprehensive digital transformation strategies that drive efficiency and innovation.",
            ctaText: "Transform Now",
            backgroundImage: "/images/digital.webp",
        },
        {
            id: 5,
            title: "Cybersecurity Excellence",
            description:
                "Protect your digital assets and ensure compliance with industry standards.",
            ctaText: "Transform Now",
            backgroundImage: "/images/cybersecurity.webp",
        },
        {
            id: 6,
            title: "Data Analytics Excellence",
            description:
                "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
            ctaText: "Transform Now",
            backgroundImage: "/images/data-analytics.webp",
        },
        {
            id: 7,
            title: "Technical Support Excellence",
            description:
                "24/7 technical support and maintenance services to ensure your systems run smoothly and efficiently.",
            ctaText: "Transform Now",
            backgroundImage: "/images/technical-support.webp",
        },
    ]

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, [carouselItems.length])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
    }, [carouselItems.length])

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index)
    }, [])

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [nextSlide, isAutoPlaying])

    const currentItem = carouselItems[currentIndex]

    return (
        <section
            id="services"
            className="relative h-screen overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={currentItem.backgroundImage || "/placeholder.svg"}
                            alt={currentItem.title}
                            fill
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                {/* Slide Number Indicator */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-secondary/30"
                                >
                                    <span className="text-tertiary font-medium text-sm">
                                        {String(currentIndex + 1).padStart(2, "0")} / {String(carouselItems.length).padStart(2, "0")}
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-tertiary mb-6 leading-tight"
                                >
                                    {currentItem.title.split(" ").map((word, index) => (
                                        <span key={index} className="inline-block mr-4">
                                            {word === "Excellence" ||
                                                word === "Innovation" ||
                                                word === "Mastery" ||
                                                word === "Transformation" ? (
                                                <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                                                    {word}
                                                </span>
                                            ) : (
                                                word
                                            )}
                                        </span>
                                    ))}
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="text-lg md:text-xl text-tertiary/90 max-w-3xl mx-auto leading-relaxed mb-12"
                                >
                                    {currentItem.description}
                                </motion.p>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <button className="group relative px-8 py-4 bg-secondary hover:bg-secondary/90 rounded-2xl font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {currentItem.ctaText}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-white/20 hover:border-secondary/50 z-20"
            >
                <ChevronLeft className="w-6 h-6 text-tertiary group-hover:text-secondary transition-colors duration-300" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-white/20 hover:border-secondary/50 z-20"
            >
                <ChevronRight className="w-6 h-6 text-tertiary group-hover:text-secondary transition-colors duration-300" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative w-12 h-1 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-secondary scale-125" : "bg-white/30 hover:bg-white/50"
                            }`}
                    >
                        {index === currentIndex && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 6, ease: "linear" }}
                                className="absolute top-0 left-0 h-full bg-secondary rounded-full"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
                <motion.div
                    key={currentIndex}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-secondary to-secondary/80"
                />
            </div>

            {/* Side Navigation Dots */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-secondary scale-150 shadow-lg"
                            : "bg-white/30 hover:bg-white/50 hover:scale-125"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
