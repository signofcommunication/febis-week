import * as React from "react";

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
  link: string;
};

const programsLists: ProgramsListType[] = [
  {
    title: "Seminar",
    image: "/AXL05209.jpg",
    link: "/",
  },
  {
    title: "Workshop",
    image: "/cover-workshop.jpg",
    link: "/",
  },
  {
    title: "Accounting Competition",
    image: "/lomba-cerdas-cermat-akuntansi.png",
    link: "/",
  },
  {
    title: "Product Design Competition",
    image: "/lomba-desain-produk.png",
    link: "/",
  },
  {
    title: "Essay & Debate Competition",
    image: "/lomba-essay-debat.png",
    link: "/",
  },
];

export function CarouselPrograms() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      id="home-programs-carousel border border-sky-500"
    >
      <CarouselContent className="-ml-1 mx-auto">
        {programsLists.map((program, index) => (
          <CarouselItem key={index} className="pl-1 sm:basis-full md:basis-1/2">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
