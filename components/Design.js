import React from "react";
import image from "../public/6.jpeg";
import Image from "next/image";
import image2 from "../public/7.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

function Design() {
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center">
      <div className="flex space-x-[200px] pl-10">
        <div>
          <h1 className="text-[#0b69b6] text-3xl mt-[100px] font-bold">
            BEAUTIFUL DESIGN
          </h1>
          <h1 className="w-[300px] font-bold pt-5 text-2xl">
            Its styles, polished selected and designed the you want it
          </h1>
          <p className="w-[300px] pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ipsa, nostrum neque dolores at modi fugit.
          </p>
          <button className="mt-5 w-[150px] rounded-xl bg-[#0b69b6] h-[40px] text-white">
            Visit Now
          </button>
        </div>
        <div className="">
          <Image
            className="w-[300px] hidden md:flex h-[200px] object-cover rounded-md"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="flex space-x-[200px] mt-[100px]">
        <div>
          <Image
            className="w-[300px] hidden md:flex object-cover h-[200px] rounded-md"
            src={image2}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[#0b69b6] text-3xl font-bold">
            BEAUTIFUL DESIGN
          </h1>
          <h1 className="w-[300px] font-bold pt-5 text-2xl">
            The success of your business is driven by people
          </h1>
          <p className="w-[300px] pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ipsa, nostrum neque dolores at modi fugit.
          </p>
          <div className="flex space-x-4 mt-5">
            <MdArrowBackIos className="pl-2 text-3xl border border-[#0b69b6] rounded-full text-[#0b69b6]" />
            <IoIosArrowForward className="text-3xl border border-[#0b69b6] bg-[#0b69b6] rounded-full text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
