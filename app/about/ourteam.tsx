import React from 'react'
import { poetsen } from '../index/herosection/herosection'
import TeamCard from './teamcard'

const OurTeam = () => {
    return (
        <section className='container mx-auto py-24 px-4'>
            <div className='flex flex-col justify-center items-center'>
                <div className="max-w-lg text-center">
                    <span className="uppercase text-lg text-accent font-bold">our team</span>
                    <h1
                        className={`text-4xl md:text-4xl text-primary ${poetsen.className}`}
                    >
                        Meet our dedicated and passionate team members
                    </h1>
                </div>

                <div className='mt-12'>
                    <TeamCard/>
                </div>

            </div>
        </section>
    )
}

export default OurTeam
