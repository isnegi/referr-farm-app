import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

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

const LogoBasedCarousel: React.FC<LogoBasedCarouselProps> = ({ list = [{ uid: 'abc123', companyName: 'ABC Inc.', url: 'https://abc.com', avatar: 'https://robohash.org/voluptatumillominus.png?size=50x50&set=set1', openings: "2/3/2023" }] }) => {
    return (
        <Carousel opts={{
            align: "start",
        }}
            className="">
            <CarouselContent>

                {
                    list.map(element => {
                        return (
                            <CarouselItem key={element.uid} className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6" >
                                <div className="p-1">
                                    <Card className="text-left text-sm transition-all hover:bg-accent">
                                        <CardContent className="flex flex-col p-4 items-center">
                                            <div className="border rounded-sm">
                                                {/* <img src={element.avatar} alt="user image" width={72} height={72} /> */}
                                                <Image src={element.avatar} alt="user image" width={72} height={72} />
                                            </div>
                                            <Separator className="my-4" />
                                            <div className="flex w-full flex-col gap-1 items-center">
                                                <div className="flex items-center">
                                                    <div className="font-semibold">{element.companyName}</div>
                                                </div>
                                                <div className="text-xs"><strong><a href={element.url} target="_blank" className="flex" >Website &nbsp;<ExternalLink size={18} /></a></strong></div>
                                                <div className="text-xs font-medium"><strong>Active referrals:</strong> <Badge variant="outline">{element.openings}</Badge></div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
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
