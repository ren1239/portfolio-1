import React from "react";
import TransitionLink from "./TransitionLink";

export default function NavBar() {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between top-0 fixed ">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900">
        ER STUDIO
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
        <TransitionLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
}
