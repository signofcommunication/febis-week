"use client";
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlogCard } from "./blog-card";

type ProgramsListType = {
  title: string;
  image: string;
  description?: string;
  link: string;
};

const programsLists: ProgramsListType[] = [
  {
    title: "Seminar",
    image: "/AXL05209.jpg",
    description: `Febis Week 2024 akan menyelenggarakan seminar dengan tema “Empowering Tomorrow's Leaders: Fostering Youth in the Creative....`,
    link: "/program/events/seminar",
  },
  {
    title: "Workshop",
    image: "/cover-workshop.jpg",
    description: `Febis Week 2024 akan mengadakan workshop “Coffee & Tea Making” yang akan dibawakan oleh barista & tea master yang profesional....`,
    link: "/program/events/workshop",
  },
  {
    title: "Accounting Competition",
    image: "/lomba-cerdas-cermat-akuntansi.png",
    description: `Lomba akuntansi dengan tema "Navigating the Financial Landscape of the Creative Economy through Accounting Challenges"....`,
    link: "/program/competitions/cerdas-cermat",
  },
  {
    title: "Product Design Competition",
    image: "/lomba-desain-produk.png",
    description: `Melalui lomba desain produk dengan tema “Generating Creative Economy Potential with Sustainable Product Design”....`,
    link: "/program/competitions/desain-produk",
  },
  {
    title: "Essay & Debate Competition",
    image: "/lomba-essay-debat.png",
    description: `Lomba dengan tema “Sustainable Creative Economic Innovation” diciptakan dengan tujuan untuk melihat kemampuan....`,
    link: "/program/competitions/essay-debat",
  },
];

export function CarouselPrograms() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        id="home-programs-carousel border border-sky-500"
      >
        <CarouselContent className="-ml-1 mx-auto">
          {programsLists.map((program, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-full md:basis-1/2"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <BlogCard {...program} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-white">
        Slide {current} of {count}
      </div>
    </div>
  );
}
