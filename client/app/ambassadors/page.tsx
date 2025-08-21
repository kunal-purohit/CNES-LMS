"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ambassadors from "./Ambassadors";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Ambassadors - CNES"
        description="Centre for Nutrition & Exercise Sciences envisions a world where fitness education is accessible to everyone, empowering individuals to lead healthier lives. We aspire to be a leading force in revolutionizing fitness education, offering innovative and inclusive programs that inspire a global community to embrace physical well-being. Our vision is to foster a culture where fitness is not just a routine but a lifestyle, promoting overall health, happiness, and longevity."
        keywords="Nutrition courses, exercise science, fitness certification, online courses, CNES, accredited programs, wellness education, health and fitness, sports nutrition, personal training"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center mt-10 dark:text-white text-black">
          Our Ambassadors
        </h1>
        <Ambassadors />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
