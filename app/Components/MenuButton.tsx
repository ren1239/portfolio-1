"use client";
import React, { useState } from "react";

export default function MenuButton() {
  const [expanded, SetExpanded] = useState(false);

  const handleExpand = () => {
    SetExpanded(!expanded);
  };

  return (
    <>
      <button onClick={handleExpand}>Menu</button>
    </>
  );
}
