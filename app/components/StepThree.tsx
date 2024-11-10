"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Arrows from "@/assets/Union-s.svg";

const StepThree = ({ steps, setSteps }: { steps: any; setSteps: any }) => {
  return (
    <div className="grid grid-rows-2 items-center justify-items-center">
      <div className="text-[16.01px] font-[700] text-[#B6B6B6]">QUESTION 2</div>
      <div className="text-[29px] font-[700] text-[#FFFFFF] mt-3">
        How important are these aspects for you?
      </div>
      <div className="px-8 py-2 bg-white w-[40%] rounded-full mt-10 flex">
        <p className="text-black font-[700] text-[24px]">Comfort</p>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="px-8 py-2 bg-white w-[40%] rounded-full mt-10 flex">
        <p className="text-black font-[700] text-[24px]">Looks</p>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="px-8 py-2 bg-white w-[40%] rounded-full mt-10 flex">
        <p className="text-black font-[700] text-[24px]">Price</p>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="flex justify-between mt-12 w-[40%]">
        <Button
          variant="bordered"
          className="bg-[#EDB6D2] text-[black] rounded-full text-[24px] p-4"
          onPress={() => setSteps(steps - 1)}
        >
          Back
        </Button>
        <Button
          variant="bordered"
          className="bg-[white] text-[black] rounded-full text-[24px] p-4"
          onPress={() => setSteps(steps + 1)}
        >
          Send <Image src={Arrows} alt="Arrows" className="ml-2"></Image>
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
