import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Counter from "./Counter";
import "./Style.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Teacher: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SOCKET_SERVER_URI}api/contact`,
        data
      );
      toast.success("Your response is submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to sunbmit response");
    }
  };

  return (
    <div>
      <div className="h-[574px] w-full relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={
              "https://res.cloudinary.com/dqmiqguh2/image/upload/v1720342136/Career2-1438x1536_2_tczshe.png"
            }
            alt="Teacher-Header Image not available"
            width={1512}
            height={574}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="h-full w-full bg-gradient-to-b from-[#0000]/20 via-[#111827]/40 to-transparent backdrop-blur-5"></div>
          </div>
          <div className="absolute top-0 left-0 m-4 sm:m-8 md:m-10 z-10 dark:text-white text-black mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
              Make a global Impact
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 md:mt-5 font-semibold">
              Create an online video course and earn money by teaching people.
            </h2>
            <a
              href="/teacher"
              className="mt-52 sm:mt-18 md:mt-20 lg:mt-24 inline-block px-4 py-2 sm:px-6 sm:py-2.5 dark:bg-[#50689A] bg-[#50689a] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700  dark:hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Reasons to start section Desktop View*/}

      <div className="w-full h-full relative mt-20 font-semibold mb-20 flex-col justify-center align-middle hidden  md:block ">
        <h1 className="text-3xl text-center dark:text-white text-black">
          So Many Reasons To Start
        </h1>
        <div className="h-1 w-[50%] md:w-[330px] bg-black dark:bg-white mx-auto mt-3"></div>

        <div>
          <div
            className="mx-auto w-1 bg-black dark:bg-white"
            style={{ height: "1185px", maxHeight: "1185px" }}
          ></div>
          <div className="bg-white border-black dark:bg-black dark:border-white border-[12px] rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] absolute z-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-white border-black  dark:bg-black dark:border-white border-[12px] rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[100px]"></div>
          <div className="bg-white border-black  dark:bg-black dark:border-white border-[12px] rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] absolute z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* partition for box 1*/}

        <div className="w-full sm:w-1/2 h-full relative flex justify-center items-center">
          <div className="h-[450px] w-[80%] sm:w-[506px] rounded-[40px] dark:bg-slate-900 bg-slate-600 absolute mt-[-1680px] flex flex-col items-center justify-center">
            <div className="fill-white mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="130"
                viewBox="0 0 130 130"
                fill="none"
              >
                <path
                  d="M59.5835 21.6667H21.6668C18.7937 21.6667 16.0381 22.808 14.0065 24.8397C11.9749 26.8713 10.8335 29.6268 10.8335 32.5V108.333C10.8335 111.206 11.9749 113.962 14.0065 115.994C16.0381 118.025 18.7937 119.167 21.6668 119.167H97.5002C100.373 119.167 103.129 118.025 105.16 115.994C107.192 113.962 108.333 111.206 108.333 108.333V70.4167"
                  stroke="#E3EEF7"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M100.208 13.5417C102.363 11.3868 105.286 10.1762 108.333 10.1762C111.381 10.1762 114.304 11.3868 116.458 13.5417C118.613 15.6965 119.824 18.6192 119.824 21.6667C119.824 24.7141 118.613 27.6368 116.458 29.7917L65.0002 81.25L43.3335 86.6667L48.7502 65L100.208 13.5417Z"
                  stroke="#E3EEF7"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-center text-3xl font-semibold mt-8">
              Teach Your Way
            </h1>
            <p className="text-center mt-12 px-4 sm:px-0">
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </p>
          </div>
        </div>

        {/* partition for box 2*/}

        <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
          <div className="h-[450px] w-[80%] sm:w-[506px] rounded-[40px] dark:bg-slate-900 bg-slate-600 absolute mt-[-450px]  flex flex-col items-center justify-center">
            <div className="fill-white mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="135"
                height="129"
                viewBox="0 0 135 129"
                fill="none"
              >
                <path
                  d="M67.875 80.8587C89.6212 80.8587 107.25 64.0134 107.25 43.2337C107.25 22.454 89.6212 5.6087 67.875 5.6087C46.1288 5.6087 28.5 22.454 28.5 43.2337C28.5 64.0134 46.1288 80.8587 67.875 80.8587Z"
                  stroke="#E3EEF7"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.1813 74.6588L39.375 123.625L67.5 107.5L95.625 123.625L88.8187 74.605"
                  stroke="#E3EEF7"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-center text-3xl font-semibold mt-8">
              Get rewarded
            </h1>
            <p className="text-center mt-12 px-4 sm:px-0">
              Expand your professional network, build your expertise, and earn
              money on each paid enrollment.
            </p>
          </div>
        </div>

        {/* partition for box 3*/}

        <div className="w-1/2 sm:w-1/2 h-full relative flex justify-center items-center">
          <div className="h-[450px] w-[80%] sm:w-[506px] rounded-[40px] dark:bg-slate-900 bg-slate-600 absolute mt-[-1000px] ml-[200%] flex flex-col items-center justify-center">
            <div className="fill-white mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="159"
                height="135"
                viewBox="0 0 159 135"
                fill="none"
              >
                <g clip-path="url(#clip0_335_331)">
                  <path
                    d="M82.2069 13C78.6951 13 75.3271 14.5171 72.8438 17.2177C70.3606 19.9182 68.9655 23.5809 68.9655 27.4C68.9655 31.2191 70.3606 34.8818 72.8438 37.5823C75.3271 40.2829 78.6951 41.8 82.2069 41.8C85.7187 41.8 89.0867 40.2829 91.57 37.5823C94.0532 34.8818 95.4483 31.2191 95.4483 27.4C95.4483 23.5809 94.0532 19.9182 91.57 17.2177C89.0867 14.5171 85.7187 13 82.2069 13ZM112.291 17.8192C111.171 17.954 110.145 18.5669 109.44 19.5232L88.96 46.6H73.3793C73.2337 46.6 73.1145 46.6768 72.9732 46.696C72.3982 46.7495 71.839 46.9288 71.3292 47.2233C70.8195 47.5178 70.3698 47.9213 70.0072 48.4096C69.9189 48.5296 69.7865 48.6016 69.707 48.736L52.0519 77.536C51.6088 78.2582 51.3541 79.0976 51.315 79.9647C51.2759 80.8319 51.4537 81.6943 51.8296 82.4603C52.2056 83.2262 52.7655 83.8669 53.4497 84.3141C54.134 84.7614 54.917 84.9984 55.7153 85C57.141 85 57.4411 84.2512 58.293 82.864L66.7586 67.2544V85H93.2414V53.1424L115.39 25.6768C116.948 23.6368 117.252 20.6032 115.381 18.9088C114.959 18.5112 114.469 18.2099 113.938 18.0227C113.407 17.8355 112.847 17.7663 112.291 17.8192ZM20.4138 89.8C19.2432 89.8 18.1205 90.3057 17.2928 91.2059C16.465 92.1061 16 93.327 16 94.6C16 95.873 16.465 97.0939 17.2928 97.9941C18.1205 98.8943 19.2432 99.4 20.4138 99.4H27.0345V152.2C27.0345 153.473 27.4995 154.694 28.3273 155.594C29.155 156.494 30.2777 157 31.4483 157C32.6189 157 33.7416 156.494 34.5693 155.594C35.397 154.694 35.8621 153.473 35.8621 152.2V99.4H124.138V152.2C124.138 153.473 124.603 154.694 125.431 155.594C126.258 156.494 127.381 157 128.552 157C129.722 157 130.845 156.494 131.673 155.594C132.5 154.694 132.966 153.473 132.966 152.2V99.4H139.586C140.757 99.4 141.879 98.8943 142.707 97.9941C143.535 97.0939 144 95.873 144 94.6C144 93.327 143.535 92.1061 142.707 91.2059C141.879 90.3057 140.757 89.8 139.586 89.8H20.4138ZM57.931 104.2V145C57.931 145.637 58.1635 146.247 58.5774 146.697C58.9913 147.147 59.5526 147.4 60.1379 147.4C60.7232 147.4 61.2846 147.147 61.6984 146.697C62.1123 146.247 62.3448 145.637 62.3448 145V104.2H57.931ZM66.7586 104.2V142.6C66.7586 143.873 67.2236 145.094 68.0514 145.994C68.8791 146.894 70.0018 147.4 71.1724 147.4C72.343 147.4 73.4657 146.894 74.2934 145.994C75.1212 145.094 75.5862 143.873 75.5862 142.6V109H84.4138V142.6C84.4138 143.873 84.8788 145.094 85.7066 145.994C86.5343 146.894 87.657 147.4 88.8276 147.4C89.9982 147.4 91.1209 146.894 91.9486 145.994C92.7764 145.094 93.2414 143.873 93.2414 142.6V104.2H66.7586ZM97.6552 104.2V145C97.6552 145.637 97.8877 146.247 98.3016 146.697C98.7154 147.147 99.2768 147.4 99.8621 147.4C100.447 147.4 101.009 147.147 101.423 146.697C101.836 146.247 102.069 145.637 102.069 145V104.2H97.6552Z"
                    fill="#E3EEF7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_335_331">
                    <rect width="159" height="135" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h1 className="text-center text-3xl font-semibold mt-8">
              Inspire learners
            </h1>
            <p className="text-center mt-12 px-4 sm:px-0">
              Teach what you know and help learners explore their interests,
              gain new skills, and advance their careers.
            </p>
          </div>
        </div>
      </div>

      {/* Reasons to start section Mobile View*/}

      <div className="w-full h-full relative mt-20 font-semibold mb-20 flex-col justify-center align-middle block md:hidden lg:hidden ">
        <h1 className="text-3xl text-center dark:text-white text-black">
          So Many Reasons To Start
        </h1>
        <div className="h-1 w-[50%] md:w-[330px] bg-black dark:bg-white mx-auto mt-3"></div>

        {/* partition for box 1*/}

        <div className="w-full  h-full relative flex justify-center items-center">
          <div className="h-[450px] w-[80%] sm:w-[506px] rounded-[40px] dark:bg-slate-900 bg-slate-600 relative mt-10 flex flex-col items-center justify-center">
            <div className="fill-white mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="130"
                viewBox="0 0 130 130"
                fill="none"
              >
                <path
                  d="M59.5835 21.6667H21.6668C18.7937 21.6667 16.0381 22.808 14.0065 24.8397C11.9749 26.8713 10.8335 29.6268 10.8335 32.5V108.333C10.8335 111.206 11.9749 113.962 14.0065 115.994C16.0381 118.025 18.7937 119.167 21.6668 119.167H97.5002C100.373 119.167 103.129 118.025 105.16 115.994C107.192 113.962 108.333 111.206 108.333 108.333V70.4167"
                  stroke="#E3EEF7"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M100.208 13.5417C102.363 11.3868 105.286 10.1762 108.333 10.1762C111.381 10.1762 114.304 11.3868 116.458 13.5417C118.613 15.6965 119.824 18.6192 119.824 21.6667C119.824 24.7141 118.613 27.6368 116.458 29.7917L65.0002 81.25L43.3335 86.6667L48.7502 65L100.208 13.5417Z"
                  stroke="#E3EEF7"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-center text-3xl font-semibold mt-8">
              Teach Your Way
            </h1>
            <p className="text-center mt-12 px-4 sm:px-0">
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </p>
          </div>
        </div>

        {/* partition for box 2*/}

        <div className="w-full  h-full relative flex justify-center items-center">
          <div className="h-[450px] w-[80%] sm:w-[506px] rounded-[40px] dark:bg-slate-900 bg-slate-600 relative mt-10 flex flex-col items-center justify-center">
            <div className="fill-white mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="159"
                height="135"
                viewBox="0 0 159 135"
                fill="none"
              >
                <g clip-path="url(#clip0_335_331)">
                  <path
                    d="M82.2069 13C78.6951 13 75.3271 14.5171 72.8438 17.2177C70.3606 19.9182 68.9655 23.5809 68.9655 27.4C68.9655 31.2191 70.3606 34.8818 72.8438 37.5823C75.3271 40.2829 78.6951 41.8 82.2069 41.8C85.7187 41.8 89.0867 40.2829 91.57 37.5823C94.0532 34.8818 95.4483 31.2191 95.4483 27.4C95.4483 23.5809 94.0532 19.9182 91.57 17.2177C89.0867 14.5171 85.7187 13 82.2069 13ZM112.291 17.8192C111.171 17.954 110.145 18.5669 109.44 19.5232L88.96 46.6H73.3793C73.2337 46.6 73.1145 46.6768 72.9732 46.696C72.3982 46.7495 71.839 46.9288 71.3292 47.2233C70.8195 47.5178 70.3698 47.9213 70.0072 48.4096C69.9189 48.5296 69.7865 48.6016 69.707 48.736L52.0519 77.536C51.6088 78.2582 51.3541 79.0976 51.315 79.9647C51.2759 80.8319 51.4537 81.6943 51.8296 82.4603C52.2056 83.2262 52.7655 83.8669 53.4497 84.3141C54.134 84.7614 54.917 84.9984 55.7153 85C57.141 85 57.4411 84.2512 58.293 82.864L66.7586 67.2544V85H93.2414V53.1424L115.39 25.6768C116.948 23.6368 117.252 20.6032 115.381 18.9088C114.959 18.5112 114.469 18.2099 113.938 18.0227C113.407 17.8355 112.847 17.7663 112.291 17.8192ZM20.4138 89.8C19.2432 89.8 18.1205 90.3057 17.2928 91.2059C16.465 92.1061 16 93.327 16 94.6C16 95.873 16.465 97.0939 17.2928 97.9941C18.1205 98.8943 19.2432 99.4 20.4138 99.4H27.0345V152.2C27.0345 153.473 27.4995 154.694 28.3273 155.594C29.155 156.494 30.2777 157 31.4483 157C32.6189 157 33.7416 156.494 34.5693 155.594C35.397 154.694 35.8621 153.473 35.8621 152.2V99.4H124.138V152.2C124.138 153.473 124.603 154.694 125.431 155.594C126.258 156.494 127.381 157 128.552 157C129.722 157 130.845 156.494 131.673 155.594C132.5 154.694 132.966 153.473 132.966 152.2V99.4H139.586C140.757 99.4 141.879 98.8943 142.707 97.9941C143.535 97.0939 144 95.873 144 94.6C144 93.327 143.535 92.1061 142.707 91.2059C141.879 90.3057 140.757 89.8 139.586 89.8H20.4138ZM57.931 104.2V145C57.931 145.637 58.1635 146.247 58.5774 146.697C58.9913 147.147 59.5526 147.4 60.1379 147.4C60.7232 147.4 61.2846 147.147 61.6984 146.697C62.1123 146.247 62.3448 145.637 62.3448 145V104.2H57.931ZM66.7586 104.2V142.6C66.7586 143.873 67.2236 145.094 68.0514 145.994C68.8791 146.894 70.0018 147.4 71.1724 147.4C72.343 147.4 73.4657 146.894 74.2934 145.994C75.1212 145.094 75.5862 143.873 75.5862 142.6V109H84.4138V142.6C84.4138 143.873 84.8788 145.094 85.7066 145.994C86.5343 146.894 87.657 147.4 88.8276 147.4C89.9982 147.4 91.1209 146.894 91.9486 145.994C92.7764 145.094 93.2414 143.873 93.2414 142.6V104.2H66.7586ZM97.6552 104.2V145C97.6552 145.637 97.8877 146.247 98.3016 146.697C98.7154 147.147 99.2768 147.4 99.8621 147.4C100.447 147.4 101.009 147.147 101.423 146.697C101.836 146.247 102.069 145.637 102.069 145V104.2H97.6552Z"
                    fill="#E3EEF7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_335_331">
                    <rect width="159" height="135" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h1 className="text-center text-3xl font-semibold mt-8">
              Inspire learners
            </h1>
            <p className="text-center mt-12 px-4 sm:px-0">
              Teach what you know and help learners explore their interests,
              gain new skills, and advance their careers.
            </p>
          </div>
        </div>

        {/* partition for box 3*/}

        <div className="w-full h-full relative flex justify-center items-center">
          <div className="h-[450px] w-[80%] sm:w-[506px] rounded-[40px] dark:bg-slate-900 bg-slate-600 relative mt-10 flex flex-col items-center justify-center">
            <div className="fill-white mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="135"
                height="129"
                viewBox="0 0 135 129"
                fill="none"
              >
                <path
                  d="M67.875 80.8587C89.6212 80.8587 107.25 64.0134 107.25 43.2337C107.25 22.454 89.6212 5.6087 67.875 5.6087C46.1288 5.6087 28.5 22.454 28.5 43.2337C28.5 64.0134 46.1288 80.8587 67.875 80.8587Z"
                  stroke="#E3EEF7"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.1813 74.6588L39.375 123.625L67.5 107.5L95.625 123.625L88.8187 74.605"
                  stroke="#E3EEF7"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-center text-3xl font-semibold mt-8">
              Get rewarded
            </h1>
            <p className="text-center mt-12 px-4 sm:px-0">
              Expand your professional network, build your expertise, and earn
              money on each paid enrollment.
            </p>
          </div>
        </div>
      </div>

      {/* Counter Section */}

      <div className="w-80% h-1 ml-[10%] mr-[10%] bg-black dark:bg-white"></div>
      <div className="ml-10 flex-row md:flex sm:flex justify-evenly dark:text-white text-black mb-5">
        <Counter number={40} postfix="M" title="Students" />
        <Counter number={50} postfix="K" title="Instructors" />
        <Counter number={130} postfix="K" title="Courses" />
        <Counter number={65} postfix="M" title="Course Enrollments" />
      </div>

      {/* Enrollment Section */}
      <div className="card h-fit max-w-3xl p-5 md:p-12 md:ml-[25%]" id="form">
        <h2 className="mb-4 text-2xl font-bold dark:text-white text-black ">
          Start Creating An Online Video Course And Earn Money By Teaching
          People.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-black dark:text-white"
        >
          <div className="mb-6">
            <div className="mx-0 mb-1 sm:mb-4">
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="name"
                  className="pb-1 text-xs uppercase tracking-wider"
                />
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  autoComplete="given-name"
                  placeholder="Your name"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  name="name"
                />
                {errors.name && <span>Name is required</span>}
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="phone"
                  className="pb-1 text-xs uppercase tracking-wider"
                />
                <input
                  type="number"
                  id="phone"
                  autoComplete="given-phone"
                  placeholder="Your Contact Number"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  name="phone"
                />
                {errors.name && <span>Contact Number is required</span>}
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="email"
                  className="pb-1 text-xs uppercase tracking-wider"
                />
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  autoComplete="email"
                  placeholder="Your email address"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  name="email"
                />
                {errors.email && <span>Email is required</span>}
              </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="message"
                className="pb-1 text-xs uppercase tracking-wider"
              />

              <textarea
                id="message"
                {...register("message", { required: true })}
                name="message"
                cols={30}
                rows={5}
                placeholder="Write your message..."
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                defaultValue={""}
              />
              {errors.message && <span>Message is required</span>}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Teacher;
