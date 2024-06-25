"use client";
import React, { useState } from "react";
import TransitionLink from "./TransitionLink";
import Link from "next/link";
import MenuButton from "./MenuButton";
import MenuTransition from "./MenuTransition";

export default function NavBar() {
  const [expanded, SetExpanded] = useState(false);

  const handleExpand = () => {
    SetExpanded(!expanded);
  };

  return (
    <nav
      style={{
        color: expanded ? "white" : "",
      }}
      className="w-full flex flex-col top-0 fixed z-[100] items-center justify-center"
    >
      <div className="flex w-full p-5 place-items-center justify-between z-[100]">
        <h1 className="text-3xl tracking-tight font-bold ">ER STUDIO</h1>
        <div className="flex gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <button className="" onClick={handleExpand}>
            Menu
          </button>
        </div>
      </div>
      <MenuTransition expanded={expanded} />
      {/* <div className={expanded ? "w-full h-screen bg-red-300" : "hidden"}></div> */}
    </nav>
  );
}
