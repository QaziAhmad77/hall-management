/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import { packages2 } from "../../components/Data/Data";
import GridImages from "../../components/HallDetail/GridImages";
import HallInfo from "../../components/HallDetail/HallInfo";
import { getSingleHall, getSpecificHallBookings } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const HallDetail = () => {
  const { hallId } = useParams();
  const [mainImage, setMainImage] = useState();
  const [hotelDetail, setHotelDetail] = useState();
  const [bookings, setBookings] = useState();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const getData = async (e) => {
    const result = await getSingleHall(user?._id, hallId);
    if (result.success) {
      setHotelDetail(result.hall);
    } else {
      showToast(result.message, "error", true);
    }
  };
  const getBookingsData = async (e) => {
    const result = await getSpecificHallBookings(user?._id, hallId);
    if (result.success) {
      setBookings(result.bookings);
    } else {
      showToast(result.message, "error", true);
    }
  };

  useEffect(() => {
    getData()
    getBookingsData()
  }, []);

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
            bookings={bookings}
          />
          <HallInfo hotelDetail={hotelDetail} />
        </div>
      )}
    </>
  );
};

export default HallDetail;
