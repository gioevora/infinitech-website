'use client'
import React from "react";



import Link from "next/link";
import { Divider } from "@heroui/react";
import SubscribeForm from "./subscribeform";
import FooterContent from "./footercontent";

const FooterLayout = () => {
    return (
        <>
            <footer className="w-full flex flex-col items-center justify-center bg-blue-950 text-white py-8">
                <div className="container mx-auto flex flex-col  px-4">
                    <SubscribeForm />
                    <Divider className="my-4 bg-gray-100" />
                    <FooterContent />
                    <Divider className="my-4 bg-gray-100" />
                    <div className="flex flex-col md:flex-row justify-between items-center text-default-400">
                        <div>
                            © 2025 Infinitech Advertising Corporation. All Rights Reserved
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href={'/privacy-policy'}>
                                Privacy Policy
                            </Link>
                            <Link href={'/terms-and-conditions'}>
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterLayout;
