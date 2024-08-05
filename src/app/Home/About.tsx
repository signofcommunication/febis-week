import Balancer from "react-wrap-balancer";
import { Container, Section } from "../../../components/craft";

const About = () => {
  return (
    <Section>
      <h4 className="rounded-md border bg-muted/50 p-4 text-muted-foreground sm:text-center">
        <Balancer>
          Febis Week merupakan acara yang rutin dilakukan setiap tahunnya oleh
          fakultas ekonomi, bisnis, dan sosial Universitas Matana, tidak hanya
          menjadi acara yang dinanti-nantikan di kalender akademik, tetapi juga
          menjadi wadah penting bagi para siswa sekolah untuk merasakan
          pengalaman belajar yang mendalam di lingkungan universitas. Febis Week
          membantu mengasah pemikiran para siswa/i untuk lebih berpikir kritis,
          kreatif, dan inovatif. Tak hanya itu, acara ini juga menjadi platform
          bagi para siswa untuk mengembangkan jiwa kewirausahaan dan
          kepemimpinan, memupuk semangat mereka untuk menjadi agen perubahan
          yang berkontribusi bagi masa depan bangsa. Febis Week bukan sekadar
          acara tahunan, tetapi sebuah transformasi edukasi yang menjembatani
          dunia sekolah dan perkuliahan, mempersiapkan para siswa untuk masa
          depan yang penuh tantangan dan peluang.
        </Balancer>
      </h4>
    </Section>
  );
};

export default About;
