import React from "react";
import codeImg from "../assets/images/image.jpg"; // background
import codeImg1 from "../assets/images/code-image-1.png"; // top-right floating
import codeImg2 from "../assets/images/code-image-2.png"; // bottom-left floating

const HeroSection = () => {
  return (
    <section className="flex flex-col   lg:flex-row items-stretch w-full h-[90vh] bg-black overflow-hidden">
      {/* Left Side (Text Content) */}
      <div className="lg:w-1/2 flex flex-col justify-center px-6 py-12 space-y-6 z-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
          Unlock the Potential <br /> of Flutter
        </h1>
        <p className="text-gray-400 text-lg">
          Your Premier Partner for Cross-Platform App Excellence!
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 w-fit">
          UPGRADE YOUR TECH
        </button>
      </div>

      {/* Right Side (Background & Floating Images) */}
      <div className="relative lg:w-1/2 w-full h-full">
        {/* Background Image (fills right half only) */}
        <img
          src={codeImg}
          alt="Code background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Floating Code Image - Top Right */}
        <img
          src={codeImg1}
          alt="Floating Code Window 1"
          className="absolute top-[20%] right-[5%] w-[300px] z-10 rounded shadow-xl"
        />

        {/* Floating Code Image - Bottom Left */}
        <img
          src={codeImg2}
          alt="Floating Code Window 2"
          className="absolute bottom-[10%] left-[5%] w-[350px] z-10 rounded shadow-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
