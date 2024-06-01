/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

const GridImages = ({ images, mainImage, setMainImage, hotelDetail }) => {
  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };
  const [selectImg, setSelectImg] = useState(0)

  const handleSelectImg = (index) => {
    setSelectImg(index)
  }
  return (
    <div className=" flex flex-col gap-3 items-center justify-center">
      <div className="flex lg:flex-row gap-6 flex-1">
        <div className="flex flex-row lg:flex-col gap-[6px] max-w-[140px] w-[140px]">
          {
            images?.map((img, index) => (
              <img
                key={index}
                onClick={() => handleSelectImg(index)}
                src={img?.url}
                className={`w-full max-h-[90px] object-cover h-[90px] cursor-pointer ${selectImg === index && "border-[4px] border-[#EF6A1F] rounded-[6px]"} rounded-md object-contain`} />
            ))
          }
        </div>
        <div className="max-w-[500px] md:max-w-[600px] w-full rounded-xl">
          <img src={images[selectImg]?.url} className="object-cover w-full rounded-xl max-h-[450px] h-[450px]" />
        </div>
        <h1 className="bg-green-400 h-[54px] rounded-[12px] border-[1px] px-4 py-3 flex items-center justify-center text-white font-bold">Already Booked</h1>
      </div>
      {/* <div className="md:flex block items-center gap-2 justify-center">
        <img className=" md:w-[40%] w-[100%]" src={mainImage} alt="" />
        <div className="grid md:grid-cols-3 grid-cols-2  gap-2 items-center md:w-[40%]">
          <img
            className="cursor-pointer"
            src={images[0]?.url ?? ""}
            alt=""
            onClick={() => handleImageClick(images[0]?.url)}
          />
          <img
            className="cursor-pointer"
            src={images[1]?.url ?? ""}
            alt=""
            onClick={() => handleImageClick(images[1]?.url)}
          />
          <img
            className="cursor-pointer"
            src={images[2]?.url ?? ""}
            alt=""
            onClick={() => handleImageClick(images[2]?.url)}
          />
          <img
            className="cursor-pointer"
            src={images[3]?.url ?? ""}
            alt=""
            onClick={() => handleImageClick(images[3]?.url)}
          />

          <img
            className="cursor-pointer"
            src={images[4]?.url}
            alt=""
            onClick={() => handleImageClick(images[4]?.url)}
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
      </div> */}
      <h1 className="text-[24px] font-bold text-center">
        {hotelDetail?.name}
      </h1>
    </div>
  );
};

export default GridImages;
