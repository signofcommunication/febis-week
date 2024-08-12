import { Container, Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";
interface Competitions {
  id: string;
  title: string;
  image: string;
  date: string;
  description: string;
  booklet: string;
  link: string;
}

const data: Competitions[] = [
  {
    id: "essay-debat",
    title: "lomba essay debat",
    image: "/lomba-essay-debat.png",
    date: "30 0ktober 2024",
    description:
      "Lomba dengan tema <b>“Sustainable Creative Economic Innovation”</b> diciptakan dengan tujuan untuk melihat kemampuan para peserta dalam berkompetisi <b>memberikan perdebatan antara pro dan kontra, serta cara memberikan kesimpulan dalam pemecahan suatu masalah</b> yang sedang terjadi pada jaman sekarang terutama yang berhubungan dengan ekonomi kreatif.",
    booklet:
      "https://drive.google.com/file/d/1rqpdzbftuyKPic0Y5F5pzrdQO7Z_eRIr/view?usp=drive_link ",
    link: "/registration",
  },
  {
    id: "cerdas-cermat",
    title: "lomba cerdas cermat akuntansi",
    image: "/lomba-cerdas-cermat-akuntansi.png",
    date: "31 0ktober 2024",
    description: `Lomba akuntansi dengan tema <b>"Navigating the Financial Landscape of the Creative Economy through Accounting Challenges"</b> diharapkan dapat membantu mempersiapkan generasi muda yang kompeten dalam akuntansi untuk mendukung kemajuan industri kreatif.`,
    booklet:
      "https://drive.google.com/file/d/1oQUTltF0MvjiD8wEPeZirK7rSATn-1yd/view?usp=drive_link ",
    link: "/registration",
  },
  {
    id: "desain-produk",
    title: "lomba desain produk",
    image: "/lomba-desain-produk.png",
    date: "1 November 2024",
    description:
      "Melalui lomba desain produk dengan tema <b>“Generating Creative Economy Potential with Sustainable Product Design”</b>, peserta akan didorong untuk mengembangkan suatu ide produk yang inovatif dan berkelanjutan untuk meningkatkan potensi ekonomi kreatif di Indonesia.",
    booklet:
      "https://drive.google.com/file/d/1VNfT7Z3bgs-ojyNgNexT7_43kxrBtMGk/view?usp=drive_link ",
    link: "/registration",
  },
];

export default function Competitions({ params }: { params: { slug: string } }) {
  const value = data.filter(d => d.id === params.slug)[0];

  return (
    <Section>
      <Container className="mt-24">
        <h1 className="text-3xl uppercase font-bold text-center">
          <Balancer>{value.title.toUpperCase()}</Balancer>
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
            <div className="information p-0 sm:px-8 text-justify">
              <span className="font-bold text-xl">Information</span>
              <ul className="list-disc px-4">
                <li>Peserta: siswa/i SMA/SMK/sederajat</li>
                <li>
                  Ketentuan tim: Tim terdiri dari 3 orang dari sekolah yang sama
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center ">
          <Link
            className="focus:outline-none text-black	 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            href={value.booklet}
          >
            Booklet
          </Link>
          <Link
            className="focus:outline-none text-black	 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            href={value.link}
          >
            Daftar Sekarang
          </Link>
        </div>
      </Container>
    </Section>
  );
}
