import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

type CarouselItemType = {
    "uid": string,
    "fullName": string,
    "headline": string,
    "currentCompany": string,
    "avatar": string,
    "memberSince": string
}

interface ListingCarouselProps {
    list?: CarouselItemType[];  // Optional: Customize the size of the spinner
}

const ListingCarousel: React.FC<ListingCarouselProps> = ({ list = [{ uid: 'abc123', fullName: 'Test user', headline: 'Testing...', currentCompany: 'ABC Co.', avatar: 'https://robohash.org/voluptatumillominus.png?size=50x50&set=set1', memberSince: "2/3/2023" }] }) => {
    return (
        <Carousel opts={{
            align: "start",
        }}
            className="">
            <CarouselContent>

                {
                    list.map(element => {
                        return (
                            <CarouselItem key={element.uid} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4" >
                                <div className="p-1 min-w-72">
                                    <Card className="min-w-72 min-h-34 text-left text-sm transition-all hover:bg-accent">
                                        <CardContent className="flex flex-row p-4">
                                            {/* <button
                                    className="min-w-72 flex flex-row rounded-lg border p-4 text-left text-sm transition-all hover:bg-accent"
                                > */}
                                            <div className="border rounded-full mr-8">
                                                {/* <img src={element.avatar} alt="user image" width={64} height={64} /> */}
                                                <Image src={element.avatar} alt="user image" width={64} height={64} />
                                            </div>
                                            <div className="flex flex-col items-start gap-2 ">
                                                <div className="flex w-full flex-col gap-1">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center gap-2">
                                                            <div className="font-semibold">{element.fullName}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-xs"><strong>Works at:</strong> {element.currentCompany || 'Not Provided'}</div>
                                                    <div className="text-xs font-medium"><strong>Headline:</strong> {element.headline || 'Not provided'}</div>
                                                </div>
                                                <div className="line-clamp-2 text-xs text-muted-foreground">
                                                    Member since: {element.memberSince}
                                                </div>
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

export default ListingCarousel;