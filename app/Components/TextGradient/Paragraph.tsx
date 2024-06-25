"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
interface ParagraphProps {
  value: string;
}

export default function Paragraph({ value }: ParagraphProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.p
      ref={targetRef}
      style={{
        whiteSpace: "pre-line", // This allows the use of \n to create line breaks
        opacity: opacity,
      }}
      className=" text-[30px] max-w-[1280px] p-10 font-bold text-center"
    >
      {value}
    </motion.p>
  );
}
