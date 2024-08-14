import { Container, Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";

const Timeline = () => {
  return (
    <Section className="w-screen" id="timeline">
      <Container>
        <h1 className="text-center text-white text-4xl font-bold hidden md:block">
          <Balancer>Timeline</Balancer>
        </h1>
      </Container>
    </Section>
  );
};

export default Timeline;
