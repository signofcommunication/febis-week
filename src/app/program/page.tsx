import { Container, Main, Section } from "../../../components/craft";
import { ArrowUpRight } from "lucide-react";
import { Modal } from "@/components/modal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

type FAQItem = {
  title: string;
  description: string;
  description_2: string;
  link: string;
};

const content: FAQItem[] = [
  {
    title: "Seminar",
    description: `Era digital dan globalisasi telah membuka peluang baru bagi generasi muda untuk berkontribusi dalam pembangunan bangsa. Ekonomi kreatif, dengan segala potensinya, menjadi sektor yang menjanjikan bagi para pemuda untuk mengembangkan ide-ide kreatif dan inovatif mereka. `,
    description_2: `Universitas Matana akan menyelenggarakan seminar dengan tema “Empowering Tomorrow's Leaders: Fostering Youth in the Creative Economy for Sustainable Growth yang akan dibawakan langsung oleh pembicara dari Kementerian Pariwisata dan Ekonomi Kreatif (Kemenparekraf) yang diharapkan dapat meningkatkan dan membekali generasi muda dengan keterampilan dan pengetahuan yang diperlukan untuk sukses dalam ekonomi kreatif. Seminar ini akan berlangsung di Universitas Matana dan turut mengundang siswa siswi SMA sederajat dari beberapa sekolah sebagai peserta seminar.`,
    link: "https://google.com",
  },
  {
    title: "Workshop",
    description:
      "Industri kopi dan teh di Indonesia memiliki potensi besar dalam lingkup ekonomi kreatif. Hal ini dibuktikan dengan semakin maraknya kedai kopi dan teh di berbagai daerah, serta meningkatnya minat masyarakat terhadap minuman ini. Selain itu, kopi dan teh juga merupakan komoditas penting bagi perekonomian Indonesia, dengan Indonesia sebagai salah satu negara penghasil kopi dan teh terbesar di dunia. Maka dari itu, Universitas Matana memiliki keinginan untuk menyelenggarakan workshop bertemakan “Coffee & Tea Making”.",
    description_2: `Kedua workshop tersebut akan dibawakan oleh coffee & tea enthusiast yang profesional dalam bidang tersebut. Acara workshop ini akan menampilkan demonstrasi pembuatan kopi & teh, seperti pembuatan latte art, serta pengenalan dengan berbagai macam teh. Beberapa peserta dapat berkesempatan untuk mencobanya secara langsung. Melalui workshop ini, diharapkan dapat menambah skill serta pengetahuan siswa/i dan mahasiswa/i untuk dapat membuka peluang usaha baru untuk pengembangan industri ekonomi kreatif di Indonesia. `,
    link: "google.com",
  },
];

export default function Program() {
  return (
    <Main className="p-24">
      <Section>
        <Container>
          <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
            {content.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={"s"}
                  className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:w-3/4">
                    {item.link && (
                      <span className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100">
                        <Modal
                          title={item.title}
                          description={item.description}
                          description_2={item.description_2}
                          link={item.link}
                        />
                      </span>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </Container>
      </Section>
    </Main>
  );
}
