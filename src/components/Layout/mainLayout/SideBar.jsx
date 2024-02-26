import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/images";
const SideBar = () => {
  return (
    <div className="bg-[#F39D12] fixed h-[100%]  ">
      <img className=" mt-4 px-5" src={logo} alt="" />
      <ul className=" flex flex-col gap-4 mt-16">
        <Link className=" py-2 px-5 hover:text-black hover:bg-white text-white" to="dashboard">
          Dashboard
        </Link>
        <Link className=" py-2 px-5 hover:text-black hover:bg-white  text-white" to="user">
          User
        </Link>
        <Link className=" py-2 px-5 hover:text-black hover:bg-white text-white" to="owner">
          Owner
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
