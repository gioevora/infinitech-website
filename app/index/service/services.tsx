import React from 'react'
import ServiceImage from './serviceimage'
import { poetsen } from '../herosection/herosection';
import { Button } from '@heroui/button';
import { LuArrowRight } from 'react-icons/lu';

const OurServices = () => {
    return (
        <section>
            <div className='container mx-auto px-4 py-24'>
                <div className='flex flex-col justify-center items-center md:space-y-24'>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='flex justify-center items-center'>
                            <div className='max-w-lg'>
                                <span className="uppercase text-lg text-accent font-bold">
                                    website development
                                </span>
                                <h1 className={`text-4xl font-bold mt-2 ${poetsen.className}`}>Crafting Custom Websites Tailored to Your Needs</h1>
                                <p className="text-lg text-gray-600 mt-4">
                                    We create visually stunning and highly functional websites that capture attention, convey your brand's message, and give you a competitive edge. Share your vision with us, and we'll take care of the rest.
                                </p>

                                <div className='mt-6'>
                                    <Button size='lg' endContent={<LuArrowRight />} className='uppercase bg-primary text-gray-100'>Get a custom website</Button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ServiceImage image='./img/website-development.svg' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='order-2 md:order-1'>
                            <ServiceImage image='./img/seo-services.svg' />
                        </div>

                        <div className='flex justify-center items-center order-1 md:order-2'>
                            <div className='max-w-lg'>
                                <span className="uppercase text-lg text-accent font-bold">
                                    search engine optimization
                                </span>
                                <h1 className={`text-4xl font-bold mt-2 ${poetsen.className}`}>Boost Your Online Visibility with SEO</h1>
                                <p className="text-lg text-gray-600 mt-4">
                                    Our SEO strategies help improve your website’s search engine rankings, driving more organic traffic and increasing your online presence. Let us optimize your site and ensure it reaches the right audience.
                                </p>

                                <div className='mt-6'>
                                    <Button size='lg' endContent={<LuArrowRight />} className='uppercase bg-primary text-gray-100'>improve your seo now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='flex justify-center items-center'>
                            <div className='max-w-lg'>
                                <span className="uppercase text-lg text-accent font-bold">
                                    graphic design
                                </span>
                                <h1 className={`text-4xl font-bold mt-2 ${poetsen.className}`}>Bringing Your Brand to Life with Stunning Designs</h1>
                                <p className="text-lg text-gray-600 mt-4">
                                    Our creative team designs visually appealing graphics that reflect your brand identity, making a lasting impression on your audience. From logos to promotional materials, we've got you covered.
                                </p>

                                <div className='mt-6'>
                                    <Button size='lg' endContent={<LuArrowRight />} className='uppercase bg-primary text-gray-100'>Elevate your brand design</Button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ServiceImage image='./img/design-services.svg' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='order-2 md:order-1'>
                            <ServiceImage image='./img/marketing-services.svg' />
                        </div>

                        <div className='flex justify-center items-center order-1 md:order-2'>
                            <div className='max-w-lg'>
                                <span className="uppercase text-lg text-accent font-bold">
                                    social media markerting
                                </span>
                                <h1 className={`text-4xl font-bold mt-2 ${poetsen.className}`}>Maximize Engagement Through Social Media</h1>
                                <p className="text-lg text-gray-600 mt-4">
                                    We develop and manage engaging social media campaigns that build brand awareness, increase customer engagement, and drive business growth. Let us help you connect with your audience effectively.                                </p>

                                <div className='mt-6'>
                                    <Button size='lg' endContent={<LuArrowRight />} className='uppercase bg-primary text-gray-100'>boost your social presence now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices
