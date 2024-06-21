"use client";
import React from "react";
import image from "../../public/1.jpg";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import { motion } from "framer-motion";
import InfinityScrollBanner from "./InfinityScrollBanner";

export default function Contact() {
  return (
    <div className="h-screen  bg-black top-0 z-0 grid grid-cols-4 grid-row-4 gap-4 p-4 overflow-hidden relative">
      <div className="  col-span-2 pt-4 pl-4 ">
        <Image
          className="rounded-full"
          src={logo}
          alt="logo"
          width={30}
          height={30}
        />
      </div>{" "}
      <motion.div
        style={{ letterSpacing: "-1rem" }}
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="  col-span-2 flex justify-start items-end  overflow-hidden "
      >
        <h3 className="absolute translate-y-6 -translate-x-2 text-[150px] leading-none  capitalize font-bold">
          <span className="pr-4">ER.</span>
          <span>STUDIO</span>
        </h3>
      </motion.div>
      <div className=" ">
        <h4>Connect</h4>
      </div>
      <div className="row-span-1 flex flex-col gap-2 tracking-wide text-sm">
        <div>
          <p className=" underline">Contact@erstudio.co.uk</p>
          <p className=" underline">+44 150 1202 39 </p>
        </div>
        <p>LinkedIn</p>
        <p>Instagram</p>
      </div>
      <div className=" bg-slate-50 col-span-2 row-span-2 overflow-hidden relative">
        <Image
          src={image}
          alt="image"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
        />
      </div>
      <div className="  ">
        <h4>Discipline</h4>
      </div>
      <div className=" text-xs">
        <p className=" ">Architecture</p>
        <p className=" ">Interior</p>
        <p className=" ">Creative Direction</p>
        <p className=" ">Concept</p>
        <p className=" ">VFX</p>
        <p className=" ">Animation</p>
        <p className=" ">Motion Graphic</p>
        <p className=" ">Web Development</p>
        <p className=" ">Technical Development</p>
      </div>
      <div className="   col-span-4">
        <button className="w-screen flex items-start px-2 py-2 absolute -translate-y-5 hover:bg-gray-200  hover:text-black ">
          {" "}
          All Projects
        </button>
        <InfinityScrollBanner />
      </div>
    </div>
  );
}
