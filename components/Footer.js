import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";

function Footer() {
  return (
    <div className="md:flex hidden justify-center space-x-[200px] bg-[#0d0d0e] text-white mt-[100px] pt-[50px] pb-5">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">Logitech</h1>
        <h3 className="w-[200px]">
          AtLogitech, every product we make is built to lost
        </h3>
        <div className="flex space-x-5 text-3xl">
          <BsFacebook />
          <FaTwitch />
          <AiFillAndroid />
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">Company</h1>
        <div>
          <h3>About Us</h3>
          <h3>Core services</h3>
          <h3>Policies</h3>
          <h3>Reviews</h3>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-bold ">Newsletter</h1>
        <p className="w-[200px]">Bring other and get update from us</p>
        <div className="border border-[#474747] bg-transparent h-[35px] w-[250px] rounded-md flex items-center space-x-4">
          <input
            className=" bg-transparent h-[35px] w-[200px] rounded-md outline-none pl-3"
            type="text"
            placeholder="Your email address"
          />
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
