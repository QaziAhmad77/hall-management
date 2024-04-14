/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { ScrollRestoration, useParams } from 'react-router-dom';
import { packages2 } from '../../components/Data/Data';
import GridImages from '../../components/HallDetail/GridImages';
import HallInfo from '../../components/HallDetail/HallInfo';

const HallDetail = () => {
  const { hallId } = useParams();
  const [mainImage, setMainImage] = useState();
  const [hotelDetail, setHotelDetail] = useState();

  const filteredObj = () => {
    const hotel = packages2.filter((htl) => htl.id === parseInt(hallId));
    setMainImage(hotel[0]?.imgUrl);
    setHotelDetail(hotel);
  };

  useEffect(() => {
    filteredObj();
  }, []);

  return (
    <>
      <ScrollRestoration />
      {hotelDetail && hotelDetail.length > 0 && (
        <div className=" w-[90%] mx-auto mt-10 mb-10">
          <GridImages mainImage={mainImage} setMainImage={setMainImage} hotelDetail={hotelDetail} />
          <HallInfo />
        </div>
      )}
    </>
  )
}

export default HallDetail
