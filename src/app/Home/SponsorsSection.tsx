import MediaSponsor from "./MediaSponsor";
import Sponsor from "./Sponsor";

export default function SponsorSection() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sponsor />
      <MediaSponsor />
    </div>
  );
}
