import { Container, Section } from "../../../components/craft";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Febis Week 2024 Programs",
  description: "Febis Week 2024 Programs",
};

type ProgramsListType = {
  title: string;
  image: string;
  link: string;
};

const programsLists: ProgramsListType[] = [
  {
    title: "Seminar",
    image: "/AXL05209.jpg",
    link: "/program/events/seminar",
  },
  {
    title: "Workshop",
    image: "/cover-workshop.jpg",
    link: "/program/events/workshop",
  },
  {
    title: "Accounting Competition",
    image: "/lomba-cerdas-cermat-akuntansi.png",
    link: "/program/competitions/cerdas-cermat",
  },
  {
    title: "Product Design Competition",
    image: "/lomba-desain-produk.png",
    link: "/program/competitions/desain-produk",
  },
  {
    title: "Essay & Debate Competition",
    image: "/lomba-essay-debat.png",
    link: "/program/competitions/essay-debat",
  },
];

export default function Program() {
  const firstRow = programsLists.slice(0, 2);
  const secondRow = programsLists.slice(2);

  return (
    <Section id="programs-section">
      <Container className="mt-24">
        <div className="not-prose mt-4 flex flex-col gap-4 md:flex-wrap">
          <div className="flex sm:flex-row flex-col gap-x-4">
            {secondRow.map((content, index) => (
              <div key={index} className="my-2">
                <BlogCard {...content} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-row flex-col gap-x-4 justify-center">
            {firstRow.map((content, index) => (
              <div key={index} className="my-2">
                <BlogCard key={index} {...content} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
