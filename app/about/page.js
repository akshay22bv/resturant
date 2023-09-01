import Image from "next/image";
import React from "react";
import bgImage from "../../assets/bgimages/our_story.jpg";

const About = () => {
  return (
    <div className="relative ">
      <div className="absolute z-10 text-white inset-0 flex flex-col text-center items-center justify-center px-2 max-w-xl m-auto">
        <h1 className="text-5xl font-semibold  px-4">Our Story</h1>
        <p className="py-2 font-Pacifico font-thin">
          &quot; Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos; standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets Ipsum. &quot;
        </p>
      </div>

      <Image
        alt=""
        src={bgImage}
        className="w-full -z-10 h-screen md:h-screen   object-cover brightness-50"
      />
    </div>
  );
};

export default About;
