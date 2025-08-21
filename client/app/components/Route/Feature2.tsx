"use client";
import React from "react";
import { FaAward, FaRotateRight } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import ImageSlider to handle SSR issues
const ImageSlider = dynamic(() => import("./ImageSlider/ImageSlider"), { ssr: false });

const Feature2 = () => {
    const images = [
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366147/1_cxhkjf.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366152/2_qzlckk.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366148/3_gw6syu.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366149/4_jpmser.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1738577725/ministory_of_commerce_vjgrxx.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366147/5_yhatsi.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366147/6_d2xvax.jpg",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1737366147/7_dizjbr.jpg",
  ];
  
  return (
    <div>
      {/* Commented out code removed for clarity */}
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <h1 className="text-1xl md:text-2xl lg:text-3xl sm:text-2xl font-bold text-center my-8 dark:text-white text-black">
            Accreditation & Affiliations
          </h1>
          <a href="/accreditations">
            <button
              type="button"
              className="min-h-fit min-w-fit h-[52px] w-[150px] md:w-[200px] sm:w-[270px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Read More
            </button>
          </a>
        </div>
        <div className="mt-10 mb-20">
          <div>
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
