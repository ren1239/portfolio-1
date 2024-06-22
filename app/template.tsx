"use client";

import { useEffect } from "react";
import { animatePageIn } from "./utils/animations";
import Stairs from "./Components/PageTransitions/Stairs";
import Blob from "./Components/PageTransitions/Blob";

export default function Template({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   animatePageIn();
  // }, []);

  return (
    <div>
      {/* <Stairs /> */}
      <Blob />
      {children}
    </div>
  );
}
