import { Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Recap() {
  return (
    <Section>
      <h1 className="text-center text-4xl font-bold my-4">
        <Balancer>Febis Week 2023 Recap</Balancer>
      </h1>
      <hr />
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/z62x5V27MCU?si=HOEyrmzIwemXehQA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </Section>
  );
}
