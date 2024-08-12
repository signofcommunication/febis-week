import { Section, Container } from "@/components/craft";
import FebisInsightGallery from "@/components/gallery-febis-insight";
import Image from "next/image";

export default function Page() {
  return (
    <Section>
      <Container className="mt-24 flex flex-col justidy-center items-center">
        {/* <Image
          src="/febis-insight-1.jpg"
          width={700}
          height={700}
          alt="Image"
        /> */}
        <h1 className="text-3xl my-16 uppercase font-bold">sdn 4 taman sari</h1>
        <p className="text-justify">
          SDN 4 Taman Sari, di kecamatan Gunungsari Lombok Barat menjadi sekolah
          pertama di dunia yang dibangun mengunakan bahan baku plastik blok.
          Bangunannya pun terlihat natural dan dapat tahan hingga 100 tahun.
        </p>
        <br />
        <p className="text-justify">
          SDN 4 Tamansari berada di Dusun Medas Bentaur Desa Tamansari Kecamatan
          Gunungsari Kabupaten Lombok Barat. Lokasi sekolah ini persisnya berada
          di daerah perbukitan. Untuk bisa sampai ke sekolah ini, warga harus
          melewati jalan setapak dengan lebar kurang lebih 3 meter.
        </p>{" "}
        <br />
        <br />
        <FebisInsightGallery />
      </Container>
    </Section>
  );
}
