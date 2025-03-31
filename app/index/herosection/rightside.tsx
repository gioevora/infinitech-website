'use client'
import { Image } from '@heroui/react'
import React from 'react'
import { motion } from "framer-motion";



const RightSide = () => {
    return (
        <div className="hidden relative md:flex justify-center items-center">
            <Image
                alt="HeroUI hero Image"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={500}
                height={500}
                className="rounded-full border-[24px] border-l-accent border-t-accent-light border-b-primary border-r-primary-light"
            />
            <motion.div
                className="absolute top-0 right-16 z-10"
                animate={{
                    y: [0, -20, 0], // Moves up and down
                }}
                transition={{
                    duration: 3, // 3 seconds for slow bounce
                    repeat: Infinity, // Infinite bounce
                    ease: "easeInOut", // Smooth bounce
                }}
            >
                <Image
                    alt="HeroUI hero Image"
                    src="/img/seo.png"
                    width={120}
                    height={120}
                />
            </motion.div>

            {/* Portfolio Icon - Bottom Left */}
            <motion.div
                className="absolute bottom-0 left-24 z-10"
                animate={{
                    y: [0, -30, 0], // Slightly higher bounce
                }}
                transition={{
                    duration: 4, // 4 seconds for slower bounce
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Image
                    alt="HeroUI hero Image"
                    src="/img/portfolio.png"
                    width={120}
                    height={120}
                />
            </motion.div>

            {/* Responsive Design Icon - Top Left */}
            <motion.div
                className="absolute top-24 left-5 z-10"
                animate={{
                    y: [0, -25, 0], // Moderate bounce
                }}
                transition={{
                    duration: 3.5, // Slightly faster bounce
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Image
                    alt="HeroUI hero Image"
                    src="/img/responsive-design.png"
                    width={150}
                    height={150}
                />
            </motion.div>

            {/* Web Development Icon - Bottom Right */}
            <motion.div
                className="absolute bottom-24 right-24 z-10"
                animate={{
                    y: [0, -20, 0], // Smaller bounce
                }}
                transition={{
                    duration: 5, // Longest duration for slow-motion
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Image
                    alt="HeroUI hero Image"
                    src="/img/web-development.png"
                    width={120}
                    height={120}
                />
            </motion.div>

        </div>
    )
}

export default RightSide
