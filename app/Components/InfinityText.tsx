import React from "react";
import { motion } from "framer-motion";

export function InfinityText({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex overflow-hidden items-center  text-white ">
      <TranslateWrapper>{children}</TranslateWrapper>
      <TranslateWrapper>{children}</TranslateWrapper>
    </div>
  );
}

const TranslateWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      <div className="flex justify-evenly">
        {React.Children.map(children, (child, index) => (
          <p
            key={index}
            className="uppercase font-thin text-4xl mx-1 whitespace-nowrap tracking-tighter"
          >
            {child}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
