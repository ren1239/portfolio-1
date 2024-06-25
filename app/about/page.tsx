"use client";
import React, { useRef, useState } from "react";
import Paragraph from "../Components/TextGradient/Paragraph";
import Word from "../Components/TextGradient/Word";
import MultiLayerParallax from "../Components/Hero/MultiLayerParallax";
import FooterMD from "../Components/FooterMD";
import ImageToVideo from "../Components/ImageToVideo";
import { images } from "../lib/images";
import Cursor from "../Components/Cursor";

const paragraph0: string = `For The Road To Riches - Microdot
`;

const paragraph: string = `On the road riches on the road to handle business,
Here to do my thing here to make it big,
Going to make it shine I do what I like,
On the road young and reckless, cross shining down my necklace,`;

const paragraph2: string = `Micro D.O.T back in the scene yeah thats me,
93 hustle hard flexing it with sancheezy bruh
How we do lets make it rock, two steppin to the top,
Respect them haters let them know that I aint stoppin any more.
that I aint stoppin any more,`;

const paragraph3: string = `Going to flip the world, twisting verses you heard us,
banging on your ear drums wit tracks you never heard of,
Wooooah to me, we gone take a step further
Uh oh.... like i said before we banging on your ear drums`;

const imageSource = [
  {
    imgUrl: "/MD01.jpeg",
    videoUrl: "/MD04.mp4",
    alt: "album1",
  },
  {
    imgUrl: "/MD02.jpeg",
    videoUrl: "/MD04.mp4",
    alt: "album1",
  },
  {
    imgUrl: "/MD03.jpeg",
    videoUrl: "/MD04.mp4",
    alt: "album1",
  },
  {
    imgUrl:
      "https://tearaway.co.nz/wp-content/uploads/2017/08/Microdot-2-Culture-Think-29817-TWA-750x500.jpg",
    videoUrl: "/video.mp4",
    alt: "album1",
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="bg-black">
      <MultiLayerParallax />
      <div ref={ref} className="h-[10vh]">
        <Cursor followRef={ref} isHovered={isHovered} />
      </div>
      <div className="relative overflow-hidden">
        <Word value={paragraph0} />
        <Word value={paragraph} />
        <Word value={paragraph2} />
        <Word value={paragraph3} />
        <ImageToVideo imageSource={imageSource} />
      </div>

      <div className="h-[10vh]"></div>
      <FooterMD />
    </main>
  );
}
