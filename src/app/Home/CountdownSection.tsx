import CountDown from "@/components/coundown-timer";
import { Section } from "@/components/craft";

export default function CountDownSection() {
  return (
    <Section className="w-screen" id="countdown-timer">
      <CountDown />
    </Section>
  );
}
