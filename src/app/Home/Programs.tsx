import { Container, Section } from "@/components/craft";
import { ProgramsCard } from "@/components/programs-card";
import Balancer from "react-wrap-balancer";

type ProgramsListType = {
  title: string;
  image: string;
  link: string;
};

const programsLists: ProgramsListType[] = [
  {
    title: "Seminar",
    image: "/AXL05224.jpg",
    link: "/",
  },
  {
    title: "Workshop",
    image: "/cover-workshop.jpg",
    link: "/",
  },
  {
    title: "Accounting Competition",
    image: "/cover-accounting.jpg",
    link: "/",
  },
  {
    title: "Product Design Competition",
    image: "/cover-product-design.jpg",
    link: "/",
  },
  {
    title: "Essay & Debate Competition",
    image: "/cover-debat.jpg",
    link: "/",
  },
];

export default function Programs() {
  return (
    <Section className="w-screen">
      <h1 className="text-center text-4xl font-bold">
        <Balancer>Programs</Balancer>
      </h1>
      <Container className=" md:grid md:grid-cols-3 md:gap-4">
        {programsLists.map((program, index) => (
          <ProgramsCard {...program} key={index} />
        ))}
      </Container>
    </Section>
  );
}
