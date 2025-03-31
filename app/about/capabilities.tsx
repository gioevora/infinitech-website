import { Button } from '@heroui/button'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import { poetsen } from '../index/herosection/herosection'
import CapabilitesCard from './capabilitiescard'

const Capabilities = () => {
    return (
        <div className='py-24'>
            <div className='flex justify-between'>
                <div className='max-w-lg'>
                    <span className="uppercase text-lg text-accent font-bold">
                        capabilities
                    </span>
                    <h1 className={`text-4xl font-bold mt-2 ${poetsen.className}`}>Building Innovative Digital Solutions for Your Business</h1>
                </div>
                <div className='mt-6'>
                    <Button size='lg' endContent={<LuArrowRight />} className='bg-primary text-gray-100'>View All Services</Button>
                </div>
            </div>

            <div className='py-8'>
                <CapabilitesCard/>
            </div>
        </div>
    )
}

export default Capabilities
