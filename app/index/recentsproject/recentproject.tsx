
import React from 'react'
import { poetsen } from '../herosection/herosection'
import { Button } from '@heroui/button'
import { LuArrowRight } from 'react-icons/lu'
import ProjectList from './projectlist'


const RecentProject = () => {
    return (
        <section className='bg-blue-950 py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='flex justify-center items-center max-w-xl mx-auto px-4'>
                    <div className='space-y-6'>
                        <span className='uppercase text-gray-400 text-lg font-bold'>Our Recents Project</span>
                        <h1 className={`text-4xl md:text-6xl text-accent ${poetsen.className}`}>
                            We design & build your custom website
                        </h1>
                        <div className='space-y-4'>
                            <p className="text-lg text-gray-100 mt-8">
                                Explore some of our latest projects showcasing innovative designs,
                                cutting-edge technology, and tailored solutions that meet our clients' needs.

                            </p>
                            <p className="text-lg text-gray-100">
                                Each project highlights our commitment to delivering high-quality results.
                            </p>
                        </div>

                        <div className='py-6'>
                            <Button endContent={<LuArrowRight />} size='lg' variant='solid' className='bg-accent-light'>Get Your Own Website Now</Button>
                        </div>
                    </div>
                </div>
                <div>
                  <ProjectList/>
                </div>
            </div>

        </section>
    )
}

export default RecentProject
