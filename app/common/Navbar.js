"use client";
import { SideBarContext } from "@/context/Sidebarcontext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const [scrolling, setScrolling] = useState(false);

  const onScroll = () => {
    setScrolling(window.scrollY > 30);
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const { setIsOpen } = useContext(SideBarContext);
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div
        className={`fixed inset-0 z-20  ${
          scrolling
            ? "bg-[#1a031d]/80 text-[#edd092]"
            : "bg-transparent text-white"
        } h-16 hidden sm:block`}
      >
        <div className="max-w-xl m-auto justify-between py-5 sm:flex">
          <Link href="/" className="cursor-pointer hover:text-purple-500">
            Home
          </Link>
          <Link href="/menu" className="cursor-pointer hover:text-purple-500">
            Menu
          </Link>
          <Link href="/about" className="cursor-pointer hover:text-purple-500">
            About
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer hover:text-purple-500"
          >
            Reservation
          </Link>
        </div>
      </div>

      <div className="sm:hidden fixed top-5 right-5 z-20 text-white  flex justify-end">
        <HiMenuAlt3
          onClick={handleOpen}
          className="w-6 h-6 bg-black/20 rounded"
        />
      </div>

      <div
        className={`fixed w-full ${
          isOpen ? "right-0" : "-right-full"
        } flex  md:hidden z-50 bg-[#1a031d] h-screen text-white transition-all duration-300`}
      >
        <div
          onClick={handleClose}
          className="sm:hidden  absolute top-5 right-5 z-10  flex justify-end"
        >
          <RiCloseFill className="w-6 h-6 bg-black/20 rounded" />
        </div>

        <div className="absolute inset-0 flex flex-col text-xl gap-2 justify-center items-center text-[#edd092]">
          <Link
            onClick={handleClose}
            href="/"
            className="cursor-pointer hover:text-purple-500"
          >
            Home
          </Link>
          <Link
            onClick={handleClose}
            href="/menu"
            className="cursor-pointer hover:text-purple-500"
          >
            Menu
          </Link>
          <Link
            onClick={handleClose}
            href="/about"
            className="cursor-pointer hover:text-purple-500"
          >
            About
          </Link>
          <Link
            onClick={handleClose}
            href="/contact"
            className="cursor-pointer hover:text-purple-500"
          >
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
