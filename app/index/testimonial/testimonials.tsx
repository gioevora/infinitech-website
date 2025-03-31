import React from 'react'
import TestimonialContainer from './testimonialcontainer'
import Reviews from './reviews'
import { Divider } from '@heroui/react'

const Testimonials = () => {
  return (
    <section>
      <div className='container mx-auto px-4 py-24'>
        <TestimonialContainer />
        <Divider className='my-12' />
        <Reviews />
      </div>
    </section>
  )
}

export default Testimonials
