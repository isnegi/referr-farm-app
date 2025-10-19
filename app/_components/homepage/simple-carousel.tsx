"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TopReferrerCard from "./referrer-card";

type CarouselItemType = {
    uid: string;
    fullName: string;
    headline: string;
    currentCompany: string;
    avatar: string;
    memberSince: string;
    referralsGiven?: number;
    successfulHires?: number;
    isVerified?: boolean;
}

interface ListingCarouselProps {
    list?: CarouselItemType[];
}

const ListingCarousel: React.FC<ListingCarouselProps> = ({ 
    list = [{
        uid: 'abc123',
        fullName: 'Test user',
        headline: 'Testing...',
        currentCompany: 'ABC Co.',
        avatar: 'https://robohash.org/voluptatumillominus.png?size=50x50&set=set1',
        memberSince: "2/3/2023",
        referralsGiven: 24,
        successfulHires: 8,
        isVerified: true
    }] 
}) => {

    const handleGetInTouch = (uid: string) => {
        console.log('Getting in touch with user:', uid);
        // Add your logic here - e.g., open modal, navigate to chat, etc.
    };
    
    return (
        <Carousel 
            opts={{
                align: "start",
            }}
            className=""
        >
            <CarouselContent>
                {list.map(element => (
                    <CarouselItem 
                        key={element.uid} 
                        className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4"
                    >
                        <TopReferrerCard
                            referrer={element} 
                            onGetInTouch={handleGetInTouch}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default ListingCarousel;