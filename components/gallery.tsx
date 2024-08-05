"use client";
import React, { useState } from "react";

type FeatureText = {
  imageLink: string;
};

export default function FeaturedImageGallery() {
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  const data: FeatureText[] = [
    {
      imageLink: "../AXL05209.jpg",
    },
    {
      imageLink: "../AXL05229.jpg",
    },
    {
      imageLink: "../AXL05211.jpg",
    },
    {
      imageLink: "../AXL05239.jpg",
    },
    {
      imageLink: "../AXL05209.jpg",
    },
    {
      imageLink: "../cover-workshop.jpg",
    },
  ];

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured Image" // Added alt text for accessibility
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imageLink)}
              src={imageLink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt={`Gallery image ${index + 1}`} // Added descriptive alt text
            />
          </div>
        ))}
      </div>
    </div>
  );
}
