"use client";

import OrangeNike from "@/assets/Nike.svg";
import BlackNike from "@/assets/blackNike.svg";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Arrows from "@/assets/Union-s.svg";

const StepTwo = ({ steps, setSteps }: { steps: any; setSteps: any }) => {
  return (
    <div className="grid grid-rows-2 items-center justify-items-center">
      <div className="text-[16.01px] font-[700] text-[#B6B6B6] font-[signika]">QUESTION 1</div>
      <div className="text-[29px] font-[700] text-[#FFFFFF] mt-3">
        What is your preferred choice?
      </div>
      <div className="flex justify-center items-center gap-4 mt-3">
        <div className="rounded-md bg-[#6D6D6D] p-5">
          <p className="text-center">Nike Orange</p>
          <Image src={OrangeNike} alt="Nike Orange"></Image>
        </div>
        <div className="rounded-md bg-[#6D6D6D] p-5">
          <p className="text-center">Nike Orange</p>
          <Image src={BlackNike} alt="Nike Black"></Image>
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
          className="bg-[#BBE94A] text-[black] rounded-full text-[24px] p-4"
          onPress={() => setSteps(steps + 1)}
        >
          Next <Image src={Arrows} alt="Arrows" className="ml-2"></Image>
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
