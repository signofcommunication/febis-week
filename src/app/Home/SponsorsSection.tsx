import MediaSponsor from "./MediaSponsor";
import Sponsor from "./Sponsor";

export default function SponsorSection() {
  return (
    <div
      className="w-screen justify-center flex flex-col sm:flex-row"
      id="sponsors-section"
    >
      <Sponsor />
      <MediaSponsor />
    </div>
  );
}
