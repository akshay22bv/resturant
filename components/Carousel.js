"use client";

import { Carouseldata } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === Carouseldata.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? Carouseldata.length - 1 : slide - 1);
  };

  return (
    <div className="max-w-xl m-auto">
      <h1 className="text-xl text-[#edd092]  font-semibold md:text-2xl text-center py-10">
        Vaibhav Foods - Homemade, Something For Everyone.
      </h1>
      {/* <p className="text-center text-lg p-8 text-[#edd092] font-Pacifico">
        &quot;Everything we touch is as fresh as it can get. Experience the
        epitome of South Indian cuisine, made in the most authentic way.&quot;
      </p> */}
      {/* <div className="relative flex overflow-hidden overflow-x-auto max-w-xl m-auto px-2 ">
        <div className="absolute inset-0 flex justify-between items-center px-4 z-10 text-white">
          <AiFillLeftCircle
            size={30}
            onClick={prevSlide}
            className="cursor-pointer"
          />
          <AiFillRightCircle
            onClick={nextSlide}
            size={30}
            className="cursor-pointer"
          />
        </div>
        {Carouseldata.map((item, i) => {
          return (
            <>
              <Image
                className={`h-[300px] brightness-90   z-1 ${
                  slide === i ? "block" : "hidden"
                }`}
                loading="lazy"
                key={i}
                src={item.image}
                alt={item.name}
              />
            </>
          );
        })}
      </div> */}

      <div className="flex flex-col gap-20 px-2 py-10">
        {Carouseldata.map((item, i) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex items-center gap-2 justify-between text-center  ${
                i % 2 === 0 && "flex-row-reverse"
              }`}
              key={i}
            >
              <Image
                loading="lazy"
                alt={item.name}
                src={item.image}
                className="w-24 h-24 rounded-[50%] hover:scale-110 duration-300 object-cover drop-shadow-md shadow-white"
              />
              <h1>{item.name}</h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
