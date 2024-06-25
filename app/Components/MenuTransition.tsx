"use client";
import React, { SetStateAction, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FlipText } from "./FlipText";

export default function MenuTransition({ expanded }: { expanded: boolean }) {
  return (
    <motion.div
      initial={{ width: 0, height: "100%" }}
      animate={{
        width: expanded ? "100%" : "0%",
      }}
      //   transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }} // Adjust duration as needed
      className="fixed inset-0 overflow-hidden grid place-items-center mx-auto" // Fixed positioning for full-screen overlay
    >
      <motion.div
        animate={{
          width: expanded ? "100%" : "0%",
        }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }} // Adjust duration as needed
        className=" bg-black w-0 h-full relative top-0 left-0  grid place-items-center overflow-hidden "
      >
        <div className="text-black absolute whitespace-nowrap text-7xl">
          <LineBreak />
          <FlipText href="/">Chocolate Cream.II</FlipText>
          <LineBreak />
          <FlipText href="/">BLOODY</FlipText>
          <LineBreak />
          <FlipText href="/">A/S</FlipText>
          <LineBreak />
          <FlipText href="/">My Way Through The Night</FlipText>
          <LineBreak />
        </div>
      </motion.div>
    </motion.div>
  );
}

const LineBreak = () => <div className=" h-[1px] w-screen bg-white my-6"></div>;
