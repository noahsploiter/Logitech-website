import Image from "next/image";
import React from "react";
import image from "../public/2.jpg";

function Product() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <Image
          src={image}
          class="object-cover w-full h-[400px]"
          alt="Flower and sky"
        />

        <div class="absolute top-0 mt-[100px] space-y-6 left-0 px-6 py-4 w-full flex justify-center flex-col items-center">
          <h4 class="mb-3 text-4xl  font-semibold tracking-tight text-white ">
            Logitech Graphic Tablet-Space Gamer rE0
          </h4>
          <p class="leading-normal text-gray-100 text-2xl font-mono">
            Very proefficient mouse for gaming
          </p>
          <button className="w-[170px] rounded-xl border h-[50px] text-white">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
