import React from "react";
import Image from "next/image";
import { styles } from "../styles/style";
import OurTeam from "./OurTeam";

const About: React.FC = () => {
  const logo:any= process.env.NEXT_PUBLIC_LOGO_URL;
  return (
    <div className="text-black dark:text-white relative">
      {/* Top Section */}
      <div className="flex justify-center">
        <div>
          <Image
            src={logo}
            alt="Avatar"
            width={180}
            height={180}
          />
        </div>
      </div>
      <div className="text-center mt-4 text-3xl">
        <b>
          <h1>EDUCATE | UPSKILL</h1>
          <h1>INSPIRE</h1>
        </b>
      </div>
      {/* title section */}
      <div className="text-center mt-10 text-2xl mb-4 flex-row justify-center ">
        <h2>
          <b>CNES Core Ideology</b>
        </h2>
        <p className="mt-4  mx-auto max-w-[80%] mb-5">
          The Core Ideology of the Centre for Nutrition & Exercise Sciences
          revolves around educating, upskilling, and inspiring individuals to
          prioritize their well-being through proper nutrition and exercise
          science.
        </p>
        <br></br>
      </div>

      {/* who are we*/}
      <div className="text-2xl font-bold w-60 h-12 bg-gray-300 rounded-full absolute z-10 left-[63%] transform translate-x-[-63%] mt-[-16px] mb-4">
        <h2 className="mt-2 ml-10 dark:text-black">Who Are We?</h2>
      </div>

      <div className="mx-auto max-w-[80%] rounded-tl-[100px] rounded-br-[100px] bg-[#cde7f4] dark:bg-[#15232e] p-4 mt-14 relative flex flex-col sm:flex-row items-center justify-center">
        {/* Left div for image */}

        <div className="w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0  object-cover">
          <Image
            src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1720627312/AFV09536_1_z6zivy.jpg"
            alt="Avatar"
            width={650}
            height={450}
            
            className="rounded-tl-[68px] "
          />
        </div>

        {/* Right div for text */}
        <div className="w-full sm:w-1/2 px-4">
          <h3 className="font-bold text-center sm:text-left">
            Centre for Nutrition & Exercise Sciences
          </h3>
          <p className="mb-4">
            Center for Nutrition & Exercise Sciences envisions a world where
            fitness education is accessible to everyone, empowering individuals
            to lead healthier lives. We aspire to be a leading force in
            revolutionizing fitness education, offering innovative and inclusive
            programs that inspire a global community to embrace physical
            well-being. Our vision is to foster a culture where fitness is not
            just a routine but a lifestyle, promoting overall health, happiness,
            and longevity.
          </p>
        </div>
      </div>

      <br />

      {/* why join us */}
      <div className="text-2xl font-bold w-64 h-12 bg-gray-300 rounded-full absolute z-10 left-[30%] transform translate-x-[-30%] mt-[16]px] mr-52">
        <h2 className="mt-2 ml-6 dark:text-black">Why to join CNES? </h2>
      </div>

      {/* Section-2 for desktop version  */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[80%] rounded-tr-[100px] rounded-bl-[100px]  bg-[#cde7f4] dark:bg-[#15232e] p-4 mt-14 relative flex flex-col sm:flex-row items-center justify-center">
          {/* left div for text */}
          <div className="w-full sm:w-1/2 px-4">
            <p className="text-center sm:text-left mb-4 text-md">
              <ul className="list-disc ">
                <li>
                  <b>Convenience:</b> Study at your own pace, fitting learning
                  around your schedule.
                </li>
                <li>
                  <b>Flexibility:</b> Tailored courses to suit your needs,
                  providing a personalized learning experience.
                </li>
                <li>
                  <b>Career Boost:</b> Advance your career with specialized
                  courses aligned with industry trends.
                </li>
                <li>
                  <b>Updated Learning:</b> Stay current with regularly updated
                  content in nutrition and exercise sciences
                </li>
                <li>
                  <b>Anytime, Anywhere:</b> Upskill from the comfort of your
                  home or anywhere that suits you.
                </li>
                <li>
                  <b>Accredited Courses:</b> Gain qualifications that are
                  recognized and respected in the industry.
                </li>
                <li>
                  <b>Accessible Education:</b> Enjoy the ease of accessing
                  education without geographical limitations.
                </li>
              </ul>
            </p>
          </div>

          {/* Right div for image */}

          <div className="w-full sm:w-1/2 flex justify-end mb-4 sm:mb-0">
            <Image
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1723235274/Why_Join_Us_sf9f5l.jpg"
              alt="Avatar"
              width={400}
              height={250}
              
              className="rounded-tr-[100px] "
            />
          </div>
        </div>
      </div>

      {/* Section-2 for Mobile version  */}
      <div className="block lg:hidden">
        <div className="mx-auto max-w-[80%] rounded-tr-[100px] rounded-bl-[100px]  bg-[#cde7f4] dark:bg-[#15232e] p-4 mt-14 relative flex flex-col sm:flex-row items-center justify-center">
          {/* Left div for image */}

          <div className="w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0 ">
            <Image
              src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1723235274/Why_Join_Us_sf9f5l.jpg"
              alt="Avatar"
              width={380}
              height={180}
              className="rounded-tr-[100px] "
            />
          </div>

          {/* Right div for text */}
          <div className="w-full sm:w-1/2 px-4">
            <h3 className="font-bold text-center sm:text-left mb-2">
              Centre for Nutrition & Exercise Sciences
            </h3>
            <p className="text-start sm:text-left mb-4">
              <ul>
                <li>
                  <b>Convenience:</b> Study at your own pace, fitting learning
                  around your schedule.
                </li>
                <li>
                  <b>Flexibility:</b> Tailored courses to suit your needs,
                  providing a personalized learning experience.
                </li>
                <li>
                  <b>Career Boost:</b> Advance your career with specialized
                  courses aligned with industry trends.
                </li>
                <li>
                  <b>Updated Learning:</b> Stay current with regularly updated
                  content in nutrition and exercise sciences
                </li>
                <li>
                  <b>Anytime, Anywhere:</b> Upskill from the comfort of your
                  home or anywhere that suits you.
                </li>
                <li>
                  <b>Accredited Courses:</b> Gain qualifications that are
                  recognized and respected in the industry.
                </li>
                <li>
                  <b>Accessible Education:</b> Enjoy the ease of accessing
                  education without geographical limitations.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* --------Mission and Vision Section Desktop Version--------- */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-[80%] p-4 mt-14 relative flex flex-col sm:flex-row items-center justify-center">
            {/* Left div for image */}

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full sm:w-auto">
              <div className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 ">
                <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202763/1_wvgxji.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 "></img>
              </div>
              <div className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 ">
              <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202766/2_uruj2g.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 "></img>
              </div>
              <div className="text-2xl font-bold w-[265px] h-[350px] ">
              <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202495/3_jqnfod.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 "></img>

              </div>
              <div className="text-2xl font-bold w-[265px] h-[350px]  ">
              <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202495/4_mkpaoy.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 bg-cover "></img>

              </div>
            </div>

            {/* Right div for text */}
            <div className="grid grid-cols-1 sm:grid-cols-1 mx-auto max-w-[50%]">
              <div className="text-2xl font-bold w-60 h-12 bg-gray-300 rounded-full absolute z-10 left-[86%] transform translate-x-[-63%] mt-[-16px] mb-4">
                <h2 className="mt-2 text-center dark:text-black ">
                  Our Mission
                </h2>
              </div>
              <div className=" rounded-tl-[100px] rounded-br-[100px]  bg-[#cde7f4] dark:bg-[#15232e] p-10  ml-16 relative sm:flex-row items-center justify-center">
                <ol className="list-decimal p-2">
                  <li>
                    <b>Educate:</b> Study at your own pace, fitting learning
                    around your schedule.
                  </li>
                  <li>
                    <b>Upskill:</b> Tailored courses to suit your needs,
                    providing a personalized learning experience.
                  </li>
                  <li>
                    <b>Inspire:</b> Advance your career with specialized courses
                    aligned with industry trends.
                  </li>
                </ol>
              </div>

              {/* ------Our Vision Section--------- */}
              <div className="mt-14 ">
                <div className="text-2xl font-bold w-60 h-12 bg-gray-300 rounded-full absolute z-10 left-[69%] transform translate-x-[-69%] mt-[-16px] mb-4">
                  <h2 className="mt-2 text-center dark:text-black ">
                    Our Vision
                  </h2>
                </div>
                <div className=" rounded-tr-[100px]  rounded-bl-[100px]  bg-[#cde7f4] dark:bg-[#15232e] p-10  ml-16 relative sm:flex-row items-center justify-center">
                  <p>
                    Transforming lives through fitness & Nutrition education and
                    make it Affordable and Accessible to the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------Mission and Vision Section Mobile Version--------- */}
      <div className="block lg:hidden ">
        <div className="mx-auto max-w-[70%] sm:w-auto p-4 mt-14 relative flex items-center justify-center">
          {/* Left div for image */}

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full sm:w-auto">
            <div className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 ">
            <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202763/1_wvgxji.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 "></img>
            </div>
            <div className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 ">
            <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202766/2_uruj2g.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 "></img>
            </div>
            <div className="text-2xl font-bold w-[265px] h-[350px]  ">
            <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202495/3_jqnfod.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 "></img>
            </div>
            <div className="text-2xl font-bold w-[265px] h-[350px] ">
            <img src="https://res.cloudinary.com/dqmiqguh2/image/upload/v1727202495/4_mkpaoy.jpg" className="text-2xl font-bold w-[265px] h-[350px] rounded-tr-[100px] rounded-bl-[100px] bg-gray-300 bg-cover "></img>
            </div>
          </div>
        </div>
        {/*----Our Mission Section----- */}
        <div className="grid grid-cols-1 sm:grid-cols-1 mx-auto max-w-[80%] ml-10 mt-10">
          <div className="text-2xl font-bold w-60 h-12 bg-gray-300 rounded-full absolute z-10 left-[76%] transform translate-x-[-76%] mt-[-16px] mb-4">
            <h2 className="mt-2 text-center dark:text-black ">Our Mission</h2>
          </div>
          <div className=" rounded-tl-[100px] rounded-br-[100px]  bg-[#cde7f4] dark:bg-[#15232e] p-10  ml-10 relative sm:flex-row items-center justify-center">
            <ol className="list-decimal p-2">
              <li>
                <b>Educate:</b> Study at your own pace, fitting learning around
                your schedule.
              </li>
              <li>
                <b>Upskill:</b> Tailored courses to suit your needs, providing a
                personalized learning experience.
              </li>
              <li>
                <b>Inspire:</b> Advance your career with specialized courses
                aligned with industry trends.
              </li>
            </ol>
          </div>

          {/* ------Our Vision Section--------- */}
          <div className="mt-14 ">
            <div className="text-2xl font-bold w-60 h-12 bg-gray-300 rounded-full absolute z-10 left-[56%] transform translate-x-[-56%] mt-[-16px] mb-4">
              <h2 className="mt-2 text-center dark:text-black ">Our Vision</h2>
            </div>
            <div className=" rounded-tr-[100px]  rounded-bl-[100px]  bg-[#cde7f4] dark:bg-[#15232e] p-10  ml-16 relative sm:flex-row items-center justify-center">
              <p>
                Transforming lives through fitness & Nutrition education and
                make it Affordable and Accessible to the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -----CNES Core Values Section-------- */}
      <div className="mt-4 mb-4 flex flex-col items-center p-5">
        <h2 className="text-2xl text-center">
          <b>
            <u>CNES Core Values</u>
          </b>
        </h2>

        <ol className="mt-4 text-xl list-inside list-disc">
          <li>Commitment to excellence.</li>
          <li>Building trust-based relationships.</li>
          <li>Adherence to ethical and moral standards.</li>
          <li>Acknowledgment of efforts and accomplishments</li>
          <li>Promoting research and innovation.</li>
          <li>Dedication to customer satisfaction.</li>
        </ol>
      </div>

      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default About;
