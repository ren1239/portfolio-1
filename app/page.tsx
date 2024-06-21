import Image from "next/image";
import CenterZoomParallaxRT from "./Components/Hero/CenterZoomParallaxRT";
import WoopText from "./Components/WoopText";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="">
      <WoopText />
      <CenterZoomParallaxRT />
      <Contact />
    </main>
  );
}
