'use client'
import { Button, Input, Textarea } from "@heroui/react";
import React from 'react'
import { LuArrowRight } from "react-icons/lu";

const ContactForm = () => {
    return (
        <div className='flex flex-col space-y-4'>
            <div>
                <Input
                    type="text"
                    isRequired
                    size='lg'
                    label="Full Name"
                    variant="bordered"
                    placeholder='eg. Juan Dela Cruz'
                />
            </div>

            <div>
                <Input
                    type="email"
                    isRequired
                    size='lg'
                    label="Email Address"
                    variant="bordered"
                    placeholder='eg. juandelacruz@gmail.com'
                />
            </div>

            <div>
                <Input
                    type="text"
                    isRequired
                    size='lg'
                    label="Phone Number"
                    variant="bordered"
                    placeholder='eg. 992 440 1097'
                />
            </div>

            <div>
                <Textarea
                    type="text"
                    isRequired
                    size='lg'
                    label="Message"
                    variant="bordered"
                    placeholder='Leave us message...'
                />
            </div>

            <div>
                <Button endContent={<LuArrowRight/>} size="lg" variant="solid" className="bg-primary text-gray-100">Send Message</Button>
            </div>
        </div>
    )
}

export default ContactForm
