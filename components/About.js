import Image from "next/image";
import React from "react";
import image from "../public/3.jpg";

function About() {
  return (
    <div className="mt-[150px] flex justify-center space-x-10 p-10">
      <div className="">
        <Image
          className="h-[350px] rounded-md w-[500px] object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="w-[400px] space-y-5">
        <h1 className="text-5xl font-bold text-[#076cdf]">
          EMPLOYEE PERFORMANCE
        </h1>
        <h1 className="text-3xl">
          The Multi-Touch surface allows you to perform simple perform
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ut
          ipsam natus alias dolore ipsa voluptate error sit laboriosam labore,
          ea voluptates optio laudantium animi aperiam? Similique iste et amet?
        </p>
        <button className="w-[180px] rounded-xl bg-[#0b69b6] h-[50px] text-white">
          Visit Now
        </button>
      </div>
    </div>
  );
}

export default About;
