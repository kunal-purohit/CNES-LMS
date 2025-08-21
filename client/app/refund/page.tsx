"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Refund from "./Refund";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
       title="Refund - CNES"
       description="The Core Ideology of the Centre for Nutrition and Exercise Sciences revolves around educating, upskilling, and inspiring individuals to prioritize their well-being through proper nutrition and exercise science."
       keywords="cnes,cpt,personaltrainer,fitnessacademy,fitness"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Refund/>
      <Footer />
    </div>
  );
};

export default Page;
