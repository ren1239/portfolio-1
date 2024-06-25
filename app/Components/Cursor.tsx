"use client";
import { useEffect, forwardRef } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

const spring = { damping: 50, stiffness: 400, restDelta: 0.001 };

interface CursorProps {
  followRef: React.RefObject<HTMLElement>;
  isHovered?: boolean; // Optional boolean prop
}

const Cursor = forwardRef<HTMLDivElement, CursorProps>(
  ({ followRef, isHovered }) => {
    const xPoint = useMotionValue(0);
    const yPoint = useMotionValue(0);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    useEffect(() => {
      if (!followRef.current) return;

      const handleMouseMove = (event: MouseEvent) => {
        const element = followRef.current;

        if (element) {
          xPoint.set(
            event.clientX - element.offsetLeft - element.offsetWidth / 2
          );
          yPoint.set(
            event.clientY - element.offsetTop - element.offsetHeight / 2
          );
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [followRef, xPoint, yPoint]);

    return (
      <motion.div
        className="fixed  bg-blue-500 rounded-full pointer-events-none mix-blend-difference z-[100] "
        style={{
          width: 100,
          height: 100,
          x: x,
          y: y,
        }}
        initial={{ scale: "100%" }}
        animate={{ scale: isHovered ? "300%" : "100%" }}
        transition={{ duration: 0.5 }}
      />
    );
  }
);

export default Cursor;
