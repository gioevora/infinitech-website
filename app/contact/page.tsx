import React from 'react'
import { poetsen } from '../index/herosection/herosection'
import { LuMail, LuPhone, LuSmartphone } from 'react-icons/lu'
import Link from 'next/link'
import { Divider } from '@heroui/react'
import ContactForm from './contactform'

const ContactPage = () => {
  return (
    <section className='bg-gray-100'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-center items-center container mx-auto py-8 md:py-24 px-4'>
          <div className='max-w-lg'>
            <div className='py-4 space-y-4'>
              <h1 className={`text-4xl md:text-6xl text-primary ${poetsen.className}`}>Get in touch</h1>
              <p className='text-base md:text-lg'> Reach out to <strong>Infinitech Advertising Corporation</strong> for inquiries about
                web and system development solutions.
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <div className='px-2 py-2 rounded-lg items-center bg-blue-100 text-blue-900'>
                  <LuPhone size={18} />
                </div>
                <Link className='text-primary-light font-bold' href={"#"}>
                  (02) 7001-6157
                </Link>
              </div>

              <div className='flex items-center gap-2'>
                <div className='px-2 py-2 rounded-lg items-center bg-blue-100 text-blue-900'>
                  <LuSmartphone size={18} />
                </div>
                <Link className='text-primary-light font-bold' href={"#"}>
                  +63962-253-0149
                </Link>
              </div>

              <div className='flex items-center gap-2'>
                <div className='px-2 py-2 rounded-lg items-center bg-blue-100 text-blue-900'>
                  <LuMail size={18} />
                </div>
                <Link className='text-primary-light font-bold' href={"#"}>
                  infinitechadvertisingcorp@gmail.com
                </Link>
              </div>

              <Divider className='my-4'/>

              <ContactForm/>

            </div>
          </div>
        </div>
        <div className="w-full h-full min-h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6855119607444!2d121.01129607577312!3d14.559968178068823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9df6c047e17%3A0x12957e8fd785f26f!2sinfinitech%20advertising%20corporation!5e0!3m2!1sen!2sph!4v1742883768973!5m2!1sen!2sph"
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </section>
  )
}

export default ContactPage
