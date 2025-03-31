'use client'
import { Card, CardBody, CardFooter, Image } from '@heroui/react'
import React from 'react'

const TeamCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <Card className='bg-gray-100 shadow-none'>
                <CardBody>
                    <div>
                        <Image
                            src='https://heroui.com/images/album-cover.png'
                            width={1000}
                            height={300}
                            className='object-cover'
                        />
                    </div>
                </CardBody>
                <CardFooter>
                    <div>
                        <h1 className='uppercase font-semibold text-lg'>Team Member Name</h1>
                        <span className='capitalize text-sm font-medium'>Team Member Position</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default TeamCard
