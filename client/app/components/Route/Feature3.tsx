import React from "react";
import { FaAward, FaRotateRight } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
import Image from "next/image";
import ImageSlider from "./ImageSlider/ImageSlider";
import TopProfessionalSlider from "./ImageSlider/TopProfessionalSlider";

const Feature3 = () => {
  const partnerlogo = [
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720880381/1_xh4yve.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720880382/2_ihb0q4.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720880748/3_clrqxn.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720880382/4_ruq7xh.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720880383/5_rsm7xc.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720880384/6_ktapqs.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1738577468/stallion_gym_mwahwx.jpg",
  ];

  const professionalImg = [
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720724331/1_rz2wl5.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720724332/2_szaz08.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720724332/3_jjhnki.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1725918967/Jitendra_Kumar_alzwms.png",
    "https://res.cloudinary.com/dqmiqguh2/image/upload/v1725918797/Harikrishan_nyq3gh.png"


  ];

  return (
    <div>
      <div className="h-[574px] w-full relative overflow-hidden mt-5">
        <div className="relative w-full h-full ">
          <Image
            src={
              "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720696697/student-led-study-group-library-id842920176_1_vsblqj.png"
            }
            alt="Teacher-Header Image not available"
            width={1512}
            height={574}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 flex flex-col justify-center ">
            <div className="h-full w-full bg-gradient-to-b from-[#0000]/0 via-[#111827]/40 to-transparent backdrop-blur-5"></div>
          </div>
          <div className="absolute top-28 left-0 m-4 sm:m-8 md:m-10 z-10 dark:text-white text-black mt-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center">
              Why Study At CNES
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 md:mt-5 font-semibold">
              We are known to provide comprehensive and practical knowledge in
              health and fitness. Renowned researchers and world-class elite
              coaches contribute to all our premium certification programs.
            </h2>
            <a
              href="/courses"
              className="mt-10 sm:mt-10 md:mt-10 lg:mt-24 inline-block px-4 py-2 sm:px-6 sm:py-2.5 dark:bg-[#50689A] bg-[#50689a] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700  dark:hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Enroll Now
            </a>
            <br />
            <a
              href="https://superprofile.bio/bookings/cnesonline"
              className="mt-2 sm:mt-10 md:mt-2 lg:mt-2 inline-block px-4 py-2 sm:px-6 sm:py-2.5 dark:bg-[#50689A] bg-[#50689a] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700  dark:hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      {/* path to a rewarding career */}

      <div className=" text-black dark:text-white">
        <div className="dark:bg-[#06090f] h-[150px] w-full">
          <h1 className="font-bold text-lg md:text-3xl sm:text-3xl lg:text-5xl text-center p-10">
            Your Path To A Rewarding Career
          </h1>
          <div className="mx-auto h-1 w-[70%]  md:w-[60%] lg:w-[50%] mt-[-24px]  bg-black dark:bg-white"></div>
        </div>

        <div className="mt-[-50px]">
          <Image
            src={
              "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720701126/Career-White_zowdtz.png"
            }
            alt="Career Image not available"
            width={1512}
            height={574}
            className="w-full h-full mx-auto object-cover block dark:hidden"
          />
          <Image
            src={
              "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720699521/Career_st98io.png"
            }
            alt="Career Image not available"
            width={1512}
            height={574}
            className="w-full h-full mx-auto object-cover hidden dark:block"
          />
        </div>
      </div>

      {/* ;     Our Partners and Placement Partners Section */}
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl sm:text-2xl font-bold text-center my-8 dark:text-white text-black">
            Our Partners & Placement Partners
          </h1>
        </div>
        <div className="mt-10 mb-20">
          <ImageSlider images={partnerlogo} />
        </div>
      </div>

      {/* CNES Certified Top Notch Professionals  */}
      <div className="container mx-auto">
        <div className="flex-row justify-center items-center">
          <h1 className="text-2xl md:text-2xl lg:text-3xl sm:text-2xl font-bold text-center my-3 dark:text-white text-black">
            CNES Certified Top Notch Professionals
          </h1>
          <h2 className="text-center dark:text-white text-black">
            Meet Our Proud Alumni, Shaping Our Future
          </h2>
        </div>
        <div className="mt-10 mb-20">
          <TopProfessionalSlider images={professionalImg} />
        </div>
      </div>
    </div>
  );
};
export default Feature3;
