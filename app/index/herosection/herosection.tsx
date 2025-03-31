import { Poetsen_One } from "next/font/google";
import LeftSide from "./leftside";
import RightSide from "./rightside";
import ServiceCard from "../service/servicecard";




// Font configuration
export const poetsen = Poetsen_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    fallback: ["Arial", "sans-serif"],
    variable: "--font-poetsen-one",
});

export default function HeroSection() {
    return (
        <section
            className="bg-cover bg-right"
            style={{
                backgroundImage: "url('/rainbow-vortex.svg')",
                backgroundSize: "cover",
                backgroundPosition: "right center",
            }}
        >

            <div className="container mx-auto w-full pt-12 md:pt-24 flex-grow px-4">
                <div className="flex flex-col py-16">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                        {/* Text Content */}
                        <LeftSide />
                        {/* Optional Placeholder for Second Column */}
                        <RightSide />
                    </div>

                </div>
                <ServiceCard/>

            </div>





        </section>
    );
}
