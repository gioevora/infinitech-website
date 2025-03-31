'use client'
import { Image } from '@heroui/react'
import React from 'react'

const ImageAbout = () => {
    return (
        <>
            <Image
                alt="HeroUI hero Image"
                src="./img/infinitech-about.jpeg"
                width={1000}
                className='object-cover  md:rounded-bl-[120px] md:rounded-tr-[120px] md:rounded-tl-[20px] md:rounded-br-[20px] border-4 border-gray-700 shadow-lg'
            />
        </>
    )
}

export default ImageAbout
