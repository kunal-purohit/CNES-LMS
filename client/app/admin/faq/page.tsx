"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditFaq from "../../components/Admin/Customization/EditFaq";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="FAQ - CNES"
        description="The Core Ideology of the Centre for Nutrition and Exercise Sciences revolves around educating, upskilling, and inspiring individuals to prioritize their well-being through proper nutrition and exercise science."
        keywords="cnes,cpt,personaltrainer,fitnessacademy,fitness"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditFaq />
            <br />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
