// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Icon imports
import { Facebook, Instagram, Phone } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Logo from "@/public/logo-matana.png";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
                <Link href="https://goo.gl/maps/CgDyA6nBBWuLCi687">
                  Jl. CBD Barat Kav. 1. Gading Serpong Tangerang - 15810,
                  Indonesia
                </Link>
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            {/* <h5>Program Studi</h5> */}
            <Link href="/">Manajemen</Link>
            <Link href="/">Hospitaliti dan Pariwisata</Link>
            <Link href="/">Akuntansi</Link>
            <Link href="/">Teknik Informatika</Link>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <Link href="/">Statistika</Link>
            <Link href="/">Fisika Medis</Link>
            <Link href="/">DKV</Link>
            <Link href="/">Arsitektur</Link>
            <Link href="/">K3</Link>
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
            © <a href="https://github.com/brijr/components">brijr/components</a>
            . All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
