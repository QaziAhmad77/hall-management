import React, { useState } from "react";
import { packages2 } from "../Data/Data";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";

const Packages = ({ halls }) => {
  const [element, setElement] = useState(6);
  const loadMore = () => {
    setElement(element + 3);
  };
  const slice = halls.slice(0, element);
  console.log(slice, "slice")
  return (
    <div className=" w-[90%] mx-auto">
      <h1
        id="pac"
        className=" text-[#222] text-[25px] font-bold text-center pt-24"
      >
        Most Searched Packages
      </h1>

      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11 pt-16 mx-auto">
        {slice.map((item) => {
          return (
            <div className="relative">
              <div className="">
                <img src={item.files[0]?.url} alt="" />
                <div className=" absolute top-0">
                  <p className=" bg-black py-1 px-2 text-white w-fit">
                    {item?.name}
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between gap-40">
                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                  {item?.area} Kanal
                </h1>

                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                  <p className=" text-[#F39D12]"><FaLocationDot /></p>
                  {item?.location}
                </h1>
              </div>
              <div className=" flex items-center md:gap-[7rem] gap-[6rem] mt-3 justify-between">
                <p className=" bg-[#F39D12] text-sm text-white h-10 px-3 rounded-md flex justify-between items-center w-[120px] max-w-[120px]">
                  Capacity
                  {item.capacity}
                </p>
                <p className="bg-[#F39D12] text-white h-10 flex items-center justify-center px-3 rounded-md whitespace-nowrap w-[120px]  max-w-[120px]">
                  Rs {item.rentCharge}
                </p>
              </div>
              <Link
                to={`/hall/${item._id}`}
                className=" bg-[#F39D12] text-white py-3 px-6 rounded-md absolute left-[50%] -translate-x-[50%] -translate-y-[50%] top-[50%]"
              >
                Check Availability
              </Link>
            </div>
          );
        })}
      </div>
      {
        halls.length > 6 && <button onClick={() => loadMore()} className=" mx-auto mt-7 button">
          Show More
        </button>
      }
    </div>
  );
};

export default Packages;
