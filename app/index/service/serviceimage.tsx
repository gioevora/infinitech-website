'use client'
import { Image } from '@heroui/react'
import React from 'react'

interface ServiceProps{
    image: string;
}
const ServiceImage: React.FC<ServiceProps> = ({image}) => {
    return (
        <>
            <Image
                alt="HeroUI hero Image"
                src={image}
                width={1000}
                height={450}
            />
        </>
    )
}

export default ServiceImage
