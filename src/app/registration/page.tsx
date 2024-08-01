import { CardWithForm } from "@/components/card";
import { Container, Main, Section } from "../../../components/craft";

type CardContent = {
  title: string;
  link: string;
};

const contents: CardContent[] = [
  {
    title: "Seminar",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeAnE_YFirbnDaBqs75xWF_O60v7m96xqP682J2wxSr87sn5A/viewform?usp=sharing",
  },
  {
    title: "Workshop",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdsFyMHOuaKGUWlhoUf9zSm7JI1J3dxGOWKJUY48xp7i2Yx1g/viewform?usp=sharing",
  },
  {
    title: "Accounting",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeseCRc_QTo41tXnO03qYeXvWvkmiNpI9d0nO_KUKpJdUyWBA/viewform",
  },
  {
    title: "Product Design",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeseCRc_QTo41tXnO03qYeXvWvkmiNpI9d0nO_KUKpJdUyWBA/viewform",
  },
  {
    title: "Essay & Debate",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeseCRc_QTo41tXnO03qYeXvWvkmiNpI9d0nO_KUKpJdUyWBA/viewform",
  },
];

export default function Registration() {
  return (
    <Main className="p-24">
      <Section>
        <Container>
          {contents.map((content, index) => (
            <CardWithForm
              key={index}
              title={content.title}
              link={content.link}
            />
          ))}
        </Container>
      </Section>
    </Main>
  );
}
