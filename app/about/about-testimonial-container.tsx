'use client'
import { Button } from '@heroui/button'
import React, { useState, useEffect } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

import { Card, CardBody, CardFooter, Divider } from '@heroui/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { poetsen } from '../index/herosection/herosection'

const testimonials = [
    {
        quote: 'Infinitech Advertising Corporation exceeded our expectations! They delivered a beautifully designed website that not only looks great but also performs exceptionally well. Highly recommended!',
        name: 'John Doe',
        position: 'CEO, ABC Company',
    },
    {
        quote: 'The team at Infinitech Advertising Corporation was incredibly professional and responsive. Our system is now more efficient and easier to use. We couldn\'t be happier!',
        name: 'Jane Smith',
        position: 'CTO, XYZ Solutions',
    },
    {
        quote: 'Working with Infinitech Advertising Corporation was a game-changer for our business. They understood our needs and delivered beyond what we imagined.',
        name: 'Michael Johnson',
        position: 'Founder, LMN Startup',
    },

    {
        quote: 'Working with Infinitech Advertising Corporation was a game-changer for our business. They understood our needs and delivered beyond what we imagined.',
        name: 'Michael Johnson',
        position: 'Founder, LMN Startup',
    },
]

const AboutTestimonialContainer = () => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 1,
            spacing: 15,
        }
    })

    return (
        <div>
            {/* Header and Navigation */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="max-w-lg">
                    <span className="uppercase text-lg text-accent font-bold">TESTIMONIALS</span>
                    <h1
                        className={`text-4xl md:text-4xl text-primary ${poetsen.className}`}
                    >
                        We help to achieve customers business goals
                    </h1>
                </div>
            </div>

            {/* Testimonials */}
        
            <div ref={sliderRef} className="keen-slider mt-12 max-w-2xl">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="keen-slider__slide flex justify-center">
                        <Card className="bg-transparent shadow-none flex flex-col justify-between py-4">
                            <CardBody className="flex-1  py-4">
                                <p className="text-lg leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </CardBody>

                            <CardFooter className="px-6 pb-4">
                                <div className='w-full'>
                                    <Divider className="my-4" />
                                    <h4 className="font-semibold text-gray-900 uppercase text-2xl">
                                        {testimonial.name}
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                        {testimonial.position}
                                    </span>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <Button
                    size="lg"
                    variant="bordered"
                    className="rounded-full border-2 border-gray-400"
                    isIconOnly
                    onPress={() => instanceRef.current?.prev()}
                >
                    <LuChevronLeft size={18} />
                </Button>
                <Button
                    size="lg"
                    variant="bordered"
                    className="rounded-full border-2 border-gray-400"
                    isIconOnly
                    onPress={() => instanceRef.current?.next()}
                >
                    <LuChevronRight size={18} />
                </Button>
            </div>
        </div>
    )
}

export default AboutTestimonialContainer
