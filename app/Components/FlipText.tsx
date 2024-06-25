import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.08;
const TRANSITION = 0.01;

export function FlipText({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <div className=" flex-col items-center justify-center w-full  ">
      <motion.a
        initial="initial"
        whileHover="hovered"
        transition={{ delay: 0 }}
        className="relative block overflow-hidden whitespace-nowrap text-xl font-bold uppercase sm:text-2xl md:text-4xl lg:text-7xl gap-y-10"
        style={{ lineHeight: 0.95 }}
        href={href}
      >
        <p className=" flex items-center justify-center inset-0">
          {children.split("").map((l, i) => {
            return (
              <motion.span
                className={`inline-block ${
                  l === " " ? "w-8" : "text-neutral-800 "
                }`}
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
        </p>
        <p className="absolute flex items-center justify-center inset-0">
          {children.split("").map((l, i) => {
            return (
              <motion.span
                className={`inline-block ${l === " " ? "w-8" : "text-white"}`}
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
        </p>
      </motion.a>
    </div>
  );
}
