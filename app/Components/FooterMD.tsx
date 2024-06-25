"use client";
import React from "react";
import InfinityScrollBanner from "./InfinityScrollBanner";
import { InfinityText } from "./InfinityText";

export default function FooterMD() {
  return (
    <div className="h-[45vh] bg-neutral-800 border-t-[1px] border-white relative">
      <div className="w-full flex justify-between overflow-hidden relative">
        <h3 className=" text-white text-9xl p-8  tracking-[-0.85rem] ">
          MICRODOT
        </h3>
        <h3 className=" text-white text-9xl p-8  tracking-[-0.85rem]  translate-x-72 right-0">
          MICRODOT
        </h3>
      </div>
      <div className="grid grid-cols-4">
        <div className="flex flex-col px-8 text-xs text-white">
          <span>WORK</span>
          <span>COMPANY</span>
          <span>CULTURE</span>
          <span>RESEARCH</span>
          <span>CONTACT</span>
        </div>
        <div className="flex flex-col px-8 text-xs text-white">
          <span>KOREA</span>
          <span>NEW ZEALAND</span>
        </div>
        <div className="flex flex-col px-8 text-xs text-white">
          <span>X</span>
          <span>INSTAGRAM</span>
          <span>FACEBOOK</span>
          <span>SPOTIFY</span>
        </div>
        <div className="flex flex-col px-8 text-xs text-white">
          <span>454 Apgujeong-ro</span>
          <span>Gangnam District</span>
          <span>Seoul</span>
          <span> +82 2-3432-1854</span>
        </div>
      </div>
      <div className="absolute bottom-2">
        <InfinityText>
          Microtape +64 Light Thinking About You Cloud
        </InfinityText>
      </div>
    </div>
  );
}
