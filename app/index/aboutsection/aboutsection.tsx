
import React from 'react'
import { poetsen } from '../herosection/herosection'
import { Button } from '@heroui/button'
import { LuArrowRight } from 'react-icons/lu'
import ImageAbout from './image-about'

const AboutSection = () => {
    return (
        <section>
            <div className='container mx-auto px-4 py-12 md:py-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <div className='px-0 md:px-4'>
                        <ImageAbout />
                    </div>
                    <div className='space-y-6'>
                        <h1 className={`text-4xl sm:text-6xl text-primary ${poetsen.className}`}>Who is Infinitech Advertising Corporation?</h1>
                        <div className='space-y-4'>
                            <p className='text-base md:text-lg'>
                                At <strong>Infinitech Advertising Company</strong>, our mission is to help businesses thrive by providing top-notch digital solutions that boost growth, streamline operations, and enhance user satisfaction.
                            </p>
                            <p className='text-base md:text-lg'>
                                We are committed to customer satisfaction, offering a guarantee of unique web design and high-quality work. Our expertise spans Website Design and Development, Mobile App Development, Ecommerce Solutions, and IT Outsourcing.
                            </p>
                            <p className='text-base md:text-lg'>
                                Through our innovative solutions, we ensure our clients achieve their goals and experience exceptional service.
                            </p>
                        </div>

                        <div>
                            <Button endContent={<LuArrowRight />} size='lg' className='bg-primary text-gray-100'>Learn More About Us</Button>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default AboutSection
