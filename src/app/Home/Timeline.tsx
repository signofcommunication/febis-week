import { Container, Section } from "../../../components/craft";
import Balancer from "react-wrap-balancer";

const Timeline = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">
        <Balancer>Timeline</Balancer>
      </h1>
      <div className="w-screen" id="timeline" />
    </>
  );
};

export default Timeline;
