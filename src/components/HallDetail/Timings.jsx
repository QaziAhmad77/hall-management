import React from "react";

const Timings = () => {
  return (
    <div className="flex gap-4 w-full mt-8">
      <div className="flex flex-col gap-3 w-2/3">
        <div className="flex gap-3 items-center duration-1000 w-full">
          <p className="text-[12px] font-400 text-gray">Monday</p>
          <span className="flex-grow bg-slate-300 w-full h-[1px]"></span>
          <div className="text-[12px] flex gap-2">
            <p className="flex gap-1 whitespace-nowrap">Lunch event</p>
            And
            <p className="flex gap-1 whitespace-nowrap">Dinner event</p>
          </div>
        </div>
        <div className="flex gap-3 items-center duration-1000 w-full">
          <p className="text-[12px] font-400 text-gray">Monday</p>
          <span className="flex-grow bg-slate-300 w-full h-[1px]"></span>
          <div className="text-[12px] flex gap-4">
            <p className="flex gap-1 whitespace-nowrap">Lunch event</p>
            <p className="flex gap-1 whitespace-nowrap">Dinner event</p>
          </div>
        </div>
        <div className="flex gap-3 items-center duration-1000 w-full">
          <p className="text-[12px] font-400 text-gray">Monday</p>
          <span className="flex-grow bg-slate-300 w-full h-[1px]"></span>
          <div className="text-[12px] flex gap-4">
            <p className="flex gap-1 whitespace-nowrap">Lunch event</p>
            <p className="flex gap-1 whitespace-nowrap">Dinner event</p>
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 w-1/3">
        <h1 className=" text-[22px] font-semibold">Night Event</h1>
        <div className=" flex flex-col gap-4">
          <p className=" text-[15px] font-normal flex items-center justify-between">
            Hall Rent <span>200000</span>
          </p>
          <p className=" h-[1px] w-[90%] mx-auto bg-[#b0abab]"></p>
          <p className=" text-[15px] font-bold flex items-center justify-between">
            Total with taxes <span>210000</span>
          </p>
          <button className="button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Timings;
