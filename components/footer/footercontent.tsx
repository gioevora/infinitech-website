
import { poetsen } from '@/app/index/herosection/herosection'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6'

const FooterContent = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between py-8 gap-4'>
            <div>
                <div className="flex">
                    <Link className="font-bold text-xl" href={"/"}>
                        <span className={`text-white`}>INFINITECH ADVERTISING CORPORATION</span>
                    </Link>
                </div>

                <p className="text-md text-gray-300 mt-2 max-w-lg">
                    Infinitech Advertising Corporation specializes in providing customized IT solutions that
                    enhance online visibility and streamline business processes. We are committed to empowering
                    businesses with innovative web development and system development services tailored to
                    their unique needs.
                </p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 lg:space-x-12 gap-6'>
                <div>
                    <h1 className='font-normal text-lg uppercase'>Quick Links</h1>
                    <ul className='py-4 space-y-2 text-default-400'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Solutions</li>
                        <li>Testimonials</li>
                        <li>Blogs</li>

                    </ul>
                </div>
                <div>
                    <h1 className='font-normal text-lg uppercase'>About</h1>
                    <ul className='py-4 space-y-2 text-default-400'>
                        <li>Contact Us</li>
                        <li>
                            <Link href={'/privacy-policy'}>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href={'/terms-and-conditions'}>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href={'/juantap-help-support'}>
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-normal text-lg uppercase'>Discover</h1>
                    <ul className='py-4 space-y-2 text-default-400'>
                        <li>FAQs</li>
                        <li>Our Community</li>
                        <li>Changelogs</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-normal text-lg'>Connect With Us</h1>
                    <div className='flex items-center gap-4 py-4'>
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaYoutube size={24} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterContent
