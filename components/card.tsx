import * as React from "react";
import { CardContent } from "@/components/ui/card";

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
  return (
    <div className="relative grid h-[40rem] w-full max-w-[28rem] flex items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 m-3">
      <div
        className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent ${imageUrl} bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          {title}
        </h2>
        <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span className="w-56 h-48 rounded bg-yellow-500 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <a
            href={link}
            className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white p-2"
          >
            Daftar Sekarang
          </a>
        </button>
      </div>
    </div>
  );
};
