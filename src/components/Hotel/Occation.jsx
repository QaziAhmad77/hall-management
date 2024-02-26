import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ScrollRestoration } from "react-router-dom";
const Occation = () => {
  const [date, setDate] = useState();
  let time = new Date().toLocaleTimeString();
  return (
    <div className=" bg12 w-full md:h-[348px] h-[544px]">
      <ScrollRestoration />
      <div className=" w-[80%] mx-auto">
        <h1 className=" md:text-[42px] sm:text-[32px] text-[29px] font-bold  pt-32 text-white text-center">
          Find your hall for any occasion
        </h1>

        <div className=" mt-20 md:flex block items-center justify-center gap-6 ">
          <div className=" bg-white flex flex-wrap gap-3 rounded-md">
            <input
              className=" py-2 px-3 rounded-md"
              type="date"
              onClick={(e) => setDate(e.target.value)}
            />
            <div>
              <h1 className="bg-white py-2 px-3 rounded-md">{time}</h1>
            </div>
            <div className=" py-2 px-3 rounded-md bg-white">
              <select>
                <option className=" py-2 px-3 rounded-lg" value="someOption">
                  Person 1
                </option>
                <option className=" py-2 px-3 rounded-lg" value="otherOption">
                  Person 2
                </option>
              </select>
            </div>
          </div>
          <div className=" py-2 px-3 rounded-md bg-white flex items-center gap-3 md:mt-0 mt-8 ">
            <p className="">
              <FaSearch />
            </p>
            <input
              type="search"
              placeholder="Location, hall, or Cuisine "
            ></input>
          </div>
          <button className=" md:mx-0 mx-auto mt-4 md:mt-0 bg-orange-500 text-white py-2 px-3 rounded-md">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Occation;
