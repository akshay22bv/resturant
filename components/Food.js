"use client";
import { data } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Food = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className=" flex justify-center pt-[100px] px-2 items-center  text-[#edd092] max-w-xl">
      <div className="w-full max-w-xl">
        {data.map((val, i) => (
          <div key={i} className="flex flex-col gap-1 w-full">
            <div
              onClick={() => {
                toggle(i);
              }}
              className="p-2 cursor-pointer flex justify-between items-center bg-[#edd092] rounded text-[#1a031d]"
            >
              <h1 className="text-md ">{val.question}</h1>
              <p
                className={`${
                  selected === i ? "rotate-180" : "rotate-0 transition-all"
                } duration-300`}
              >
                {<BiChevronDown />}
              </p>
            </div>
            <div
              className={`px-2 transition-all w-full duration-500 overflow-hidden ${
                selected === i ? "max-h-[1000px] h-auto" : "max-h-0"
              }`}
            >
              <div className="flex justify-between w-full py-1">
                {/* <h1>{"Items"}</h1> */}
                {/* <button className="rounded bg-black text-white p-1">
                  <>
                    <span>{"Full"}</span>
                    {"  "}
                    <span>{"Half"}</span>
                  </>
                </button> */}
              </div>
              {val.items &&
                val.items.map((item, i) => (
                  <div key={i} className="flex justify-between w-full py-1">
                    <div className=" capitalize flex items-center gap-1 overflow-hidden">
                      <Image
                        className="rounded-md overflow-hidden  w-12 h-12"
                        alt={item.name}
                        src={item.image}
                      />
                      <h1>{item.name}</h1>
                    </div>
                    <button className="">
                      <span>{item.price?.full}</span>
                      {item.price?.half && "/"}
                      <span>{item.price?.half}</span>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
