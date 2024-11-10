"use client";

import Shoes from "@/assets/shoes.svg";
import Arrow from "@/assets/Union.svg";
import Arrows from "@/assets/Union-s.svg";

import Image from "next/image";

const StepOne = ({ steps, setSteps }: { steps: any; setSteps: any }) => {
  console.log(steps);
  return (
    <div className="flex justify-center grid grid-cols-2 items-center justify-items-center ">
      <div className="relative">
        <Image src={Arrow} alt="Arrow" className="w-[80%]"></Image>
        <Image src={Shoes} alt="Shoes" className="absolute top-[6rem]"></Image>
      </div>
      <div className="mr-[3rem]">
        <div className="text-[85.35px]">Questionnaire</div>
        <div className="text-[24px] text-[black] bg-[#EDB6D2] rounded-[34.92px] p-[32.01px] gap-[7.28px]">
          Welcome! <br />
          We're excited to hear your thoughts, ideas, and insights. Don't worry
          about right or wrong answers—just speak from the heart. Your genuine
          feedback is invaluable to us!
        </div>
        <form className="w-full space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block my-3 text-[20px] font-[500]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 px-10 bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-full flex items-center justify-between space-x-2 my-3"
            onClick={() => setSteps(steps + 1)}
          >
            <span className="text-[23.28px] font-[700]">Start Survey</span>
            <Image src={Arrows} alt="Arrows"></Image>
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
