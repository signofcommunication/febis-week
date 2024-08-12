import { Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Recap() {
  return (
    <Section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold my-4">
        <Balancer>Febis Week 2023 Recap</Balancer>
      </h1>
      <div
        style={{
          width: "100%",
          minWidth: "400px",
          maxWidth: "800px",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            paddingTop: "56.25%",
          }}
        >
          <p>
            <iframe
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src="https://www.youtube.com/embed/z62x5V27MCU?si=HOEyrmzIwemXehQA"
              width="560"
              height="315"
              allowFullScreen={true}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </p>
        </div>
      </div>
    </Section>
  );
}
