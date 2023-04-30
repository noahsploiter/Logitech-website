import React from "react";
import image from "../public/1.png";
import Image from "next/image";

function Mouse() {
  return (
    <div className="flex justify-center md:mt-[-200px]">
      <div>
        <Image width={600} height={600} src={image} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Mouse;
