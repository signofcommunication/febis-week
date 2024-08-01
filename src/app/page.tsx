import Hero from "./Home/Hero";
import About from "./Home/About";
import Sponsor from "./Home/Sponsor";
import MediaSponsor from "./Home/MediaSponsor";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Hero />
      <About />
      <Sponsor />
      <MediaSponsor />
      <Footer />
    </main>
  );
}
