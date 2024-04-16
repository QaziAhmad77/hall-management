import React from "react";

const GridImages = ({ mainImage, setMainImage, hotelDetail }) => {
  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <div className=" flex flex-col gap-3 items-center justify-center">
      <div className="md:flex block items-center gap-2 justify-center">
        <img className=" md:w-[40%] w-[100%]" src={mainImage} alt="" />
        <div className="grid md:grid-cols-3 grid-cols-2  gap-2 items-center md:w-[40%]">
          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl1}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl1)}
          />
          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl2}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl2)}
          />
          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl3}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl3)}
          />
          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl4}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl4)}
          />

          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl5}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl5)}
          />

          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl6}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl6)}
          />

          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl7}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl7)}
          />

          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl8}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl8)}
          />

          <img
            className="cursor-pointer"
            src={hotelDetail[0]?.imgUrl9}
            alt=""
            onClick={() => handleImageClick(hotelDetail[0]?.imgUrl9)}
          />
        </div>
      </div>
      <h1 className="text-[24px] font-bold text-center">
        {hotelDetail[0]?.title1}
      </h1>
    </div>
  );
};

export default GridImages;
