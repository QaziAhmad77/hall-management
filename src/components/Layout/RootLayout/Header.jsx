import React from "react";
import { logo } from "../../../assets/images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Link12 from "../../Home/Link12";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const changeRoute = (route) => {
    if (localStorage.getItem("currentUser")) {
      navigate("/halls")
    } else {
      navigate(`${route}`)
    }
  }

  return (
    <div className=" fixed w-full bg-white z-50">
      <div className=" md:flex hidden items-center justify-between w-[90%] mx-auto py-3">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {location.pathname === "/signin" ||
          location.pathname === "/register" ? null : (
          <Link12 />
        )}
        <div className=" flex gap-4">
          {location.pathname !== "/signin" && (
            <div
              onClick={() => changeRoute("/signin")}
              className=" bg-[#F39D12] cursor-pointer rounded-[5px] py-2 px-3 text-white"
            >
              SignIn
            </div>
          )}
          {location.pathname !== "/register" && (
            <div
              onClick={() => changeRoute("/register")}
              className=" bg-[#F39D12] rounded-[5px] cursor-pointer py-2 px-3 text-white"
            >
              Register
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
