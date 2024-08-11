import Hero from "./Home/Hero";
import About from "./Home/About";
import Programs from "./Home/Programs";
import Recap from "./Home/Recap";
import SponsorSection from "./Home/SponsorsSection";
import Timeline from "./Home/Timeline";
import CountDown from "@/components/coundown-timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Hero />
      <About />
      <Programs />
      <Recap />
      <SponsorSection />
      <CountDown />
      <Timeline />
    </main>
  );
}
