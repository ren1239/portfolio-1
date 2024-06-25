"use client";

import React, { useRef } from "react";
import MD01 from "../../../public/MD01.png";
import MD02 from "../../../public/MD02.png";
import MD03 from "../../../public/MD03.png";
import { useScroll, useTransform, motion } from "framer-motion";

export default function MultiLayerParallax() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "160%"]);

  const raiseVariant = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <div
      ref={targetRef}
      className="w-screen h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        variants={raiseVariant}
        initial="initial"
        whileInView="animate"
        className="text-white absolute right-40 top-12 z-40 flex flex-col uppercase text-xs font-light"
      >
        Korean | New Zealand
      </motion.div>
      <motion.div
        variants={raiseVariant}
        initial="initial"
        whileInView="animate"
        className="text-white absolute bottom-4 left-4 z-40 flex flex-col uppercase text-6xl font-light"
      >
        <span>New EP DROPPING </span>{" "}
        <span className=" pl-24 flex items-center gap-4 ">
          JUNE 24
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }} // Animates opacity from 0 to 1 to 0
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1 }}
            className=" w-10 h-10 bg-white"
          />
        </span>
      </motion.div>
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-20"
      >
        MICRODOT
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          y: backgroundY,
          backgroundImage: `url('/MD01.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          y: foregroundY,
          backgroundImage: `url('/MD02.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: `url('/MD03.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
