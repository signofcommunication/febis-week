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
    image: "/kompas.png",
  },
  {
    image: "/mediaindonesia.png",
  },
  {
    image: "/sindonews.png",
  },
  {
    image: "/korantempo.png",
  },
  {
    image: "/tribunnews.png",
  },
  {
    image: "/tribunnews.png",
  },
  {
    image: "/tribunnews.png",
  },
];

const MediaSponsor = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col">
          <h3 className="text-4xl text-center mb-3">
            <Balancer>Media Sponsors</Balancer>
          </h3>

          <hr />

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            {featureText.map(({ image }, index) => (
              <Image
                src={image}
                width={"125"}
                height={"125"}
                alt="Picture of the author"
                className="mx-2"
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MediaSponsor;
