import { CardWithForm } from "@/components/card";
import { Container, Main, Section } from "../../../components/craft";

type CardContent = {
  title: string;
  link: string;
};

const contents: CardContent[] = [
  {
    title: "Seminar",
    link: "/",
  },
  {
    title: "Workshop",
    link: "/",
  },
  {
    title: "Accounting",
    link: "/",
  },
  {
    title: "Product Design",
    link: "/",
  },
  {
    title: "Essay & Debate",
    link: "/",
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
