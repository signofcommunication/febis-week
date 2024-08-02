import { Container, Main, Section } from "../../../components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as Craft from "@/components/craft";

export default function Blog() {
  return (
    <Main className="p-24">
      <Section>
        <Container>
          <Craft.Section className="rounded-md border bg-muted/50 p-4">
            <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
              <div className="flex justify-center flex-col gap-6 py-8">
                <h1 className="!my-0">Febis Week 2023</h1>
              </div>
              <div className="flex flex-col gap-6 py-8">
                <p className="font-light leading-[1.4] opacity-70">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  atque sapiente possimus, in eveniet autem, quam ut nobis iste
                  sed itaque assumenda libero doloremque veniam quas ullam
                  dicta, explicabo corrupti.
                </p>
                <div className="not-prose flex justify-center items-center gap-2">
                  <Button className="w-fit" asChild>
                    <Link href="/blog/febis-week-2023">More Info</Link>
                  </Button>
                </div>
              </div>
            </Craft.Container>
          </Craft.Section>
          <hr />
          <Craft.Section className="rounded-md border bg-muted/50 p-4">
            <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
              <div className="flex flex-col gap-6 py-8">
                <p className="font-light leading-[1.4] opacity-70">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  atque sapiente possimus, in eveniet autem, quam ut nobis iste
                  sed itaque assumenda libero doloremque veniam quas ullam
                  dicta, explicabo corrupti.
                </p>
                <div className="not-prose flex justify-center items-center gap-2">
                  <Button className="w-fit" asChild>
                    <Link href="/blog/febis-insight">More Info</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-6 py-8">
                <h1 className="!my-0">Febis Insight</h1>
              </div>
            </Craft.Container>
          </Craft.Section>
        </Container>
      </Section>
    </Main>
  );
}
