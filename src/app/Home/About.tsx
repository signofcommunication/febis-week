import Balancer from "react-wrap-balancer";
import { Section } from "../../../components/craft";

const About = () => {
  return (
    <Section id="about-banner" className="w-screen">
      <h1 className="text-center text-4xl font-bold my-4 text-white">
        <Balancer>Febis Week 2024</Balancer>
      </h1>
      <h3 className="rounded-md p-4 text-white text-3xl text-center text-lg">
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
