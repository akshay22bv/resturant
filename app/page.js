"use client";
import React from "react";
import Navbar from "./common/Navbar";
import Hero from "@/components/Hero";
import Food from "@/components/Food";
import Footer from "./common/Footer";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <>
      <Hero />
      <Carousel />
    </>
  );
};

export default page;
