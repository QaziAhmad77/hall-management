import React from "react";
import ReactStars from "react-stars";
import Timings from "./Timings";

const HallInfo = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating, "rating");
  };

  return (
    <div className="flex flex-col gap-4 mx-auto mt-8 w-[80%]">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex w-full justify-between gap-3 border-b pb-3 border-slate-300">
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Hosted By Alee</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              Super host 2 years hosting{" "}
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Address</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              University Town Peshawar
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Capacity</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              250 People
            </p>
          </div>
          <p className="flex flex-col">
            <span className=" text-[18px] font-semibold">Rating</span>{" "}
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={16}
              color2={"#ffd700"}
            />
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[16px] font-semibold">Description</h1>
          <p className="text-sm indent-14 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Timings />
    </div>
  );
};

export default HallInfo;
