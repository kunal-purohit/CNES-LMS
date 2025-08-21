import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Sunny chahal",
    avatar: "https://res.cloudinary.com/dqmiqguh2/image/upload/v1725383729/Sunny-150x150_osqtcw.jpg",
    // profession: "Student | Cambridge university",
    comment:
    "I can confidently say that the Centre for Nutrition & Exercise Sciences is hands down the best quality online course provider out there. The value they deliver is unmatched, offering top-notch courses at the most reasonable prices. The material is presented in a way that's not only easy to understand but also incredibly engaging, making even complex subjects enjoyable to learn.",
},
  {
    name: "Eliana joseh",
    avatar: "https://res.cloudinary.com/dqmiqguh2/image/upload/v1725383729/Eliana-joseh-150x150_sqg5ei.jpg",
    // profession: "Full stack developer | Quarter ltd.",
    comment:
    "I thoroughly enjoyed my experience with the Centre for Nutrition and Exercise Science. What initially seemed like a standard course turned out to be a pleasantly surprising journey into in-depth and highly informative content. The depth of knowledge provided exceeded my expectations and left me with a profound understanding of the subject matter.",
},
  {
    name: "Kanika",
    avatar: "https://res.cloudinary.com/dqmiqguh2/image/upload/v1725383738/Kanika-150x150_kjvoee.jpg",
    // profession: "computer systems engineering student | Zimbabwe",
    comment:
    "Whether you're a beginner or looking to enhance your existing knowledge, this platform caters to all levels. The combination of affordability, user-friendly courses, and a dedicated team makes this center a standout choice for anyone serious about delving into the realms of nutrition and exercise sciences"},
//   {
//     name: "Mina Davidson",
//     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//     profession: "Junior Web Developer | Indonesia",
//     comment:
//     "I had the pleasure of exploring Becodemy, a website that provides an extensive range of courses on various tech-related topics. I was thoroughly impressed with my experience",
// },
//   {
//     name: "Rosemary Smith",
//     avatar: "https://randomuser.me/api/portraits/women/3.jpg",
//     profession: "Full stack web developer | Algeria",
//     comment:
//     "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
// },
//   {
//     name: "Laura Mckenzie",
//     avatar: "https://randomuser.me/api/portraits/women/4.jpg",
//     profession: "Full stack web developer | Canada",
//     comment:
//     "Join Becodemy! Becodemy focuses on practical applications rather than just teaching the theory behind programming languages or frameworks. I took a lesson on creating a web marketplace using React JS, and it was very helpful in teaching me the different stages involved in creating a project from start to finish. Overall, I highly recommend Becodemy to anyone looking to improve their programming skills and build practical projects. Becodemy is a great resource that will help you take your skills to the next level.",
// },
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          {/* <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p> */}
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;
