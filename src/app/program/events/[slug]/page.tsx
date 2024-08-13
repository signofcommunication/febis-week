import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

interface Events {
  id: string;
  image: string;
  date: string;
  description: string;
  description2?: string;
  description3?: string;
  link: string;
}

const data: Events[] = [
  {
    id: "workshop",
    image: "/foto-workshop-tea-coffee.png",
    date: "29 Oktober 2024",
    description: `Febis Week 2024 akan mengadakan workshop <b>“Coffee & Tea Making”</b> yang akan dibawakan oleh barista & tea master yang profesional dalam bidang tersebut.`,
    description2:
      "Acara workshop ini akan menampilkan <b>demonstrasi pembuatan kopi & teh, pelatihan pembuatan latte art,</b> <b>serta pengenalan jenis jenis teh & kopi.</b>",
    description3:
      "Melalui workshop ini, diharapkan dapat menambah skill serta pengetahuan siswa/i dan mahasiswa/i untuk dapat <b>membuka peluang usaha baru</b> untuk pengembangan <b>industri ekonomi kreatif</b> di Indonesia.",
    link: "/registration",
  },
  {
    id: "seminar",
    image: "/AXL05229.jpg",
    date: "25 Oktober 2024",
    description: `Febis Week 2024 akan menyelenggarakan seminar dengan tema <b>“Empowering Tomorrow's Leaders: Fostering Youth in the Creative Economy for Sustainable Growth”</b> yang akan dibawakan langsung oleh <b>pembicara dari Kementerian Pariwisata dan Ekonomi Kreatif (Kemenparekraf)</b> yang diharapkan dapat meningkatkan dan membekali generasi muda dengan keterampilan dan pengetahuan yang diperlukan untuk sukses dalam ekonomi kreatif.`,
    description2:
      "Seminar ini akan berlangsung di Universitas Matana dan turut mengundang siswa siswi SMA/SMK sederajat sebagai peserta seminar.",
    link: "/registration",
  },
];

export default function Events({ params }: { params: { slug: string } }) {
  const value = data.filter(d => d.id === params.slug)[0];

  return (
    <Section>
      <Container className="mt-24">
        <h1 className="text-3xl uppercase font-bold text-center">
          <Balancer>{value.id}</Balancer>
        </h1>
        <h1 className="text-xl uppercase font-bold text-center">
          <Balancer>{value.date}</Balancer>
        </h1>
        <div className="flex flex-col sm:flex-row pt-8">
          <Image
            src={value.image}
            alt={`${value.id}-image`}
            quality={100}
            sizes="100vw"
            width={500}
            height={500}
          />
          <div>
            <p
              className="p-0 sm:px-8 text-justify"
              dangerouslySetInnerHTML={{ __html: value.description }}
            ></p>
            <br />
            {value.description2 && (
              <p
                className="p-0 sm:px-8 text-justify"
                dangerouslySetInnerHTML={{ __html: value.description2 }}
              ></p>
            )}
            <br />
            {value.description3 && (
              <p
                className="p-0 sm:px-8 text-justify"
                dangerouslySetInnerHTML={{ __html: value.description3 }}
              ></p>
            )}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center ">
          <Link
            className="focus:outline-none text-black	 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            href={value.link}
          >
            Registration
          </Link>
        </div>
      </Container>
    </Section>
  );
}
