"use client";
import React, { useContext } from "react";
import bgImage from "../assets/bgimages/hotel_bg.jpg";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { SideBarContext } from "@/context/Sidebarcontext";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 text-white inset-0 flex items-center md:justify-center px-2">
        {/* <Typewriter text="Hotel Vaibhav" delay={1} /> */}
        <h1 className="text-7xl font-Belanosima px-4">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            Hotel
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
          >
            Vaibhav
          </motion.p>
        </h1>
      </div>
      <Image
        alt=""
        src={bgImage}
        className="w-full -z-10 h-screen md:h-screen   object-cover brightness-50"
      />
    </div>
  );
};

export default Hero;
