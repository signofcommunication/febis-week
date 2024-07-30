// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Container, Section } from "../../../components/craft";
import { Button } from "../../../components/ui/button";

const Hero = () => {
  return (
    <Section className="w-screen">
      <Container className="flex flex-col text-center text-8xl">
        <h1 className="!mb-0">Febis Week 2024</h1>
      </Container>
    </Section>
  );
};

export default Hero;
