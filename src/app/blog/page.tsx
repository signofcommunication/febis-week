import { Container, Main, Section } from "../../../components/craft";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import * as Craft from "@/components/craft";

export default function Blog() {
  return (
    <Section className="blog-section">
      <Container className="mt-24">
        <Craft.Section
          className="rounded-md border bg-muted/50 p-4"
          id="blog-febis-week-2023"
        >
          <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
            <div className="flex justify-center flex-col gap-6 py-8">
              <Image
                src="/febis-week-2023-thumbnail.jpg"
                alt="Github"
                width={600}
                height={450}
                quality={100}
                sizes="100vw"
                layout="responsive"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-6 py-8">
              <h1 className="uppercase font-bold text-lg">
                <Balancer>Febis Week 2023</Balancer>
              </h1>
              <p className="font-light leading-[1.4] opacity-70">
                Fakultas Ekonomi, Bisnis, dan Ilmu Sosial (FEBIS) Universitas
                Matana menggelar acara tahunan FEBIS WEEK dengan tema
                Sustainable and Innovation Economy. Acara yang berlangsung dari
                tanggal 28 Agustus hingga 2 September 2023 ini sukses menarik
                minat ratusan peserta dari berbagai SMA/SMK se-Jabodetabek.
              </p>
              <div className="not-prose flex justify-center items-center gap-2">
                <Button className="w-fit" asChild>
                  <Link href="/blog/febis-week-2023">More Info</Link>
                </Button>
              </div>
            </div>
          </Craft.Container>
        </Craft.Section>
        <br />
        <Craft.Section className="rounded-md border bg-muted/50 p-4">
          <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12 grid-flow-row-dense">
            <div className="flex items-center justify-center flex-col gap-6 py-8 heading-container md:order-2">
              <Image
                src="/febis-insight.jpg"
                alt="Github"
                width={600}
                height={450}
                quality={100}
                sizes="100vw"
                layout="responsive"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-6 py-8 content-container">
              <h1 className="uppercase  font-bold text-lg">Febis Insight</h1>
              <p className="font-light leading-[1.4] opacity-70 text-content">
                Dapatkan <i>fun fact</i> dan info menarik terkait Ekonomi
                Kreatif disini. Info menarik akan di update pada hari minggu
                setiap minggunya.
              </p>
              <div className="not-prose flex justify-center items-center gap-2 button-container">
                <Button className="w-fit" asChild>
                  <Link href="/blog/febis-insight">More Info</Link>
                </Button>
              </div>
            </div>
          </Craft.Container>
        </Craft.Section>
      </Container>
    </Section>
  );
}
