import React from "react";
import image from "../../assets/images/Symbol.png";
import image1 from "../../assets/images/Symbol (1).png";
import image2 from "../../assets/images/Icon.png";
const Choose = () => {
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className="text-[28px] font-normal text-[#222] text-center pt-24">
        Why Choose Us?
      </h1>

      <div className=" md:flex block items-center justify-between gap-20 pt-16">
        <div className=" text-center flex flex-col items-center justify-center gap-3">
          <img src={image} alt="" />
          <h1 className=" text-[28px] font-normal text-[#222]">Reliability</h1>
          <p>
            Reliability Experience transparency and trust with a reliable venue
            provider company. We are dedicated to deliver our best and building
            credibility in the market, ensuring a seamless and trustworthy
            experience for our valued clients
          </p>
        </div>

        <div className=" text-center flex flex-col items-center justify-center gap-3">
          <img src={image1} alt="" />
          <h1 className=" text-[28px] font-normal text-[#222]">Reliability</h1>
          <p>
            Reliability Experience transparency and trust with a reliable venue
            provider company. We are dedicated to deliver our best and building
            credibility in the market, ensuring a seamless and trustworthy
            experience for our valued clients
          </p>
        </div>

        <div className=" text-center flex flex-col items-center justify-center gap-3">
          <img src={image2} alt="" />
          <h1 className=" text-[28px] font-normal text-[#222]">Reliability</h1>
          <p>
            Reliability Experience transparency and trust with a reliable venue
            provider company. We are dedicated to deliver our best and building
            credibility in the market, ensuring a seamless and trustworthy
            experience for our valued clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
