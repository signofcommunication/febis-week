import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Phone } from "lucide-react";
import { Section, Container } from "@/components/craft";
import Logo from "@/public/Logo-Matana_Vertikal-dan-Horizontal-02-1-800x291-1.png";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 sm:justify-items-stretch items-center md:grid-cols-[0.5fr_0.5fr_0.5fr]">
          <div className="flex flex-col gap-4 justify-end">
            {/* <h5>Program Studi</h5> */}
            <p className="matana-base-color-orange font-bold">
              Lomba Cerdas Cermat
            </p>
            <p>Agustin Praba (0896-6861-6466)</p>
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <p className="matana-base-color-orange font-bold">Essay & Debate</p>
            <p>Gladys (0855-1199-114)</p>
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <p className="matana-base-color-orange font-bold">Design Produk</p>
            <p>Melviana (0822-1374-9305)</p>
          </div>
        </Container>
        <Container className="grid gap-10 sm:justify-items-stretch items-center md:grid-cols-[2.3fr_1fr]">
          <div className="flex flex-col">
            <p className="matana-base-color-orange font-bold">Sponsorship</p>
            <p>Vallerie (0852-2218-2406)</p>
          </div>
          <div className="flex flex-col">
            <p className="matana-base-color-orange font-bold">Media Partner</p>
            <p>Yoga (0882-0050-06513)</p>
          </div>
        </Container>
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
            <Balancer className="font-bold text-2xl">
              Matana University Tower
            </Balancer>
            <p>
              <Balancer>
                <Link href="https://goo.gl/maps/CgDyA6nBBWuLCi687">
                  Jl. CBD Barat Kav. 1. Gading Serpong <br /> Tangerang - 15810,
                  Indonesia
                </Link>
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            {/* <h5>Program Studi</h5> */}
            <Link href="https://manajemen.matanauniversity.ac.id/">
              Manajemen
            </Link>
            <Link href="https://akuntansi.matanauniversity.ac.id/">
              Akuntansi
            </Link>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <Link href="https://hospar.matanauniversity.ac.id/">Hospar</Link>
            <Link href="https://matanauniversity.ac.id/">Prodi Lainnya</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/matana_univ/?hl=en">
              <Button variant="outline" size="icon">
                <Instagram />
              </Button>
            </Link>
            <Link href="https://www.facebook.com/MatanaUniversity/?locale=id_ID">
              <Button variant="outline" size="icon">
                <Facebook />
              </Button>
            </Link>
            <Link href="https://wa.me/081287775999">
              <Button variant="outline" size="icon">
                <Phone />
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground">
            ©{" "}
            <a href="https://github.com/brijr/components">Matana University</a>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
