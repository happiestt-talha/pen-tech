"use client"

import { generatePageMetadata, pageMetadata } from "../../lib/metadata"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const metadata = generatePageMetadata(pageMetadata.portfolio)

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#FEFFEA" }}>
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                {/* Dynamic Gradient Mesh */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(48, 60, 106, 0.15) 0%, transparent 50%)`,
                    }}
                />

                {/* Animated Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: "#303C6A" }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: mousePosition.x * 0.02,
                        y: mousePosition.y * 0.02,
                    }}
                    transition={{
                        scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        x: { type: "spring", stiffness: 50, damping: 30 },
                        y: { type: "spring", stiffness: 50, damping: 30 },
                    }}
                />

                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-25 blur-2xl"
                    style={{ backgroundColor: "#FCC600" }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: mousePosition.x * -0.015,
                        y: mousePosition.y * -0.015,
                    }}
                    transition={{
                        scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        x: { type: "spring", stiffness: 50, damping: 30 },
                        y: { type: "spring", stiffness: 50, damping: 30 },
                    }}
                />

                {/* Sophisticated Dot Matrix */}
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-20 gap-8 h-full w-full p-8">
                        {Array.from({ length: 200 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1 h-1 rounded-full"
                                style={{ backgroundColor: "#303C6A" }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 0.5, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    delay: i * 0.02,
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 2,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Elements - Only render on client  */}
                {isMounted && Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            backgroundColor: i % 2 === 0 ? "#FCC600" : "#303C6A",
                            width: Math.random() * 8 + 4,
                            height: Math.random() * 8 + 4,
                        }}
                        initial={{
                            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, -30, 30, -15],
                            opacity: [0, 0.4, 0.2, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 3,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Geometric Lines */}
                {/* <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px opacity-20"
                            style={{
                                backgroundColor: "#303C6A",
                                width: "100%",
                                top: `${20 + i * 15}%`,
                                left: 0,
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div> */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                {/* Decorative Corner Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 opacity-30"
                        style={{ borderColor: "#303C6A" }}
                    />
                    <div
                        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 opacity-30"
                        style={{ borderColor: "#FCC600" }}
                    />
                    <div
                        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 opacity-30"
                        style={{ borderColor: "#FCC600" }}
                    />
                    <div
                        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 opacity-30"
                        style={{ borderColor: "#303C6A" }}
                    />
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto text-center">
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center px-6 py-3 rounded-full border-2 mb-8 backdrop-blur-sm"
                        style={{
                            backgroundColor: "rgba(252, 198, 0, 0.1)",
                            borderColor: "#FCC600",
                            color: "#303C6A",
                        }}
                    >
                        <motion.div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: "#FCC600" }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <span className="text-sm font-semibold tracking-wide uppercase">Premium IT Solutions</span>
                    </motion.div>

                    {/* Hero Heading with Enhanced Animation */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight"
                        style={{ color: "#303C6A" }}
                    >
                        {`Elevate Your Digital Presence`.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="inline-block mr-6"
                                whileHover={{
                                    scale: 1.05,
                                    color: "#FCC600",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Enhanced Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                        style={{ color: "#303C6A" }}
                    >
                        Transform your vision into reality with our cutting-edge AI-powered solutions.
                        <motion.span
                            className="font-semibold"
                            style={{ color: "#FCC600" }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                            {" "}
                            Launch in hours, not months.
                        </motion.span>
                    </motion.p>

                    {/* Enhanced CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                boxShadow: "0 20px 40px rgba(48, 60, 106, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 overflow-hidden min-w-[200px]"
                            style={{ backgroundColor: "#303C6A", color: "#FEFFEA" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{ backgroundColor: "#FCC600" }}
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                Get Started Now
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                backgroundColor: "#FCC600",
                                color: "#303C6A",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 rounded-2xl font-bold text-xl border-3 transition-all duration-500 overflow-hidden min-w-[200px]"
                            style={{
                                borderColor: "#FCC600",
                                color: "#303C6A",
                                backgroundColor: "transparent",
                                borderWidth: "3px",
                            }}
                        >
                            <div
                                className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                style={{ backgroundColor: "#FCC600" }}
                            />
                            <span className="relative z-10 transition-colors duration-500">View Portfolio</span>
                        </motion.button>
                    </motion.div>

                </div>
            </div>

            {/* Enhanced Bottom Gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{
                    background: `linear-gradient(to top, rgba(48, 60, 106, 0.1) 0%, transparent 100%)`,
                }}
            />
        </div>
    )
}
