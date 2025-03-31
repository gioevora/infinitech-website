import React from 'react'
import HeroSection from './index/herosection/herosection'
import ServicesSection from './index/service/servicesection'
import AboutSection from './index/aboutsection/aboutsection'
import RecentProject from './index/recentsproject/recentproject'
import OurServices from './index/service/services'
import Testimonials from './index/testimonial/testimonials'
import ContactPage from './contact/page'


const Homepage = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <OurServices/>
      <RecentProject/>
      <Testimonials/>
      <ContactPage/>
    </>
  )
}

export default Homepage
