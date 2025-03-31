'use client'
import { Image } from '@heroui/react'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const ProjectList = () => {

    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 1,
        },

        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 15 },
            },
        },
    })

    const data = [
        { key: "DMCI Homes", image: "./project/dmci-project.png" },
        { key: "ABIC Realty", image: "./project/abic-project.png" },
        { key: "Juantap", image: "./project/juantap-project.png" },
    ];
    return (
        <div ref={ref} className="keen-slider">
            {data.map((item) => (
                <div key={item.key} className="keen-slider__slide px-4 md:px-0">
                    <Image
                        alt="HeroUI hero Image"
                        src={item.image}
                        width={500}
                        height={650}
                        className='border border-gray-400 '
                    />
                </div>
            ))}

        </div>
    )
}

export default ProjectList
