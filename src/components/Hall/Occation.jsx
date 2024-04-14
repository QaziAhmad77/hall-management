import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";

const Occation = () => {

  return (
    <div className=" bg12 w-full md:h-[348px] h-[544px]">
      <ScrollRestoration />
      <Link to="/create-hall" className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white absolute right-4 top-4">Create Your Own Hall</Link>
      <div className=" w-[80%] mx-auto">
        <h1 className=" md:text-[42px] sm:text-[32px] text-[29px] font-bold  pt-32 text-white text-center">
          Find your hall for any occasion
        </h1>
        <div className=" mt-20 md:flex block items-center justify-center gap-6 ">
          <div className="flex flex-wrap gap-3 rounded-md">
            {/* <label>
              <input
                className=" py-3 px-3 rounded-md outline-none"
                type="text"
                placeholder="Enter Date"
                onFocus={(e) => e.target.type = "date"}
              />
            </label> */}
            <div className="text-[18px] text-white flex gap-4">
              <label
                className="flex items-center gap-2 whitespace-nowrap"
                htmlFor={`noon`}
              >
                Lunch event
                <input
                  type="checkbox"
                  id="noon"
                />
              </label>
              <label
                className="flex items-center gap-2 whitespace-nowrap"
                htmlFor={`dinner`}
              >
                Dinner event
                <input
                  type="checkbox"
                  id="dinner"
                />
              </label>
            </div>
            <input
              className=" py-3 px-3 rounded-md outline-none"
              type="text"
              placeholder="Search By Location"
            />
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
