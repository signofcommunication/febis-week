import { Container, Main, Section } from "@/components/craft";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

type FeatureText = {
  image: string;
};

const featureText: FeatureText[] = [
  {
    image: "/AXL05209.jpg",
  },
  {
    image: "/AXL05211.jpg",
  },
];

export default function Page() {
  return (
    <Main className="p-24">
      <Section>
        <Container>
          <Balancer>
            Fakultas Ekonomi, Bisnis, dan Ilmu Sosial (FEBIS) Universitas Matana
            menggelar acara tahunan FEBIS WEEK dengan tema `Sustainable and
            Innovation Economy`. Acara yang berlangsung dari tanggal 28 Agustus
            hingga 2 September 2023 ini sukses menarik minat ratusan peserta
            dari berbagai SMA/SMK se-Jabodetabek. Febis Week 2023
            diselenggarakan dengan meriah, dan mengundang beberapa pembicara,
            serta juri-juri yang ahli dalam bidang masing-masing. Banyak siswa/i
            SMA/SMK se-Jabodetabek yang mengikuti lomba dan terdapat beberapa
            siswa/i yang menampilkan bakatnya dalam acara penutupan Febis Week
            2023 di Tangcity Mall Tangerang.
          </Balancer>
          <br />
          <br />
          <Balancer>
            FEBIS WEEK 2023 menghadirkan beberapa kegiatan menarik, yaitu
          </Balancer>

          <ol className="list-decimal">
            <li>
              <div className="flex">
                <div className="flex justify-center items-center w-2/4	">
                  <Balancer>
                    Seminar dengan topik “Circular Economy dari Pengelolaan
                    Sampah dengan Penerapan 3R (Reduce, Reuse, Recycle) yang
                    diisi oleh Ibu Wistinoviani Adnin, SH, Msi selaku Kepala Sub
                    Divisi Ekonomi Sirkular Kementerian Lingkungan Hidup dan
                    Kehutanan. Pada seminar tersebut, ia menekankan dengan
                    adanya pemberhentian pembangunan TPA pada akhir 2030,
                    penguraian sampah harus dimulai dari diri sendiri.
                  </Balancer>
                </div>
                <div className="flex flex-col w-2/4	">
                  {featureText.map(({ image }, index) => (
                    <Image
                      src={image}
                      width={"300"}
                      height={"200"}
                      alt="Picture of the author"
                      className="m-auto"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div className="flex ">
                <div className="flex justify-center items-center w-2/4	">
                  <Balancer>
                    Workshop dengan judul “Peran Pengelolaan Daur Ulang Sampah
                    dalam Pertumbuhan Ekonomi Berkelanjutan” yang dijelaskan
                    oleh Ibu Aulia Rachmawati. Dalam workshop kali ini,
                    pembicara mengundang beberapa siswa/i SMA/SMK serta beberapa
                    mahasiswa/i Universitas Matana untuk mempraktikannya secara
                    langsung.
                  </Balancer>
                </div>
                <div className="flex flex-col w-2/4	">
                  {featureText.map(({ image }, index) => (
                    <Image
                      src={image}
                      width={"300"}
                      height={"200"}
                      alt="Picture of the author"
                      className="m-auto"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row-reverse">
                <div className="flex justify-center items-center w-2/4	">
                  <Balancer>
                    Kompetisi Debat yang diselenggarakan oleh prodi Hospitality
                    dan Pariwisata dengan tema “Critical Approach on
                    Sociopreneurship” yang diikuti oleh berbagai siswa/i dari
                    SMA/SMK se-Jabodetabek. Dalam Debate Tourism Competition,
                    peserta adu pemahaman mengenai isu-isu terkini dalam
                    industri pariwisata. Kemenangan pun diraih oleh SMKN 5 Kab.
                    Tangerang di posisi pertama, Juara 2 dan 3 diraih oleh SMKN
                    3 Kota Tangerang, dan Juara Harapan 1 diraih oleh SMA
                    Erenos.
                  </Balancer>
                </div>
                <div className="flex flex-col w-2/4	">
                  {featureText.map(({ image }, index) => (
                    <Image
                      src={image}
                      width={"300"}
                      height={"200"}
                      alt="Picture of the author"
                      className="m-auto"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row-reverse">
                <div className="flex justify-center items-center w-2/4	">
                  <Balancer>
                    Lomba Prodi Manajemen dengan judul `Creating sustainable
                    business plan for a better future` diselenggarakan dengan
                    baik, tiap peserta mempresentasikan ide produk dan prototype
                    produknya dengan menarik. Juara 1 diraih oleh SMA Erenos,
                    Juara 2 diraih oleh SMK Atisa Dipamkara, Juara 3 diraih oleh
                    SMA Cinta Kasih Tzu Chi, dan Juara Harapan 1 diraih oleh SMK
                    Islam Insan mulia.
                  </Balancer>
                </div>
                <div className="flex flex-col w-2/4	">
                  {featureText.map(({ image }, index) => (
                    <Image
                      src={image}
                      width={"300"}
                      height={"200"}
                      alt="Picture of the author"
                      className="m-auto"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row-reverse">
                <div className="flex justify-center items-center w-2/4	">
                  <Balancer>
                    Lomba cerdas cermat yang diselenggarakan oleh prodi
                    Akuntansi dengan tema `Accounting Competition in Order to
                    Build Sustainability Environmental Accounting (Action to
                    Sea)` diselenggarakan dengan meriah. Peserta diuji dengan
                    pengetahuan dan ketangkasannya dalam menjawab pertanyaan
                    seputar akuntansi. Juara 1 diraih oleh SMKN 20 Jakarta,
                    Juara 2 dan 3 diraih dari SMK Dharma Widya dan Juara Harapan
                    1 kembali diraih oleh SMKN 20 Jakarta.
                  </Balancer>
                </div>
                <div className="flex flex-col w-2/4	">
                  {featureText.map(({ image }, index) => (
                    <Image
                      src={image}
                      width={"300"}
                      height={"200"}
                      alt="Picture of the author"
                      className="m-auto"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </li>
          </ol>
        </Container>
      </Section>
    </Main>
  );
}
