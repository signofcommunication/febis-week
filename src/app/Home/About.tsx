import Balancer from "react-wrap-balancer";
import { Section } from "../../../components/craft";

const About = () => {
  return (
    <Section id="about-banner" className="w-8/12 my-20 sm:w-10/12">
      <h1 className="text-center text-4xl font-bold my-4">
        <Balancer>Febis Week 2024</Balancer>
      </h1>
      <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground text-3xl text-center text-lg">
        <Balancer>
          Febis week merupakan acara yang rutin dilakukan setiap tahunnya oleh
          Fakultas Ekonomi, Bisnis, dan Ilmu Sosial Universitas Matana. Febis
          week merupakan rangkaian acara seminar, workshop, dan kompetisi yang
          melibatkan siswa siswi SMA/SMK. Tahun ini, Febis Week mengusung tema
          Creative <b>Economy for Sustainable Development</b>
        </Balancer>
      </h3>
    </Section>
  );
};

export default About;
