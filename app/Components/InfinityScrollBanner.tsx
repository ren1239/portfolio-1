import React from "react";
import { motion } from "framer-motion";

const Text = [
  "VFX",
  "Architecture",
  "Interior",
  "Creative Direction",
  "Architecture",
  "Interior",
  "Motion Graphics",
  "Interior",
  "Architecture",
  "Interior",
  "Motion Graphics",
  "Interior",
];

export default function InfinityScrollBanner() {
  return (
    <div className="relative z-0 flex overflow-hidden items-center h-full">
      <TranslateWrapper>
        {Text.map((item, index) => (
          <p
            key={index}
            className="  uppercase font-black text-neutral-800 mx-1 text-xl whitespace-nowrap tracking-tighter"
          >
            {item}
          </p>
        ))}
      </TranslateWrapper>
      <TranslateWrapper>
        {Text.map((item, index) => (
          <p
            key={index}
            className=" uppercase font-black text-neutral-800 mx-1 text-xl whitespace-nowrap tracking-tighter"
          >
            {item}
          </p>
        ))}
      </TranslateWrapper>
    </div>
  );
}

const TranslateWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex "
    >
      {children}
    </motion.div>
  );
};
