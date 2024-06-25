"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ParagraphProps {
  value: string;
}

export default function Word({ value }: ParagraphProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.5", "start 0.35"],
  });

  const words = value.split(" ");

  return (
    <motion.p
      ref={targetRef}
      className="pl-24 text-[30px] max-w-[900px] p-10 font-light tracking-tighter text-center flex flex-wrap text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <SingleWord
            key={i}
            range={[start, end]}
            scrollYProgress={scrollYProgress}
          >
            {word}
          </SingleWord>
        );
      })}
    </motion.p>
  );
}

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  scrollYProgress: MotionValue; // Adjust type according to Framer Motion's types if necessary
}

const SingleWord = ({ children, range, scrollYProgress }: WordProps) => {
  const opacity = useTransform(scrollYProgress, range, [0.1, 0.9]);
  return (
    <motion.span style={{ opacity: opacity }} className="m-2 leading-3">
      {children}
    </motion.span>
  );
};
