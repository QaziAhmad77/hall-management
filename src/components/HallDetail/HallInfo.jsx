import React from "react";
import ReactStars from "react-stars";
import Timings from "./Timings";

const HallInfo = ({ hotelDetail }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating, "rating");
  };

  return (
    <div className="flex flex-col gap-4 mx-auto mt-8 w-[80%]">
      <div className="flex flex-col w-full gap-3">
        <div className="flex justify-between w-full gap-3 pb-3 border-b border-slate-300">
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">
              Hosted By {hotelDetail?.ownerName}
            </h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              Super host 2 years hosting{" "}
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Address</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              {hotelDetail?.location}
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Capacity</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              {hotelDetail?.capacity} People
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Hall Area</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              {hotelDetail?.area} Kanal
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-[16px] font-semibold ">Booked</h1>
            <p className=" text-[#717171] text-[14px] font-normal">
              {hotelDetail?.bookingCount} times Booked
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
          <p className="text-sm text-justify indent-14">
            {hotelDetail?.description}
          </p>
        </div>
      </div>
      <Timings hotelDetail={hotelDetail} />
    </div>
  );
};

export default HallInfo;
