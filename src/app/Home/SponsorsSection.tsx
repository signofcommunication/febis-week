import { Section } from "@/components/craft";
import MediaSponsor from "./MediaSponsor";
import Sponsor from "./Sponsor";

export default function SponsorSection() {
  return (
    <Section
      className="w-screen justify-center flex flex-col px-4 sm:flex-row"
      id="sponsors-section"
    >
      <Sponsor />
      <MediaSponsor />
    </Section>
  );
}
