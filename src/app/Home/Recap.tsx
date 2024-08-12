import { Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Recap() {
  return (
    <Section>
      <h1 className="text-center text-4xl font-bold my-4">
        <Balancer>Febis Week 2023 Recap</Balancer>
      </h1>
      <hr />
      <iframe
        src="https://www.youtube.com/embed/z62x5V27MCU?si=HOEyrmzIwemXehQA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Section>
  );
}
