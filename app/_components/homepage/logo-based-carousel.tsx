"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import CompanyCard from "./company-card";

type LogoBasedCarouselType = {
    "uid": string,
    "companyName": string,
    "url": string,
    "avatar": string,
    "openings": number,
}

interface LogoBasedCarouselProps {
    list?: LogoBasedCarouselType[];  // Optional: Customize the size of the spinner
}

const LogoBasedCarousel: React.FC<LogoBasedCarouselProps> = ({ 
    list = [{ 
        uid: 'abc001',
        companyName: 'referrfarmReferrFarm & Co.',
        url: 'https://www.referrfarm.com/',
        avatar: 'https://www.referrfarm.com/assets/images/logo-white.png',
        openings: 4
    }]
}) => {

    const handleViewReferrals = (uid: string) => {
        console.log('Viewing referrals for company:', uid);
        // Add your navigation logic here
    };

    return (
        <Carousel opts={{
            align: "start",
        }}
            className="">
            <CarouselContent>
                {
                    list.map(element => {
                        return (
                            <CarouselItem key={element.uid} className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4" >
                                <CompanyCard
                                    // key={element.uid}
                                    onViewReferrals={handleViewReferrals}
                                    company={element}
                                />
                            </CarouselItem>
                        )
                    })
                }
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </CarouselContent>
        </Carousel>

    )
}

export default LogoBasedCarousel;
