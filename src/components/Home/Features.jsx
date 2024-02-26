import React from "react";
import { Features1 } from "../../components/Data/Data";
const Features = () => {
  return (
    <div
      id="feature"
      className="back1 md:mt-32 lg:h-[888px] md:h-[888px] sm:h-[1500px] h-[1700px] mt-80"
    >
      <div className=" w-[80%] mx-auto">
        <h1 className=" flex items-center justify-center pt-40 text-[#F39D12] lg:text-[50px] md:text-[40px] font-bold sm:text-[30px] text-[30px]">
          SAL<p className="text-white">IE</p>N<p className=" text-white">T</p>S{" "}
          <p className=" text-white pl-4">F</p>EA
          <p className=" text-white">T</p>U<p className=" text-white">RE</p>S
        </h1>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-16 pt-20">
          {Features1.map((item) => {
            return (
              <div>
                <div className="flex items-center">
                  <span className=" rectangle"></span>
                  <h1 className=" text-[16px] font-normal bg-white py-3 px-6">
                    {item.title}
                  </h1>
                </div>
                <p className=" text-white text-[14px] font-normal pt-4">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
