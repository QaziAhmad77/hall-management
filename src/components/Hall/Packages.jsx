import React, { useState } from "react";
import { packages2 } from "../Data/Data";
import { Link } from "react-router-dom";

const Packages = () => {
  const [element, setElement] = useState(6);
  const loadMore = () => {
    setElement(element + 3);
  };
  const slice = packages2.slice(0, element);

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
            <div className=" ">
              <div className="relative">
                <img src={item.imgUrl} alt="" />
                <div className=" absolute top-0">
                  <p className=" bg-black py-1 px-2 text-white w-fit">
                    {item.title}
                  </p>
                </div>
                <Link
                  to={`/hall/${item.id}`}
                  className=" bg-[#F39D12] text-white py-3 px-6 rounded-md relative top-[-90px] left-[100px]"
                >
                  {item.btn}
                </Link>
              </div>
              <div className=" flex items-center gap-40">
                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                  <p className=" text-[#F39D12] whitespace-nowrap">
                    {item.icon}
                  </p>
                  {item.desc}
                </h1>

                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                  <p className=" text-[#F39D12]">{item.icon1}</p>
                  {item.desc1}
                </h1>
              </div>

              <div className=" flex items-center md:gap-[7rem] gap-[6rem] pt-3">
                <p className=" bg-[#F39D12] text-white py-2 px-4 rounded-md">
                  {item.bt2}
                </p>
                <p className="bg-[#F39D12] text-white py-2 px-4 rounded-md whitespace-nowrap">
                  {item.btn1}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => loadMore()} className=" mx-auto mt-7 button">
        Show More
      </button>
    </div>
  );
};

export default Packages;
