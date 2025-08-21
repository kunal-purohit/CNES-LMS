import React from "react";
import { styles } from "../styles/style";

type Props = {};

interface Data {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
}

const data: Data[] = [
  {
    column1: "FITFLO Delhi, India",
    column2: "Workshops, Online learning",
    column3: "Ninkal",
    column4: "CNES24022401",
  },
  {
    column1: "FITBOXX , Dehradun, Uttrakhand",
    column2: "Fitness Trainer",
    column3: "Pinaaki Sen",
    column4: "CNES09062401",
  },
  {
    column1: "The Gimnasio, Bhatinda, Punjab",
    column2: "Fitness Trainer, Personal Trainer",
    column3: "Harinder Singh Dhanoa",
    column4: "CNES10062402",
  },
  {
    column1: "Health Route wellness, Thrissur, Kerala",
    column2: "Fitness Trainer, Personal Trainer",
    column3: "Sijo Elinjikkadan",
    column4: "CNES10062401",
  },
  {
    column1: "Greens Fitness Academy, Kozhikode, Kerala",
    column2: "Fitness Trainer",
    column3: "Yasin Hassan",
    column4: "CNES15062401",
  },
  {
    column1: "S J Consultant, Bangalore, Karnataka",
    column2: "Personal Trainer, Nutrition",
    column3: "Jay Chandran",
    column4: "CNES10082401",
  },
  {
    column1: "Pankh Fitness Studio, Indore, Madhya Pradesh",
    column2: "Fitness Trainer, Dance Instructor, Yoga",
    column3: "Mukta Singh",
    column4: "CNES28122401",
  },
  {
    column1: "Revive Fitness, Malappuram, Kerala",
    column2: "Fitness Trainer , Dance Fitness",
    column3: "Ayyub Parangodth",
    column4: "CNES28122401",
  },
  {
    column1: "Max Impact Fitness Academy, Trivandrum, Kerala",
    column2: "Fitness Trainer, Personal Trainer ",
    column3: "Riyas A S",
    column4: "CNES23012501",
  },
  {
    column1: "Stallion Xtreme Fitness, Hyderabad, Telangana",
    column2: "Certified Personal, Fitness Trainer",
    column3: "Bijith",
    column4: "CNES23012502",
  },

];

const Partners = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3 min-h-screen mt-10"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2 flex justify-center`}>
          <b>CNES Associated Training Partners</b>
        </h1>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full bg-white text-black ">
            <thead className="dark:bg-white dark:text-black bg-black text-white">
              <tr className="">
                <th className="py-2 px-4">COMPANY / ORGANIZATION</th>
                <th className="py-2 px-4"> APPROVED / ASSIGNED PROGRAMS</th>
                <th className="py-2 px-4">CONTACT PERSON </th>
                <th className="py-2 px-4">CODE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-[#D9D9D9] bg-opacity-32 text-center">
                  <td className="py-2 px-4">{row.column1}</td>
                  <td className="py-2 px-4">{row.column2}</td>
                  <td className="py-2 px-4">{row.column3}</td>
                  <td className="py-2 px-4">{row.column4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Partners;
