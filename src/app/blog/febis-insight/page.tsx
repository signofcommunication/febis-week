import { Container, Section } from "@/components/craft";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function Page() {
  return (
    <Section>
      <Container className="mt-24">
        <Balancer>
          SDN 4 Taman Sari, di kecamatan Gunungsari Lombok Barat menjadi sekolah
          pertama di dunia yang dibangun mengunakan bahan baku plastik blok.
          Bangunannya pun terlihat natural dan dapat tahan hingga 100 tahun.
        </Balancer>
        <Balancer>
          SDN 4 Tamansari berada di Dusun Medas Bentaur Desa Tamansari Kecamatan
          Gunungsari Kabupaten Lombok Barat. Lokasi sekolah ini persisnya berada
          di daerah perbukitan. Untuk bisa sampai ke sekolah ini, warga harus
          melewati jalan setapak dengan lebar kurang lebih 3 meter.
        </Balancer>
      </Container>
    </Section>
  );
}
