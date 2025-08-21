"use client";
import React, { FC, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Contact Us - CNES"
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Page;
