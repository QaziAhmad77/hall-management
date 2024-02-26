import React from "react";
import { circle, home } from "../../components/Data/Data";

const Hero = () => {
  return (
    <div id="/" className=" bg-[#f9f9f9] pt-24">
      <div className=" back lg:h-[510px] md:h-[500px] h-[770px] ">
        <div className=" md:flex block items-center justify-between w-[90%] mx-auto gap-36">
          <div className=" flex flex-col gap-5 md:w-[40%] pt-6">
            <h1 className=" text-[#F39D12] lg:text-[40px] md:text-[30px] sm:text-[40px] text-[30px] font-[800]">
              Hall Management Information System Desktop / Online Ver.
            </h1>
            <p className=" text-[#fff] text-[20px] font-normal">
              Manual systems are less prone to technical difficulties, but they
              cannot process information as efficiently as smoothly functioning
              computer systems.
            </p>
            <button className=" whitespace-nowrap btn">
              {" "}
              View Software Packages With Core Features
            </button>
          </div>

          <div className=" flex flex-col gap-5 lg:pt-0 pt-6">
            {home.map((item) => {
              return (
                <div className="box">
                  <span></span>
                  <h1 className=" tag md:text-[19px] sm:text-[12px] font-normal text-white">
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[80%] mx-auto grid md:grid-cols-4 sm:grid-cols-2 py-32 ">
          {circle.map((item) => {
            return (
              <div className=" flex gap-4 items-center">
                <div className="circle"></div>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
