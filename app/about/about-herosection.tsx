'use client'
import { Image } from '@heroui/react'
import React from 'react'
import { poetsen } from '../index/herosection/herosection'
import { LuBriefcaseBusiness, LuWorkflow } from 'react-icons/lu'

const AboutHeroSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center py-12'>
            <div className='max-w-xl'>
                <span className='uppercase font-bold text-primary text-lg'>About Infinitech</span>
                <div className='space-y-6'>
                    <h1 className={`text-3xl md:text-5xl text-primary ${poetsen.className}`}>
                        We believe in delivering high-quality solutions to help you grow your business effectively.
                    </h1>
                    <p className='text-lg text-gray-700'>
                        At Infinitech Advertising Corporation, we deliver high-quality, innovative solutions that enhance your brand while staying within your budget. From web development to system solutions, we help your business stand out.
                    </p>
                </div>
                <div className='flex justify-around items-center mt-8'>
                    <div className="flex flex-col items-start space-y-2">
                        <div className="inline-flex items-center justify-center bg-blue-200 text-blue-900 p-4 rounded-full">
                            <LuBriefcaseBusiness size={32} />
                        </div>

                        <h1 className="text-3xl font-bold text-blue-900">1 year</h1>
                        <p className="text-gray-700 text-lg">Driving growth</p>
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                        <div className="inline-flex items-center justify-center bg-blue-200 text-blue-900 p-4 rounded-full">
                            <LuBriefcaseBusiness size={32} />
                        </div>

                        <h1 className="text-3xl font-bold text-blue-900">20+</h1>
                        <p className="text-gray-700 text-lg">Project complete successfully</p>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src='./img/infinitech-about.jpeg'
                    width={1000}
                    height={500}
                    className='object-cover overflow-hidden rounded-tr-[150px] rounded-bl-[150px] border-b-8 border-b-primary border-l-8 border-l-accent border-t-8 border-t-primary border-r-8 border-r-accent'
                />
            </div>

        </div>
    )
}

export default AboutHeroSection
