'use client'
import { poetsen } from '@/app/index/herosection/herosection'
import { Button } from '@heroui/react'

import React, { useState } from 'react'


const SubscribeForm = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     if (!email) return alert('Please enter a valid email address.')
    //     setLoading(true)

    //     try {
    //         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/guest/recipients`, {
    //             email
    //         })

    //         const emailAgentResponse = await axios.post(
    //             `/api/emails/newsletter`,
    //             {
    //                 sender_email: email,
              
    //             },
    //         );

    //         if (response?.data && emailAgentResponse?.data) {
    //             toast.success('Successfully subscribed!')
    //             setEmail('')
    //             setLoading(false)
    //         }
    //     } catch (error) {
    //         toast.error('This email is already subscribed. Please use a different one.')
    //         setLoading(false)
    //     }
    // }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-4">
            <div>
                <h1 className={`${poetsen.className} text-3xl sm:text-5xl`}>
                    Stay up to date with our news, ideas, and updates
                </h1>
            </div>
            <div className="flex items-center w-full">
                <form  className="relative w-full">
                    <label htmlFor="email" className="sr-only">
                        Subscribe
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-6 ps-4 text-sm  border border-gray-500 rounded-lg bg-white"
                        placeholder="Your Email Address"
                        required
                    />
                    <Button
                        isLoading={loading}
                        size='lg'
                        type="submit"
                        className="absolute end-2.5 bottom-2.5 bg-secondary text-dark font-medium rounded-lg text-sm  uppercase"
                    >
                        Subscribe Now
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SubscribeForm
