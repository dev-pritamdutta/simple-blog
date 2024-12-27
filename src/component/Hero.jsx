import React from "react";
import heroImg from "../assets/hero2.jpg";
import wave from "../assets/wave.svg";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div
      className="hero relative min-h-[calc(100vh-116px)]  bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to{" "}
            <span class=" font-bold bg-gradient-to-r from-[#f7797d] via-[#FBD786] to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              TechBytes
            </span>{" "}
          </h1>
          <p className="mb-5">
            Innovative Solutions for Modern Problems and curious mind eager to
            understand it
          </p>
          <div className="flex gap-2 justify-center">
            <Link
              to="/blogs"
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>
          </div>
        </div>
      </div>
      <img src={wave} alt="wave" className="w-full mx-auto bottom-0 absolute" />
    </div>
  );
};

export default Hero;
