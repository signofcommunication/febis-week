import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardContent = {
  title: string;
  link: string;
  imageUrl: string;
};

export const CardWithForm: React.FC<CardContent> = ({
  title,
  link,
  imageUrl,
}) => {
  console.log({ title, link, imageUrl });
  return (
    <div className="relative grid h-[40rem] w-full max-w-[28rem] flex items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 m-3">
      <div
        className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('../../public/cover-debat.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          {title}
        </h2>
        <a href={link} className="mb-6 block font-sans tracking-normal">
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

// <Card
//   classNameName="w-full text-center my-2"
//   style={{ backgroundColor: color ? color : "inherit" }}
// >
//   <CardHeader>
//     <CardTitle>{title}</CardTitle>
//   </CardHeader>
//   <CardContent>
//     <a href={link} target="_blank">
//       Daftar Sekarang
//     </a>
//   </CardContent>
// </Card>
