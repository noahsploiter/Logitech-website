import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className="bg-[#0d0d0e] flex text-white justify-between p-10 text-xl font-serif">
      <div className="cursor-pointer">
        <h1>Logitech</h1>
      </div>
      <div className="space-x-5 hidden md:flex cursor-pointer">
        <h1>Products</h1>
        <h1>WhyLogitech</h1>
        <h1>Pricing</h1>
        <h1>Accessoies</h1>
        <h1>Support</h1>
      </div>
      <div className="flex space-x-5 cursor-pointer">
        <BsSearch />
        <BsFillPersonFill />
      </div>
    </div>
  );
}

export default Header;
