import React from "react";
import { MdBluetoothAudio } from "react-icons/md";
import { BiPodcast } from "react-icons/bi";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="bg-[#0d0d0e] text-white h-screen">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center pt-[140px] text-3xl md:text-6xl font-extrabold w-screen"
      >
        <h1>Logitech Mouse-Graphic</h1>
        <h1>Tablet Mouse</h1>
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between p-10"
      >
        <div className="flex">
          <MdBluetoothAudio className="h-[100px] w-[100px]" />
          <h1 className="pt-[50px]">Logitech graphical mouse</h1>
        </div>
        <div className="flex space-x-4 mt-[70px] h-[50px]">
          <button className="w-[170px] rounded-xl bg-[#0b69b6]">BuyNow</button>
          <button className="w-[170px] rounded-xl border">Addtobag</button>
        </div>
        <div className="flex mt-[100px]">
          <BiPodcast className="h-[100px] w-[100px]" />
          <h1 className="pt-[50px]">2.4ghz Network broadband</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
