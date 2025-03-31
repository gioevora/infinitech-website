import React from 'react'
import AboutHeroSection from './about-herosection'
import { Divider } from '@heroui/react'
import VisionMissionGoal from './vmg'
import Capabilities from './capabilities'
import AboutTestimonial from './about-testimonial'
import OurTeam from './ourteam'

const AboutPage = () => {
  return (
    <section className="container mx-auto py-24 px-4">
      <AboutHeroSection />
      <Divider className='my-4' />
      <VisionMissionGoal/>
      <Capabilities/>
      <AboutTestimonial/>
      <OurTeam/>
    </section>
  )
}

export default AboutPage
