"use client";

// import Link from "next/link";
import { Link } from "react-scroll";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-row justify-between py-6 tablet:pl-12 tablet:pr-10 pl-8 pr-6 items-center z-50 shadow-[0_0_10px_rgba(0,0,0,0.09)] w-full fixed bg-white">
        <h3 className="cursor-pointer font-bold text-zinc-800 list-none text-xl">
          Akshay.dev
        </h3>
        <ul className="tablet:flex flex-row justify-center items-center gap-5 text-lg font-semibold text-zinc-800 ">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="transition-all duration-200 hover:text-blue-500 tablet:flex hidden cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="transition-all duration-200 hover:text-blue-500 tablet:flex hidden cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="transition-all duration-200 hover:text-blue-500 tablet:flex hidden cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="transition-all duration-200 hover:text-blue-500 tablet:flex hidden cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li
            className="tablet:hidden flex"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              className="transition-all duration-200 hover:fill-blue-500 cursor-pointer"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </li>
        </ul>
      </nav>

      <div
        className={`h-screen w-full z-[100] fixed transition-all duration-300 ease-in-out bg-white tablet:hidden ${
          isOpen ? "!left-0" : "!-left-full"
        }`}
      >
        {isOpen && (
          <span
            className="cursor-pointer text-5xl absolute right-6 top-7"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              className="transition-all duration-200 hover:fill-blue-500 cursor-pointer"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </span>
        )}
        <ul className="flex flex-col justify-center items-center h-full text-2xl gap-12 font-medium text-zinc-800 z-[200]">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => {
                setIsOpen(false);
              }}
              className="transition-all duration-200 hover:text-blue-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => {
                setIsOpen(false);
              }}
              className="transition-all duration-200 hover:text-blue-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => {
                setIsOpen(false);
              }}
              className="transition-all duration-200 hover:text-blue-500 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => {
                setIsOpen(false);
              }}
              className="transition-all duration-200 hover:text-blue-500 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
