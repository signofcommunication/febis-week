// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "../../../components/craft";

// Icon imports
import { Coins, ArrowRight } from "lucide-react";

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
        <div className="flex flex-col">
          <h3 className="text-4xl text-center mb-3">
            <Balancer>Past Sponsors</Balancer>
          </h3>

          <hr />

          <div className="mt-6 flex items-center">
            {featureText.map(({ image }, index) => (
              <Image
                src={image}
                width={"150"}
                height={"150"}
                alt="Picture of the author"
                className="m-auto"
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
