import { Container, Main, Section } from "../../../components/craft";
import { Modal } from "@/components/modal";
import { CompetitionModal } from "@/components/competetition_modal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

type ProgramItems = {
  title: string;
  description: string;
  description_2: string;
};

type CompetitionItems = {
  title_competition: string;
  title: string;
  description: string;
  description_2: string;
  description_3?: string;
  information_description: string;
  slug: string;
  link: string;
};

const content: ProgramItems[] = [
  {
    title: "Seminar",
    description: `Era digital dan globalisasi telah membuka peluang baru bagi generasi muda untuk berkontribusi dalam pembangunan bangsa. Ekonomi kreatif, dengan segala potensinya, menjadi sektor yang menjanjikan bagi para pemuda untuk mengembangkan ide-ide kreatif dan inovatif mereka. `,
    description_2: `Universitas Matana akan menyelenggarakan seminar dengan tema “Empowering Tomorrow's Leaders: Fostering Youth in the Creative Economy for Sustainable Growth yang akan dibawakan langsung oleh pembicara dari Kementerian Pariwisata dan Ekonomi Kreatif (Kemenparekraf) yang diharapkan dapat meningkatkan dan membekali generasi muda dengan keterampilan dan pengetahuan yang diperlukan untuk sukses dalam ekonomi kreatif. Seminar ini akan berlangsung di Universitas Matana dan turut mengundang siswa siswi SMA sederajat dari beberapa sekolah sebagai peserta seminar.`,
  },
  {
    title: "Workshop",
    description:
      "Industri kopi dan teh di Indonesia memiliki potensi besar dalam lingkup ekonomi kreatif. Hal ini dibuktikan dengan semakin maraknya kedai kopi dan teh di berbagai daerah, serta meningkatnya minat masyarakat terhadap minuman ini. Selain itu, kopi dan teh juga merupakan komoditas penting bagi perekonomian Indonesia, dengan Indonesia sebagai salah satu negara penghasil kopi dan teh terbesar di dunia. Maka dari itu, Universitas Matana memiliki keinginan untuk menyelenggarakan workshop bertemakan “Coffee & Tea Making”.",
    description_2: `Kedua workshop tersebut akan dibawakan oleh coffee & tea enthusiast yang profesional dalam bidang tersebut. Acara workshop ini akan menampilkan demonstrasi pembuatan kopi & teh, seperti pembuatan latte art, serta pengenalan dengan berbagai macam teh. Beberapa peserta dapat berkesempatan untuk mencobanya secara langsung. Melalui workshop ini, diharapkan dapat menambah skill serta pengetahuan siswa/i dan mahasiswa/i untuk dapat membuka peluang usaha baru untuk pengembangan industri ekonomi kreatif di Indonesia. `,
  },
];

const competitionContents: CompetitionItems[] = [
  {
    title_competition: "Accounting Competition",
    title:
      "Navigating the Financial Landscape of the Creative Economy through Accounting Challenges",
    description: `Di era ekonomi kreatif ini, banyak anak muda yang bersemangat untuk membangun usaha kreatif mereka sendiri. Namun, di balik ide-ide cemerlang dan kreasi yang memukau, tak jarang mereka dihadapkan pada kendala dalam mengelola keuangan usaha.`,
    description_2:
      'Pemahaman yang kurang memadai tentang akuntansi dapat menghambat kemajuan usaha kreatif mereka. Hal ini dapat terlihat dari beberapa fenomena, seperti adanya kesulitan dalam menghitung laba dan rugi usaha, ketidakmampuan dalam membuat perencanaan keuangan yang efektif, atau kesulitan dalam mengakses modal usaha karena kurangnya laporan keuangan yang memadai. Melihat fenomena tersebut, kami tergerak untuk menyelenggarakan lomba akuntansi dengan judul "Navigating the Financial Landscape of the Creative Economy through Accounting Challenges" yang diharapkan dapat membantu mempersiapkan generasi muda yang kompeten dalam akuntansi untuk mendukung kemajuan industri kreatif.',
    information_description:
      "Peserta pada kompetisi ini ditargetkan kepada para siswa/i SMA/SMK/sederajat dan Peserta yang didaftarkan merupakan siswa/i aktif sekolah yang bersangkutan.",
    slug: "Kompetisi ini akan diselenggarakan dalam bentuk Tim. Setiap sekolah tidak memiliki batasan tim untuk diikutsertakan didalam lomba, dengan syarat setiap tim terdiri dari 3 orang siswa/i.",
    link: "https://bit.ly/3Y4RxjY",
  },
  {
    title_competition: "Product Design Competition",
    title:
      "Generating Creative Economy Potential with Sustainable Product Design",
    description: `Dalam era globalisasi dan teknologi yang semakin canggih, ekonomi kreatif telah menjadi salah satu faktor penting dalam meningkatkan pertumbuhan ekonomi dan meningkatkan kualitas hidup masyarakat. Ekonomi kreatif tidak hanya berfokus pada produksi barang dan jasa, tetapi juga pada pengembangan ide dan inovasi yang dapat meningkatkan nilai tambah dan meningkatkan kualitas hidup masyarakat.`,
    description_2:
      "Desain produk yang berkelanjutan tidak hanya berfokus pada aspek estetika, tetapi juga pada aspek lingkungan dan sosial. Tujuan dari lomba ini adalah untuk mendorong pengembangan ide bisnis baru yang unik dan menjanjikan untuk para generasi muda. Produk yang berkelanjutan harus memiliki dampak yang positif pada lingkungan dan masyarakat, serta dapat meningkatkan kualitas hidup masyarakat.",
    description_3:
      "Melalui lomba “Generating Creative Economy Potential with Sustainable Product Design”, peserta akan didorong untuk mengembangkan suatu ide produk yang inovatif dan berkelanjutan untuk meningkatkan potensi ekonomi kreatif di Indonesia.",
    information_description:
      "Peserta pada kompetisi ini ditargetkan kepada para siswa/i SMA/SMK/sederajat dan Peserta yang didaftarkan merupakan siswa/i aktif sekolah yang bersangkutan.",
    slug: "Kompetisi ini akan diselenggarakan dalam bentuk Tim. Setiap sekolah tidak memiliki batasan tim untuk diikutsertakan didalam lomba, dengan syarat setiap tim terdiri dari 3 orang siswa/i.",
    link: "https://bit.ly/3Y35fnm",
  },
  {
    title_competition: "Essay & Debate Competition",
    title: "Sustainable Creative Economic Innovation",
    description: `Ekonomi Kreatif merupakan salah satu bagian yang besar dalam pengembangan masyarakat. Seiring berjalannya waktu, perkembangan bidang ekonomi pada akhirnya kembali kepada gagasan dan ide kreatif serta kemampuan intelektual dalam membangunnya. Kreativitas dan inovasi sangat dibutuhkan untuk mensinergikan berbagai sektor untuk memacu pertumbuhan ekonomi.`,
    description_2: `Maka dari itu, kegiatan lomba kami yang berjudul “Sustainable Creative Economic Innovation” diciptakan dengan tujuan untuk meningkatkan jiwa kreativitas dan mengembangkan kemampuan yang para siswa/i miliki. Lomba ini kami adakan untuk untuk melihat kemampuan para peserta dalam berkompetisi memberikan perdebatan antara pro dan kontra, serta cara memberikan kesimpulan dalam pemecahan suatu masalah yang sedang terjadi pada jaman sekarang terutama yang berhubungan dengan ekonomi kreatif.`,
    information_description:
      "Peserta pada kompetisi ini ditargetkan kepada para siswa/i SMA/SMK/sederajat dan Peserta yang didaftarkan merupakan siswa/i aktif sekolah yang bersangkutan.",
    slug: "Kompetisi ini akan diselenggarakan dalam bentuk Tim. Setiap sekolah tidak memiliki batasan tim untuk diikutsertakan didalam lomba, dengan syarat setiap tim terdiri dari 3 orang siswa/i.",
    link: "https://bit.ly/3WnhFFi",
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
                    <span className="mt-2 flex w-full justify-center items-center opacity-60 transition-all hover:opacity-100">
                      <Modal
                        title={item.title}
                        description={item.description}
                        description_2={item.description_2}
                      />
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
            {competitionContents.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={"s"}
                  className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.title_competition}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:w-3/4">
                    <span className="mt-2 flex w-full justify-center items-center opacity-60 transition-all hover:opacity-100">
                      <CompetitionModal
                        title={item.title}
                        description={item.description}
                        description_2={item.description_2}
                        description_3={item.description_3}
                        information_description={item.information_description}
                        slug={item.slug}
                        link={item.link}
                      />
                    </span>
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
