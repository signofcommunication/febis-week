import { Container, Section } from "@/components/craft";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Timeline = () => {
  return (
    <Section className="w-screen" id="timeline">
      <Container>
        <h1 className="text-center text-white text-4xl font-bold hidden md:block">
          <Balancer>Timeline</Balancer>
        </h1>
        <div id="timeline-track">
          {/* <Image
          className="h-auto w-full object-contain md:h-[480px]"
          src={"/timeline.png"}
          alt="timeline-track"
          sizes="100vw"
          width={200}
          height={200}
          quality={100}
        /> */}
        </div>
      </Container>
    </Section>
  );
};

export default Timeline;
