import { Container, Section } from "@/components/craft";
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import FeaturedImageGallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Febis Week 2023",
};

type FeatureDescription = {
  text: string;
};

const textDescription: FeatureDescription[] = [
  {
    text: `Seminar dengan topik “Circular Economy dari Pengelolaan Sampah
           dengan Penerapan 3R (Reduce, Reuse, Recycle) yang diisi oleh
           Ibu Wistinoviani Adnin, SH, Msi selaku Kepala Sub Divisi
           Ekonomi Sirkular Kementerian Lingkungan Hidup dan Kehutanan.
           Pada seminar tersebut, ia menekankan dengan adanya
           pemberhentian pembangunan TPA pada akhir 2030, penguraian
           sampah harus dimulai dari diri sendiri.`,
  },
  {
    text: `Workshop dengan judul “Peran Pengelolaan Daur Ulang Sampah
          dalam Pertumbuhan Ekonomi Berkelanjutan” yang dijelaskan oleh
          Ibu Aulia Rachmawati. Dalam workshop kali ini, pembicara
          mengundang beberapa siswa/i SMA/SMK serta beberapa mahasiswa/i
          Universitas Matana untuk mempraktikannya secara langsung.`,
  },
  {
    text: `Kompetisi Debat yang diselenggarakan oleh prodi Hospitality
          dan Pariwisata dengan tema “Critical Approach on
          Sociopreneurship” yang diikuti oleh berbagai siswa/i dari
          SMA/SMK se-Jabodetabek. Dalam Debate Tourism Competition,
          peserta adu pemahaman mengenai isu-isu terkini dalam industri
          pariwisata. Kemenangan pun diraih oleh SMKN 5 Kab. Tangerang
          di posisi pertama, Juara 2 dan 3 diraih oleh SMKN 3 Kota
          Tangerang, dan Juara Harapan 1 diraih oleh SMA Erenos.`,
  },
  {
    text: `Lomba Prodi Manajemen dengan judul "Creating sustainable
           business plan for a better future" diselenggarakan dengan
           baik, tiap peserta mempresentasikan ide produk dan prototype
           produknya dengan menarik. Juara 1 diraih oleh SMA Erenos,
           Juara 2 diraih oleh SMK Atisa Dipamkara, Juara 3 diraih oleh
           SMA Cinta Kasih Tzu Chi, dan Juara Harapan 1 diraih oleh SMK
           Islam Insan mulia.`,
  },
  {
    text: `Lomba cerdas cermat yang diselenggarakan oleh prodi Akuntansi
          dengan tema "Accounting Competition in Order to Build
          Sustainability Environmental Accounting (Action to Sea)"
          diselenggarakan dengan meriah. Peserta diuji dengan
          pengetahuan dan ketangkasannya dalam menjawab pertanyaan
          seputar akuntansi. Juara 1 diraih oleh SMKN 20 Jakarta, Juara
          2 dan 3 diraih dari SMK Dharma Widya dan Juara Harapan 1
          kembali diraih oleh SMKN 20 Jakarta.`,
  },
];

export default function Page() {
  return (
    <Section>
      <Container className="mt-24">
        <h1 className="text-3xl text-center font-bold pb-8">
          <Balancer>FEBIS WEEK 2023</Balancer>
        </h1>
        <p className="text-justify">
          Fakultas Ekonomi, Bisnis, dan Ilmu Sosial (FEBIS) Universitas Matana
          menggelar acara tahunan FEBIS WEEK dengan tema `Sustainable and
          Innovation Economy`. Acara yang berlangsung dari tanggal 28 Agustus
          hingga 2 September 2023 ini sukses menarik minat ratusan peserta dari
          berbagai SMA/SMK se-Jabodetabek. Febis Week 2023 diselenggarakan
          dengan meriah, dan mengundang beberapa pembicara, serta juri-juri yang
          ahli dalam bidang masing-masing. Banyak siswa/i SMA/SMK se-Jabodetabek
          yang mengikuti lomba dan terdapat beberapa siswa/i yang menampilkan
          bakatnya dalam acara penutupan Febis Week 2023 di Tangcity Mall
          Tangerang.
        </p>
        <br />
        <br />
        <Balancer>
          FEBIS WEEK 2023 menghadirkan beberapa kegiatan menarik, yaitu
        </Balancer>

        <ul className="list-decimal list-inside">
          {textDescription.map((value, index) => (
            <li key={index} className="text-justify">
              {value.text}
            </li>
          ))}
        </ul>
        <br />
        <br />
        <FeaturedImageGallery />
      </Container>
    </Section>
  );
}
