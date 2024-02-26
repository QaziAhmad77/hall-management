import React, { useEffect, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import { packages2 } from "../Data/Data";
import guest from "../../assets/images/Guest.png";
import ReactStars from "react-stars";
import owner from "../../assets/images/owner.png";
import icon1 from "../../assets/images/Frame.png";
import icon2 from "../../assets/images/Frame (1).png";
import icon3 from "../../assets/images/Frame (2).png";
import main from "../../assets/images/main.png";

const SinglePackagePage = () => {
  const { hotelId } = useParams();
  const [mainImage, setMainImage] = useState();
  const [hotelDetail, setHotelDetail] = useState();
  console.log(mainImage, "Main Image");

  const filteredObj = () => {
    const hotel = packages2.filter((htl) => htl.id === parseInt(hotelId));
    setMainImage(hotel[0]?.imgUrl);
    setHotelDetail(hotel);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  useEffect(() => {
    filteredObj();
  }, []);

  return (
    <div>
      <ScrollRestoration />
      {hotelDetail && hotelDetail.length > 0 && (
        <div className=" w-[90%] mx-auto">
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" text-black pt-40 py-3 text-[22px] font-bold text-center">
              {hotelDetail[0]?.title1}
            </h1>
            <div className="md:flex block items-center gap-2 justify-center">
              <img className=" md:w-[40%] w-[100%]" src={mainImage} alt="" />
              <div className="grid md:grid-cols-3 grid-cols-2  gap-2 items-center md:w-[40%]">
                <img
                  src={hotelDetail[0]?.imgUrl1}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl1)}
                />
                <img
                  src={hotelDetail[0]?.imgUrl2}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl2)}
                />
                <img
                  src={hotelDetail[0]?.imgUrl3}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl3)}
                />
                <img
                  src={hotelDetail[0]?.imgUrl4}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl4)}
                />

                <img
                  src={hotelDetail[0]?.imgUrl5}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl5)}
                />

                <img
                  src={hotelDetail[0]?.imgUrl6}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl6)}
                />

                <img
                  src={hotelDetail[0]?.imgUrl7}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl7)}
                />

                <img
                  src={hotelDetail[0]?.imgUrl8}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl8)}
                />

                <img
                  src={hotelDetail[0]?.imgUrl9}
                  alt=""
                  onClick={() => handleImageClick(hotelDetail[0]?.imgUrl9)}
                />
              </div>
            </div>
            <div>
              <h1 className=" text-[24px] font-bold">
                Entire rental unit in Peshawar
              </h1>
              <ul className=" flex gap-4 items-center justify-center">
                <li className=" text-[8px] font-normal">. Banquet</li>
                <li className=" text-[8px] font-normal">. Dance floor</li>
                <li className=" text-[8px] font-normal">. Theatre</li>
                <li className=" text-[8px] font-normal">. Cocktail</li>
              </ul>
            </div>
          </div>

          <div className=" md:flex block items-center justify-between mt-16">
            <div className=" flex flex-col gap-3">
              <div className=" md:flex block md:text-start text-center items-center gap-3 border-[1px] border-[#9a9797] py-3 px-3 rounded-md">
                <img className=" md:mx-0 mx-auto" src={guest} alt="" />
                <p className=" text-[16px] font-semibold">
                  One of the most loved halls on Logo, according to guests
                </p>
                <p className=" flex flex-col items-center ">
                  <span className=" text-[12px] font-semibold">5.0</span>{" "}
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={16}
                    color2={"#ffd700"}
                  />
                </p>

                <p className=" flex flex-col text-[12px] font-semibold items-center">
                  24
                  <span>Review</span>
                </p>
              </div>

              <div className=" flex flex-col gap-4 pt-6">
                <div className=" flex items-center gap-2">
                  <img src={owner} alt="" />
                  <div>
                    <h1 className=" text-[16px] font-semibold ">
                      Hosted By Alee
                    </h1>
                    <p className=" text-[#717171] text-[14px] font-normal">
                      Super host 2 years hosting{" "}
                    </p>
                  </div>
                </div>
                <p className=" h-[1px] w-[100%] mt-3 mx-auto bg-[#e4e2e2]"></p>
                <div className=" flex items-center gap-2">
                  <img src={icon1} alt="" />
                  <div>
                    <h1 className=" text-[16px] font-semibold ">
                      Dedicated workspace
                    </h1>
                    <p className=" text-[#717171] text-[14px] font-normal">
                      Dedicated waiters ........
                    </p>
                  </div>
                </div>

                <div className=" flex items-center gap-2">
                  <img src={icon2} alt="" />
                  <div>
                    <h1 className=" text-[16px] font-semibold ">
                      Self check-in
                    </h1>
                    <p className=" text-[#717171] text-[14px] font-normal">
                      You can check in with the building staff.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex items-center gap-2">
                <img src={icon3} alt="" />
                <div>
                  <h1 className=" text-[16px] font-semibold ">
                    Free cancellation before 3:00 PM on November 22
                  </h1>
                </div>
              </div>
              <p className=" h-[1px] w-[100%] mt-3 mx-auto bg-[#e4e2e2]"></p>
            </div>

            <div className=" py-2 px-4 shadow-md flex flex-col gap-4">
              <h1 className=" text-[22px] font-semibold">$190 night</h1>
              <button className=" button">Continue</button>
              <div className=" flex flex-col gap-4">
                <p className=" text-[15px] font-normal flex items-center justify-between">
                  $190 x 7 hours <span>$949</span>
                </p>
                <p className=" text-[15px] font-normal flex items-center justify-between">
                  Cleaning fee <span>$54</span>
                </p>
                <p className=" text-[15px] font-normal flex items-center justify-between">
                  Logo service fee <span>$143</span>
                </p>
                <p className=" h-[1px] w-[90%] mx-auto bg-[#b0abab]"></p>
                <p className=" text-[15px] font-bold flex items-center justify-between">
                  Total before taxes <span>$1,145</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 pt-8">
            <p className=" text-[16px] font-normal">
              Some info has been automatically translated.
              <span className=" font-bold">Show original</span>
            </p>
            <p className=" text-[16px] font-normal">
              From our spacious balcony you can enjoy a unique view of Sabrina
              Hall and the magic fountains. From our spacious balcony you can
              enjoy a unique view of Sabrina Hall and the magic fountains.From
              our spacious balcony you can enjoy a unique view of Sabrina Hall
              and the magic fountains.
            </p>
            <p className=" text-[16px] font-normal">
              Also from our studio and from the comfortable bed you can enjoy
              full Sabrina Hall and …
            </p>
            <p className=" text-[16px] font-bold">Show More</p>
            <p className=" h-[1px] w-[100%] mt-3 mx-auto bg-[#e4e2e2]"></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePackagePage;
