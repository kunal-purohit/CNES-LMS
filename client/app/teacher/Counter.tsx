import React from "react";
import CountUp from "react-countup";

interface CounterProps {
  number: number;
  title: string;
  postfix: string;
}

const Counter: React.FC<CounterProps> = ({ number, title, postfix }) => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl font-bold">
    <div className="flex items-center justify-center mt-10">
      <CountUp duration={10} className="justify-center" end={number} />
      {postfix && <span className="ml-2">{postfix}</span>}
    </div>
    <span className="flex justify-center text-center">{title}</span>
  </div>
  );
};

export default Counter;