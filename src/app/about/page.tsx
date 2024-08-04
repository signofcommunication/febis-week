import { Container, Section } from "../../../components/craft";

export default function About() {
  return (
    <Section
      className="
    relative backdrop-blur-sm
    indent-4 md:indent-0 p-24"
    >
      <Container
        className="
      flex flex-col gap-8
      indent-4 md:indent-0 p-24"
      >
        <h5
          className="
        rounded-md border bg-muted/50 p-4 text-muted-foreground
        indent-4 md:indent-0"
        >
          Universitas Matana adalah sebuah universitas swasta dibawah naungan
          Paramount Group sebagai salah satu developer properti raksasa di
          Indonesia. Setiap tahunnya, Fakultas Ekonomi Bisnis dan Ilmu Sosial
          (FEBIS) Universitas Matana mengadakan event kompetisi tahunan yang
          diikuti oleh siswa/i SMA/SMK yaitu FEBIS WEEK.
        </h5>
        <h5
          className="
        rounded-md border bg-muted/50 p-4 text-muted-foreground
        indent-4 md:indent-0  "
        >
          Dalam acara tahun ini, FEBIS WEEK mengangkat tema “CREATIVE ECONOMY
          FOR SUSTAINABLE DEVELOPMENT”. Tema ini dipilih dengan tujuan membentuk
          generasi muda untuk memiliki jiwa yang kreatif dan inovatif
          berlandaskan pada pembangunan berkelanjutan. Ekonomi kreatif sendiri
          merupakan proses ekonomi yang termasuk kegiatan produksi dan
          distribusi barang serta jasa di dalamnya yang membutuhkan gagasan dan
          ide kreatif serta kemampuan intelektual dalam membangunnya. Dengan
          ekonomi kreatif, masyarakat dituntut untuk berfikir kreatif dan
          inovatif untuk mengembangkan produk produk yang lebih ramah
          lingkungan. Maka dari itu, ekonomi kreatif adalah sektor yang esensial
          dalam mendorong pertumbuhan ekonomi yang berkelanjutan dan terwujudnya
          tujuan SDGs, salah satunya pengentasan kemiskinan dan pelestarian
          lingkungan.
        </h5>
        <h5
          className="
        rounded-md border bg-muted/50 p-4 text-muted-foreground
        indent-4 md:indent-0  "
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
