"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WoopText() {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-gray-100 text-black">
      <FlipText href="#">ER . STUDIO</FlipText>
    </section>
  );
}

const DURATION = 0.5;
const TRANSITION = 0.155;

const FlipText = ({ children, href }: { children: string; href: string }) => {
  return (
    <div className=" flex-col items-center justify-center w-full  ">
      <motion.a
        initial="initial"
        whileInView="hovered"
        transition={{ delay: 2 }}
        className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
        style={{ lineHeight: 0.75 }}
        href={href}
      >
        <div>
          {children.split("").map((l, i) => {
            return (
              <motion.span
                className=" inline-block text-gray-200"
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  delay: TRANSITION * i,
                  ease: "easeInOut",
                  duration: DURATION,
                }}
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => {
            return (
              <motion.span
                className="inline-block "
                transition={{
                  delay: TRANSITION * i,
                  ease: "easeInOut",
                  duration: DURATION,
                }}
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 3 }}
        whileInView={{ opacity: 1, y: 0 }} // This defines the animation state when in view
        className=" flex items-center  
      justify-center font-semibold tracking-wide
      sm:text-[6px] md:text-[8px] lg:text-[12px]
       text-[5px] text-center mx-auto w-full mt-6 px-8"
      >
        designing architecture, interiors and products from a holistic and
        human-centric perspective.
      </motion.span>
    </div>
  );
};
