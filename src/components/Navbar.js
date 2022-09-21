/** @format */
import React from "react";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex items-center justify-around h-[60px] shadow">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        alt=""
        className="h-12 object-contain"
      />
      <div className="flex flex-row space-x-4">
        <AiFillHome size={30} />
        <BsFillPersonFill size={30} />
        <AiOutlinePlusCircle size={30} />
      </div>
    </div>
  );
}

export default Navbar;