"use client";
import React from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";

const nbOfColumns = 4;

// Define expand animation with dynamic transition delay
const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100%",
    transition: {
      ease: [0.22, 1, 0.36, 1],
      duration: 0.4,
      delay: 0.1 * i, // Apply the stagger delay
    },
  }),
};

const anim = (variants: any, custom: number) => {
  return {
    initial: "initial",
    animate: "enter",
    variants,
    custom,
  };
};

export default function Stairs() {
  return (
    <>
      {Array.from({ length: nbOfColumns }, (_, i) => (
        <motion.div
          {...anim(expand, nbOfColumns - i)}
          style={{
            left: `${(100 / nbOfColumns) * i}%`,
            width: `${100 / nbOfColumns}%`,
          }}
          id={`banner-${i + 1}`}
          key={i}
          className="min-h-screen bg-neutral-950 z-10 top-0 fixed"
        />
      ))}
    </>
  );
}
