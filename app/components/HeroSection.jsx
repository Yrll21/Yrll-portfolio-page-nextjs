"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="sm:text-5xl text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Yrll",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " a Developer Community Support",
                1000,
                " a Web Developer",
                1000,
                " a Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            laudantium deleniti tempora ipsa! Adipisci laborum ab ad impedit
            provident vel! Quaerat asperiores sit iusto laudantium officia
            nostrum voluptates suscipit aspernatur?
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-color mt-3 mb-6">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center lg:mt-6">
          <Image
            className="rounded-full"
            src="/images/profile_photo.jpeg"
            alt="profile photo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
