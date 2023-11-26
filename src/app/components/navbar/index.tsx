"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-[9999] w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200  font-mono text-sm backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className={`flex  py-6`}>
        <div className="mx-auto flex w-full max-w-[1400px] min-[1280px]:px-[70px]">
          <div className="flex w-1/3 flex-row">
            <h1>LINGO</h1>
          </div>
          <div className="flex w-2/3 flex-row justify-between">
            <div className="flex flex-row gap-16">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Why LINGO?</Link>
              <Link href={"/"}>Why LINGO?</Link>
              <Link href={"/"}>Why LINGO?</Link>
              <Link href={"/"}>Why LINGO?</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
