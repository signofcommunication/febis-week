import { Container, Section } from "../../../components/craft";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <Section
      className="w-screen h-screen flex items-center justify-center bg-black"
      id="febis-week-banner"
    >
      <Container className="text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase">
          <Balancer>Febis Week Presents</Balancer>
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          <Balancer>CREATIVE ECONOMY FOR SUSTAINABLE DEVELOPMENT</Balancer>
        </h1>
      </Container>
    </Section>
  );
};

export default Hero;
