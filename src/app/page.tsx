"use client";
import React from "react";
import { Spotlight } from "./components/ui/Spotlight";
import ResumeDownload from "./components/download-resume";
import Lottie from "lottie-react";
import animationData from "./components/hero-main.json"; // Update this path

type Props = {};

export function Page() {
  return (
    <>
      <div className="h-screen w-full dark:bg-grid-white/[0.05] bg-grid-black/[0.04] relative flex items-center justify-center">
        <Spotlight
          className="-top-80 left-0 md:left-10 md:-top-10"
          fill="#ffffff79"
        />
        <div className="absolute inset-0 pt-20 md:pt-0 [mask-image:radial-gradient(ellipse_at_center,black)]">
          <div className="text-black dark:text-white p-4 md:p-10 flex flex-col md:flex-row">
            <div className="p-4 md:pt-40 md:px-20 w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
                Crafting Digital Experiences
              </h1>
              <p className="text-lg md:text-lg py-8 opacity-50">
                Bringing Your Ideas to Life Through MERN Stack Development and
                Intuitive Designs
              </p>
              <ResumeDownload />
            </div>
            <div className="right flex-1 p-2 h-full md:max-h-96">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
