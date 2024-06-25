"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    variants,
  };
};
export default function Blob() {
  const [dimension, setDimension] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "calc(100vh + 600px)",
          top: "-300px",
          left: "0",
          position: "fixed",
          pointerEvents: "none",
          opacity: dimension.width > 0 ? 0 : 1,
        }}
        className="bg-black z-50"
      ></div>
      {dimension.width > 0 && <SVG {...dimension} />}
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
        M0 300,
        Q${width / 2} 0  ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
        `;

  const targetPath = `
        M0 300,
        Q${width / 2} 0  ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
        `;

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const curveVarient = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg
      {...anim(slide)}
      style={{
        width: "100vw",
        height: "calc(100vh + 600px)",
        top: "-300px",
        left: "0",
        position: "fixed",
        pointerEvents: "none",
      }}
      className="z-50"
    >
      <motion.path {...anim(curveVarient)} fill="black"></motion.path>
    </motion.svg>
  );
};
