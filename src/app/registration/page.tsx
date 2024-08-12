import { CardWithForm } from "@/components/card";
import { Container, Section } from "../../../components/craft";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration",
  description: "Registration Febis Week 2024",
};

type CardContent = {
  title: string;
  link: string;
  imageUrl: string;
};

const contents: CardContent[] = [
  {
    title: "Seminar",
    link: "https://forms.gle/Tzc5KNGMZUA183on8 ",
    imageUrl: `bg-[url('../../public/AXL05224.jpg')]`,
  },
  {
    title: "Workshop",
    link: "https://forms.gle/P8cutgC5yy2CA7426",
    imageUrl: `bg-[url('../../public/cover-workshop.jpg')]`,
  },
  {
    title: "Accounting Competition",
    link: "https://forms.gle/k8R1nZfKDxnm2A2t7",
    imageUrl: `bg-[url('../../public/lomba-cerdas-cermat-akuntansi.png')]`,
  },
  {
    title: "Product Design Competition",
    link: "https://forms.gle/k8R1nZfKDxnm2A2t7",
    imageUrl: `bg-[url('../../public/lomba-desain-produk.png')]`,
  },
  {
    title: "Essay & Debate Competition",
    link: "https://forms.gle/k8R1nZfKDxnm2A2t7",
    imageUrl: `bg-[url('../../public/lomba-essay-debat.png')]`,
  },
];

export default function Registration() {
  const firstRow = contents.slice(0, 2);
  const secondRow = contents.slice(2);

  return (
    <Section>
      <Container className="flex flex-col mt-24">
        <div className="flex sm:flex-row flex-col gap-x-4">
          {secondRow.map((content, index) => (
            <CardWithForm
              key={index}
              title={content.title}
              link={content.link}
              imageUrl={content.imageUrl}
            />
          ))}
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-row flex-col gap-x-4">
          {firstRow.map((content, index) => (
            <CardWithForm
              key={index}
              title={content.title}
              link={content.link}
              imageUrl={content.imageUrl}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
