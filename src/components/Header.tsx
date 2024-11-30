"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 px-6 md:px-28 relative z-50 flex justify-between items-center bg-[#0216] shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl flex items-center gap-2 font-bold">
          {" "}
          <Image
            src="/game-icons_tow-truck.png"
            className="relative z-30"
            height={50}
            width={50}
            alt="call"
          />{" "}
          Tow Naija
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#how-it-works" className="hover:underline">
          How It Works
        </a>
        <a href="#why-us" className="hover:underline">
          Why Us
        </a>
        <a href="#testimonials" className="hover:underline">
          Testimonials
        </a>
      </nav>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#02163983] text-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#how-it-works"
                onClick={toggleMenu}
                className="hover:underline"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={toggleMenu}
                className="hover:underline"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={toggleMenu}
                className="hover:underline"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
