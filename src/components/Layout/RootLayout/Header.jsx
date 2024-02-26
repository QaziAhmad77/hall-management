import React from "react";
import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";
import Link12 from "../../Home/Link12";
const Header = () => {
  return (
    <div className=" fixed w-full bg-white z-50">
      <div className=" md:flex hidden items-center justify-between w-[90%] mx-auto py-3">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link12 />
        <div className=" flex gap-4">
          <Link
            className=" bg-[#F39D12] rounded-[5px] py-2 px-3 text-white"
            to="/signin"
          >
            SignIn
          </Link>
          <Link
            className=" bg-[#F39D12] rounded-[5px] py-2 px-3 text-white"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
