import { CarouselPrograms } from "@/components/carousel-programs";
import { Container, Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Programs() {
  return (
    <Section className="w-screen">
      <h1 className="text-center text-4xl font-bold">
        <Balancer>Programs</Balancer>
      </h1>
      <Container className="mx-auto">
        <CarouselPrograms />
      </Container>
    </Section>
  );
}
