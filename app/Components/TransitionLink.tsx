"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageIn, animatePageOut } from "../utils/animations";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default link behavior
    if (pathname !== href) {
      animatePageOut(href, router); // Animate the page out and navigate
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-xl text-neutral-950 hover:text-neutral-700"
    >
      {label}
    </button>
  );
};

export default TransitionLink;
