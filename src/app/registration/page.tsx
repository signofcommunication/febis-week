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
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeAnE_YFirbnDaBqs75xWF_O60v7m96xqP682J2wxSr87sn5A/viewform?usp=sharing",
    imageUrl: `bg-[url('../../public/AXL05224.jpg')]`,
  },
  {
    title: "Workshop",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdsFyMHOuaKGUWlhoUf9zSm7JI1J3dxGOWKJUY48xp7i2Yx1g/viewform?usp=sharing",
    imageUrl: `bg-[url('../../public/cover-workshop.jpg')]`,
  },
  {
    title: "Accounting Competition",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeseCRc_QTo41tXnO03qYeXvWvkmiNpI9d0nO_KUKpJdUyWBA/viewform",
    imageUrl: `bg-[url('../../public/lomba-cerdas-cermat-akuntansi.png')]`,
  },
  {
    title: "Product Design Competition",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeseCRc_QTo41tXnO03qYeXvWvkmiNpI9d0nO_KUKpJdUyWBA/viewform",
    imageUrl: `bg-[url('../../public/lomba-desain-produk.png')]`,
  },
  {
    title: "Essay & Debate Competition",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeseCRc_QTo41tXnO03qYeXvWvkmiNpI9d0nO_KUKpJdUyWBA/viewform",
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
