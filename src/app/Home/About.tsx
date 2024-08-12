import Balancer from "react-wrap-balancer";
import { Container, Section } from "../../../components/craft";

const About = () => {
  return (
    <Section>
      <h1 className="text-center text-4xl font-bold my-4">
        <Balancer>Febis Week 2024</Balancer>
      </h1>
      <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground text-xl sm:text-center sm:text-lg text-justify">
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
