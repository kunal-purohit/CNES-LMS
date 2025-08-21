"use client";
import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../utils/Heading";
import Teacher from "./Teacher";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Teacher - CNES"
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
      <Teacher />
      <Footer />
    </div>
  );
};

export default Page;
