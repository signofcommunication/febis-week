import { Container, Section } from "../../../components/craft";
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "About",
  description: "Tentang Febis Week 2024",
};

export default function About() {
  return (
    <Section
      className="
    relative backdrop-blur-sm
    indent-4 md:indent-0"
    >
      <Container
        className="
      flex flex-col gap-8
      indent-4 md:indent-0 mt-24"
      >
        <h1 className="font-bold text-center text-4xl">
          <Balancer>This Years Grand Theme</Balancer>
        </h1>

        <h1 className="font-bold text-center text-2xl">
          <Balancer>Creative Economy For Sustainable Development</Balancer>
        </h1>

        <h5
          className="
        rounded-md border bg-muted/50 p-4 text-muted-foreground
        indent-4 md:indent-0 text-justify text-xl"
        >
          Dalam acara tahun ini, FEBIS WEEK mengangkat tema{" "}
          <b>“Creative Economy For Sustainable Development”.</b> Tema ini
          dipilih dengan tujuan membentuk generasi muda untuk memiliki jiwa yang
          kreatif dan inovatif berlandaskan pada pembangunan berkelanjutan.
          Ekonomi kreatif sendiri merupakan proses ekonomi yang termasuk
          kegiatan produksi dan distribusi barang serta jasa di dalamnya yang
          membutuhkan gagasan dan ide kreatif serta kemampuan intelektual dalam
          membangunnya. Dengan ekonomi kreatif, masyarakat dituntut untuk
          berfikir kreatif dan inovatif untuk mengembangkan produk produk yang
          lebih ramah lingkungan. Maka dari itu, ekonomi kreatif adalah sektor
          yang esensial dalam mendorong pertumbuhan ekonomi yang berkelanjutan
          dan terwujudnya tujuan SDGs, salah satunya pengentasan kemiskinan dan
          pelestarian lingkungan.
        </h5>
        <h5
          className="
        rounded-md border bg-muted/50 p-4 text-muted-foreground
        indent-4 md:indent-0 flex justify-center items-center flex-col text-justify text-xl"
        >
          Dalam kegiatan FEBIS WEEK 2024, kami bermaksud untuk mensosialisasikan
          pentingnya sektor ekonomi kreatif dengan berbagai kegiatan yaitu
          cerdas cermat, debat, dan design product. Selain itu, kegiatan ini
          juga didukung dengan diadakannya seminar dan worksho juga bertemakan
          ekonomi kreatif.
        </h5>
      </Container>
    </Section>
  );
}
