import React, { useState } from "react";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";

const Occation = () => {
  const navigate = useNavigate()
  const [searchVal, setSearchVal] = useState(null);
  const admin = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className=" bg12 w-full md:h-[348px] h-[544px]">
      <ScrollRestoration />
      <div className="flex items-center justify-between w-full px-8 pt-8 pb-4 border-b-[1px] border-orange-500">
        <div className="flex items-center gap-4">
          <Link
            to="/my-halls"
            className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
          >
            My Halls
          </Link>
          <Link
            to="/booked-halls"
            className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
          >
            Booked Halls
          </Link>
          <Link
            to="/create-hall"
            className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
          >
            Create Your Own Hall
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {
            admin?.role === "admin" && <Link
              to="/dashboard"
              className="border-[1px] border-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
            >
              Your Dashboard
            </Link>
          }
          <h1 onClick={() => { localStorage.clear(); navigate("/") }} className="text-[18px] rounded-[8px] text-white border-[1px] border-orange-400 h-[56px] w-[100px] flex items-center justify-center cursor-pointer">Logout</h1>
        </div>
      </div>
      <div className=" w-[80%] mx-auto mt-10">
        <h1 className=" md:text-[42px] sm:text-[32px] text-[29px] font-bold text-white text-center">
          Find your hall for any occasion
        </h1>
        <div className="mt-6 md:flex block items-center justify-center gap-6">
          <input
            className=" py-3 px-3 rounded-md outline-none w-[300px]"
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
            placeholder="Search Hall By Name or Location ...."
          />
          <button className=" md:mx-0 mx-auto mt-4 md:mt-0 bg-orange-500 text-white py-2 px-3 rounded-md">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Occation;
