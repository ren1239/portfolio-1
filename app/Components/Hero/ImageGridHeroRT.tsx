"use client";
import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";

export default function ImageGridHeroRT() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  return (
    <>
      <Nav scrollYProgress={scrollYProgress} />
      <section className="bg-white h-[350vh] " ref={targetRef}>
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-row-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <MotionImages scrollYProgress={scrollYProgress} />
          <Circles />
        </div>
      </section>
      <section className=" bg-slate-700 h-screen"></section>
    </>
  );
}

// Navigation bar. We pass the scroll value to the navigation bar.
//If the scroll passes the target, the nav background will turn black

const Nav = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const background = useTransform(scrollYProgress, (i: number) =>
    i === 1 ? "rgb(13,10,9" : "transparent"
  );

  return (
    <motion.nav
      style={{ background }}
      className="flex items-center justify-between px-4 py-2 fixed top-0 left-0 right-0 z-40 transition-colors"
    >
      <div className="flex gap-2 text-lg text-white items-center">
        <AiFillFileImage className="text-xl" />
        <span className="font-bold">REN TAN</span>
      </div>
      <button className=" text-sm hover:opacity-90 transition-opacity font-semibold p-2  bg-slate-200 flex items-center gap-2">
        <AiFillApple className="text-lg" />
        <span>Download</span>
      </button>
    </motion.nav>
  );
};

// Circles sit in the background. Top Left and Top Right, they sit in a sticky div

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-8 border-slate-200 rounded-full absolute left-0 top-0 -translate-x-[50%]  -translate-y-[50%]"></div>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-8 border-slate-200 rounded-full absolute right-0 bottom-0 translate-x-[50%]  translate-y-[50%]"></div>
  </>
);

const Copy = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "10%"]);
  return (
    <motion.div
      style={{ scale: copyScale, opacity: copyOpacity, y: copyY }}
      className="absolute  flex flex-col gap-6 items-center justify-center w-full h-full mx-auto"
    >
      <h1 className="text-center font-semibold text-5xl md:text-7xl max-w-4xl">
        Capturing Moments
        <br /> Crafting Memories
      </h1>
      <p className="text-center max-w-xl text-xs md:text-base  ">
        Discover a gallery of stunning photographs that tell a thousand stories.
        Let our lens turn your precious moments into timeless works of art.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-green-600 text-white transition-colors font-medium">
          Explore the Gallery
        </button>
        <button className="px-4 py-2 border-2 border-green-600 transition-colors font-medium">
          Book your Session
        </button>
      </div>
    </motion.div>
  );
};

// Array of image URLs
const imageUrls = [
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1552046122-03184de85e08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNraW5jYXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1594843310428-7eb6729555e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1516220362602-dba5272034e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxza2luY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
];

// Array of transformation details
const imageTransforms = [
  { x: ["-35%", "0%"], y: ["-35%", "0%"], className: "col-span-2" },
  { x: ["10%", "0%"], y: ["-20%", "0%"], className: "row-span-3" },
  { x: ["10%", "0%"], y: ["5%", "0%"], className: "row-span-2" },
  { x: ["25%", "0%"], y: ["-120%", "0%"], className: "" },
  { x: ["60%", "0%"], y: ["10%", "0%"], className: "" },
  // { x: ["25%", "0%"], y: ["25%", "0%"], className: "" },
];

const MotionImages = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <>
      {imageUrls.map((url, index) => {
        const {
          x: xTransform,
          y: yTransform,
          className,
        } = imageTransforms[index];
        const x = useTransform(scrollYProgress, [0, 1], xTransform);
        const y = useTransform(scrollYProgress, [0, 1], yTransform);

        return (
          <motion.div
            key={index}
            className={`relative z-10 ${className}`}
            style={{
              backgroundImage: `url(${url}) `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scale,
              y,
              x,
            }}
          />
        );
      })}
    </>
  );
};
