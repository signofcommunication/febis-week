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
        <h3 className="text-4xl text-center mb-3">
          <Balancer>Past Sponsors</Balancer>
        </h3>
        <div className="flex flex-wrap justify-center">
          {" "}
          {/* Added flex-wrap for columns */}
          <hr />
          <div className="grid grid-cols-3 gap-4 items-center">
            {" "}
            {/* Grid for 3 columns */}
            {featureText.map(({ image }, index) => (
              <Image
                src={image}
                width="150"
                height="150"
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
