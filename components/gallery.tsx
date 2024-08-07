"use client";
import React, { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";

type FeatureText = {
  imageLink: string;
};

export default function FeaturedImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data: FeatureText[] = [
    {
      imageLink: "/AXL05209.jpg",
    },
    {
      imageLink: "/AXL05229.jpg",
    },
    {
      imageLink: "/AXL05211.jpg",
    },
    {
      imageLink: "/AXL05239.jpg",
    },
    {
      imageLink: "/AXL05228.jpg",
    },
    {
      imageLink: "/cover-workshop.jpg",
    },
  ];

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      prevIndex =>
        (prevIndex === 0 ? data.length - 1 : prevIndex - 1) % data.length
    );
  };

  return (
    <div className="grid gap-4">
      <div className="relative">
        <Image
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={data[activeIndex].imageLink} // Access image based on activeIndex
          width={500}
          height={500}
          quality={100}
          sizes="100vw"
          alt="Featured Image"
        />

        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-500 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={handleNext}
        >
          <CircleArrowRight />
        </button>
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-500 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={handlePrev}
        >
          <CircleArrowLeft />
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="grid grid-cols-5 gap-4">
          {" "}
          {/* Inner container */}
          {data.map(({ imageLink }, index) => (
            <div key={index}>
              <Image
                src={imageLink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                quality={100}
                width={500}
                height={500}
                sizes="100vw"
                alt={`Gallery image ${index + 1}`}
                onClick={() => setActiveIndex(index)} // Set active index directly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
