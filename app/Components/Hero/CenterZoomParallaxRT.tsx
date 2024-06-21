"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { images } from "@/app/lib/images";

export default function CenterZoomParallaxRT() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  type ImageType = {
    src: StaticImageData;
    scaleValue: MotionValue<number>;
    top?: string;
    left?: string;
    width?: string;
    height?: string;
  };

  const Images: ImageType[] = [
    {
      src: images[3],
      scaleValue: scale4,
    },
    {
      src: images[9],
      scaleValue: scale5,
      top: "0vh",
      left: "45vw",
      width: "15vw",
      height: "35vh",
    },
    {
      src: images[6],
      scaleValue: scale6,
      top: "32vh",
      left: "20vw",
      width: "15vw",
      height: "50vh",
    },
    {
      src: images[0],
      scaleValue: scale9,
      top: "65vh",
      left: "37vw",
      width: "15vw",
      height: "30vh",
    },
    {
      src: images[5],
      scaleValue: scale9,
      top: "13vh",
      left: "65vw",
      width: "20vw",
      height: "50vh",
    },
    {
      src: images[7],
      scaleValue: scale9,
      top: "65vh",
      left: "54vw",
      width: "20vw",
      height: "15vh",
    },
  ];

  return (
    <div className=" ">
      <div ref={targetRef} className=" h-[300vh] relative">
        {/* Container Dov */}
        <div className="sticky top-0 h-screen  bg-gray-100 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          {/* Sticky Div */}
          {Images.map(
            ({ src, scaleValue, top, left, width, height }, index) => (
              <motion.div
                key={index}
                style={{ scale: scaleValue }}
                className="w-full h-full absolute top-0 flex justify-center items-center"
              >
                {/* Element Div */}
                <motion.div
                  className="w-[25vw] h-[25vh] absolute "
                  style={{ top: top, left: left, width: width, height: height }}
                >
                  {/* Image Div */}
                  <Image
                    src={src}
                    alt="image"
                    className=" object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                  />
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
    // Countainer Div
  );
}

const Copy = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.5, 1]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const copyY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["10%", "10%", "0%"]
  );
  return (
    <motion.div
      style={{ scale: copyScale, opacity: copyOpacity, y: copyY }}
      className=" absolute  flex flex-col gap-6 items-center justify-center w-full h-full mx-auto z-10"
    >
      <h1 className=" text-neutral-900  tracking-tighter text-center font-bold text-5xl md:text-7xl max-w-4xl">
        Experience Worlds
        <br /> Unseen
      </h1>
      <p className="text-neutral-900 text-center max-w-xl text-[8px] md:text-sm  ">
        Discover a gallery of stunning photographs that tell a thousand stories.
        Let our lens turn your precious moments into timeless works of art.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-black rounded-full bg-opacity-70 text-white transition-colors font-medium">
          Explore More
        </button>
        <button className="px-4 py-2   bg-white bg-opacity-15 text-black  rounded-full transition-colors font-medium">
          Book a Call
        </button>
      </div>
    </motion.div>
  );
};
