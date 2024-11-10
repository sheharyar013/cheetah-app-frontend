"use client";

import { useState } from "react";
import StepOne from "./components/Stepone";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Shoes from "@/assets/shoes.svg";
import Arrow from "@/assets/Union.svg";
import Arrows from "@/assets/Union-s.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Home() {
  const [steps, setSteps] = useState(0);
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[signika]">
      {steps === 1 ? (
        <StepTwo setSteps={setSteps} steps={steps} />
      ) : steps === 2 ? (
        <StepThree setSteps={setSteps} steps={steps} />
      ) : steps === 3 ? (
        <div className="flex justify-center grid grid-cols-2 items-center justify-items-center font-[signika]">
          <div className="relative">
            <Image src={Arrow} alt="Arrow" className="w-[80%]"></Image>
            <Image
              src={Shoes}
              alt="Shoes"
              className="absolute top-[6rem]"
            ></Image>
          </div>
          <div className="mr-[3rem] mt-[10rem]">
            <div className="text-[85.35px]">Thanks You</div>
            <div className="text-[32px] text-right">for your feedback!</div>
            <div className="mt-10 flex justify-center gap-3">
            <Button
              variant="bordered"
              className="bg-[#EDB6D2] text-[black] rounded-full text-[24px]"
              onPress={() => setSteps(steps - 1)}
            >
              Back
            </Button>
            <Button
              variant="bordered"
              className="bg-[white] text-[black] rounded-full text-[24px]"
              onPress={() => setSteps(0)}
            >
              Back to Home <Image src={Arrows} alt="Arrows" className="ml-2"></Image>
            </Button>
            </div>
          </div>
         
        </div>
      ) : (
        <StepOne setSteps={setSteps} steps={steps} />
      )}
    </div>
  );
}
