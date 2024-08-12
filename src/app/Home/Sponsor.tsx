import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "../../../components/craft";

type FeatureText = {
  image: string;
};

const featureText: FeatureText[] = [
  {
    image: "/ocbc.png",
  },
  {
    image: "/brimo.png",
  },
  {
    image: "/chuga.png",
  },
  {
    image: "/ef.png",
  },
  {
    image: "/teachcast.png",
  },
];

const Sponsor = () => {
  return (
    <Section>
      <Container className="not-prose">
        <h3 className="text-4xl text-center font-bold mb-3">
          <Balancer>Past Sponsors</Balancer>
        </h3>
        <hr />
        <div className="flex flex-wrap justify-center">
          {" "}
          {/* Added flex-wrap for columns */}
          <div className="grid grid-cols-3 gap-4 items-center">
            {" "}
            {/* Grid for 3 columns */}
            {featureText.map(({ image }, index) => (
              <Image
                src={image}
                width="100"
                height="100"
                alt="Picture of the author"
                className="m-auto"
                quality={100}
                sizes="100vw"
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Sponsor;
