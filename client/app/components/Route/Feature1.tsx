import React from "react";
import { FaAward, FaRotateRight } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";



const Feature1 = () => {
  return (
    <div>
      <div className="sm:h-[176px] md:h-fit w-[95%] mx-auto text-black dark:text-white mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-28 gap-y-4">
          <div className="p-4 text-center">
            <div className="flex justify-center">
              <MdCheckCircleOutline size={60} />
            </div>
            <div className="mt-2">
              <h1 className="text-3xl inline-block font-semibold ">
                Accreditation & Recognition
              </h1>
              <p className="mt-2">
                Fully Accredited institute with internationally Accredited
                courses
              </p>
            </div>
          </div>
          <div className="p-4 text-center">
            <div className="flex justify-center">
              <FaAward size={60} />
            </div>
            <div className="mt-2">
              <h1 className="text-3xl inline-block font-semibold">Rated Highly</h1>
              <p className="mt-2">Thousands of happy customers across 150 different countries</p>
            </div>
          </div>
          <div className="p-4  text-center">
            <div className="flex justify-center">
              <FaRotateRight size={60} />
            </div>
            <div className="mt-2">
              <h1 className="text-3xl inline-block font-semibold ">Instant Access</h1>
              <p className="mt-2">Learn on your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature1;
