import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Music2 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import Logo from "@/public/logo-Horizontal-white.png";

export default function Footer() {
  return (
    <footer className="matana-base-color-blue">
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={200}
                quality={100}
                sizes="100vw"
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <Balancer className="font-bold text-2xl text-white">
              Matana University Tower
            </Balancer>
            <p className="text-white">
              <Balancer>
                <Link href="https://goo.gl/maps/CgDyA6nBBWuLCi687">
                  Jl. CBD Barat Kav. 1. Gading Serpong <br /> Tangerang - 15810,
                  Indonesia
                </Link>
              </Balancer>
            </p>
          </div>
        </Container>
        <Container className="grid gap-12 sm:justify-items-stretch items-center md:grid-cols-[0.5fr_0.5fr_0.5fr]">
          <div className="flex flex-col justify-end">
            {/* <h5>Program Studi</h5> */}
            <p className="matana-base-color-orange font-bold">
              Lomba Cerdas Cermat
            </p>
            <p className="text-white">Agustin Praba (0896-6861-6466)</p>
          </div>
          <div className="flex flex-col justify-end tex-start sm:text-center">
            <p className="matana-base-color-orange font-bold">
              Lomba Essay & Debate
            </p>
            <p className="text-white">Gladys (0855-1199-114)</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="matana-base-color-orange font-bold">
              Lomba Design Produk
            </p>
            <p className="text-white">Melviana (0822-1374-9305)</p>
          </div>
        </Container>
        <Container className="grid gap-12 sm:justify-items-stretch items-center md:grid-cols-[1fr_1fr_1fr]">
          <div className="flex flex-col order-1 md:order-1">
            <p className="matana-base-color-orange font-bold">Sponsorship</p>
            <p className="text-white">Vallerie (0852-2218-2406)</p>
          </div>
          <div className="flex justify-around order-3 md:order-2">
            <Link href="https://www.instagram.com/matana_febisweek/?hl=en">
              <Button variant="outline" size="icon">
                <Instagram />
              </Button>
            </Link>
            <Link href="https://www.tiktok.com/@febisweek2024">
              <Button variant="outline" size="icon">
                <Music2 />
              </Button>
            </Link>
            <Link href="https://www.facebook.com/MatanaUniversity/?locale=id_ID">
              <Button variant="outline" size="icon">
                <Facebook />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col order-2 md:order-3">
            <p className="matana-base-color-orange font-bold">Media Partner</p>
            <p className="text-white">Yoga (0882-0050-06513)</p>
          </div>
        </Container>

        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <p className="text-muted-foreground text-center text-white">
            ©{" "}
            <a href="https://www.matanauniversity.ac.id/">Matana University</a>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
