import { Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";

const Timeline = () => {
  return (
    <>
      <Section className="w-screen my-auto" id="timeline">
        <h1 className="text-center text-white text-4xl sm:mt-24 font-bold">
          <Balancer>Timeline</Balancer>
        </h1>
        <div id="timeline-track" />
      </Section>
    </>
  );
};

export default Timeline;
