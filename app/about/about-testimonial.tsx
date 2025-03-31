'use client'
import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Image from 'next/image'
import { Card, CardBody } from '@heroui/react'
import AboutTestimonialContainer from './about-testimonial-container'

// Define types for review data
type Review = {
    id: number
    platform: string
    logo: string
    rating: number
    reviewCount: string
    stars: number
    starColor: string
}

// Testimonial Data
const reviews: Review[] = [
    {
        id: 1,
        platform: 'Trustpilot',
        logo: '/img/trust-pilot-logo.png', // Path to Trustpilot logo
        rating: 4.5,
        reviewCount: '7584+ Reviews',
        stars: 5,
        starColor: 'text-green-500',
    },
    {
        id: 2,
        platform: 'Clutch',
        logo: '/img/clutch-logo.png', // Path to Clutch logo
        rating: 5,
        reviewCount: '1500+ Reviews',
        stars: 5,
        starColor: 'text-red-500',
    },
]

// Define props for the star rendering function
const renderStars = (stars: number, color: string) => {
    return (
        <div className="flex items-center space-x-1">
            {[...Array(Math.floor(stars))].map((_, i) => (
                <BsStarFill key={i} className={`${color}`} />
            ))}
            {stars % 1 !== 0 && <BsStarHalf className={`${color}`} />}
        </div>
    )
}

const AboutTestimonial: React.FC = () => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
                <AboutTestimonialContainer />
            </div>
            <div className='flex justify-center items-center'>
                <Card className='bg-gray-100 shadow-none w-full max-w-lg'>
                    <CardBody>
                        <div className='py-24 px-12'>
                            {reviews.map((review) => (
                                <div key={review.id} className="flex items-center justify-around mb-12 last:mb-0">
                                    <div className="flex items-center space-x-2">
                                        <Image src={review.logo} alt={review.platform} width={24} height={24} />
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-600">Review On</span>
                                            <span className="text-lg font-semibold">{review.platform}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        {renderStars(review.stars, review.starColor)}
                                        <span className="text-sm text-gray-500">{review.reviewCount}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </CardBody>
                </Card>


            </div>
        </div>

    )
}

export default AboutTestimonial
