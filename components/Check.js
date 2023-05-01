import Image from "next/image";
import React from "react";
import image1 from "../public/4.jpg";
import image2 from "../public/5.jpg";
import { motion } from "framer-motion";

function Check() {
  return (
    <div className="bg-[#0d0d0e]  mt-[100px] w-screen md:h-[500px]">
      <div className="">
        <div className="pt-10 md:flex-row flex flex-col items-center space-y-10 md:space-y-0  justify-center md:space-x-10">
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
          >
            <Image
              className="w-[300px] object-cover h-[200px] rounded-md"
              src={image1}
              alt=""
            />
            <h1 className="text-white font-bold w-[300px] text-2xl pt-5">
              Logitech G604 Lightspeed Wireless Gaming Mouse
            </h1>
            <p className="w-[300px] text-white pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium minus magnam ex iure deleniti voluptas debitis eum
              voluptatem nostrum consequatur.
            </p>
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
          >
            <Image
              className="w-[300px] object-cover h-[200px] rounded-md"
              src={image2}
              alt=""
            />
            <h1 className="text-white font-bold w-[300px] text-2xl pt-5">
              Logitech G604 Lightspeed Wireless Gaming Mouse
            </h1>
            <p className="w-[300px] text-white pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium minus magnam ex iure deleniti voluptas debitis eum
              voluptatem nostrum consequatur.
            </p>
          </motion.div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Check;
