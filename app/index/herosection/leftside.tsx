'use client'
import { Button } from '@heroui/button'
import React from 'react'
import { LuArrowRight, LuCalendar, LuDot } from 'react-icons/lu'
import { Chip } from '@heroui/react'
import { GoDotFill } from "react-icons/go";
import { poetsen } from '../herosection/herosection'

const LeftSide = () => {
    return (
        <div className="space-y-6">
            <Chip className='hidden md:flex' startContent={<GoDotFill/>} variant='bordered' color='warning'>More than 100 active projects, driving innovation and delivering excellence!</Chip>
            <h1
                className={`text-accent text-5xl sm:text-7xl uppercase font-bold leading-tight ${poetsen.className}`}
            >
                High Quality, <br /> Lower Price
            </h1>
            <p className="md:text-lg text-gray-400 leading-relaxed">
                At <strong>Infinitech Advertising Corporation</strong>, we deliver
                high-quality, innovative solutions that enhance your brand while
                staying within your budget. From web development to system solutions,
                we help your business stand out.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                <Button
                    size='lg'
                    variant="solid"
                    className="bg-accent text-gray-100 font-medium hover:bg-primary-dark transition"
                    endContent={<LuArrowRight size={18} />}
                >
                    Explore More
                </Button>
                <Button
                    size='lg'
                    variant="bordered"
                    className="border-2 border-gray-400 text-gray-400 hover:bg-primary hover:text-white transition"
                    endContent={<LuCalendar size={18} />}
                >
                    Schedule Appointment
                </Button>
            </div>


        </div>
    )
}

export default LeftSide
