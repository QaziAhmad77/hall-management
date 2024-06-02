import React, { useEffect, useState } from "react";
import { getSingleHall } from "../../services/auth";
import { ScrollRestoration, useParams } from "react-router-dom";
import { showToast } from "../../utils/showToast";
import GridImages from "../../components/HallDetail/GridImages";
import HallInfo from "../../components/HallDetail/HallInfo";
import ReactStars from "react-stars";

const MyHallDetail = () => {
  const { hallId } = useParams();
  const [mainImage, setMainImage] = useState();
  const [hotelDetail, setHotelDetail] = useState();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log("current user", user);
  const getData = async (e) => {
    const result = await getSingleHall(user?._id, hallId);
    if (result.success) {
      setHotelDetail(result.hall);
    } else {
      showToast(result.message, "error", true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating, "rating");
  };

  return (
    <>
      <ScrollRestoration />
      {hotelDetail && (
        <div className=" w-[90%] mx-auto mt-10 mb-10">
          <GridImages
            images={hotelDetail?.files}
            mainImage={mainImage}
            setMainImage={setMainImage}
            hotelDetail={hotelDetail}
          />
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
          </div>
        </div>
      )}
    </>
  );
};

export default MyHallDetail;
