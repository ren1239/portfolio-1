"use client";
import React from "react";
import Cursor from "../Components/Cursor";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);

  return (
    <main
      ref={ref}
      className="h-screen w-screen grid place-items-center relative  bg-slate-400"
    >
      <h1
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className=" text-9xl font-bold"
      >
        This is the circlr{" "}
      </h1>
      <Cursor followRef={ref} isHovered={isHovered} />
    </main>
  );
}
