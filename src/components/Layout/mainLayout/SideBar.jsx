import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../../assets/images";

const SideBar = () => {
  const location = useLocation()
  return (
    <div className="bg-[#F39D12] fixed h-[100%]  ">
      <Link to="/halls">
        <img className=" mt-4 px-5" src={logo} alt="" />
      </Link>
      <ul className=" flex flex-col gap-4 mt-16">
        <Link to="/dashboard" className={`py-3 px-5 ${location.pathname === "/dashboard" ? "bg-orange-300 text-white" : "text-white"}`}>
          Dashboard
        </Link>
        <Link to="/users" className={`py-3 px-5 ${location.pathname === "/users" ? "bg-orange-300 text-white" : "text-white"}`} >
          Users
        </Link>
        <Link to="/hall-list" className={`py-3 px-5 ${location.pathname === "/hall-list" ? "bg-orange-300 text-white" : "text-white"}`} >
          Halls
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
