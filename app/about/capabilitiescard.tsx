'use client'
import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { LuGlobe, LuPenTool, LuServer, LuCode } from 'react-icons/lu';


const CapabilitiesCard = () => {
    const featuresData = [

        {
            key: "Web Design & Development",
            label:
                "Custom-built, professionally-designed websites featuring an easy-to-use Content Management System (CMS).",
            icon: LuGlobe,
        },
        {
            key: "Graphic Design",
            label:
                "We can assist in enhancing your brand through the creation of marketing materials.",
            icon: LuPenTool,
        },
        {
            key: "Web Hosting & Domain",
            label:
                "Our servers are fine-tuned for speed, security, and reliability, ensuring your websites operate seamlessly.",
            icon: LuServer,
        },
        {
            key: "Web Based Application",
            label:
                "We have the capability to create personalized web applications designed to enhance your organization's operational effectiveness.",
            icon: LuCode,
        },
    ];


    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-6'>
            {featuresData.map((item) => (
                <Card
                    key={item.key}
                    isBlurred
                    className="bg-gray-100 shadow-none rounded-xl w-full p-4 flex flex-col items-center text-center"
                >
                    <CardBody>

                        <item.icon className="h-10 w-10 text-accent-light mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb- uppercase">
                            {item.key}
                        </h3>
                        <p className="text-gray-700">
                            {item.label}
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default CapabilitiesCard;
