import React from "react";
import img1 from "../../assets/images/medium.jpg.png";
import img2 from "../../assets/images/medium.png.png";
const Inspired = () => {
  return (
    <div className=" w-[90%] mx-auto">
      <h1 className=" text-[22px] text-[#2D333F] font-bold py-5 pt-32">
        Get inspired by our collections of the top halls in Peshawar
      </h1>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        <div className=" flex flex-col gap-2">
          <img src={img1} alt="" />
          <h1 className=" text-[16px] text-[#2D333F] font-bold">
            LGBTQ-Owned and - Operated Restaurants to…
          </h1>
          <p className=" text-[16px] font-normal">
            OpenTable gives restaurants the ability to celebrate their identity
            on their…
          </p>
          <p className=" text-[#6F737B] text-[13px] font-normal">May 25,2025</p>
        </div>

        <div className=" flex flex-col gap-2">
          <img src={img2} alt="" />
          <h1 className=" text-[16px] text-[#2D333F] font-bold">
            LGBTQ-Owned and - Operated Restaurants to…
          </h1>
          <p className=" text-[16px] font-normal">
            OpenTable gives restaurants the ability to celebrate their identity
            on their…
          </p>
          <p className=" text-[#6F737B] text-[13px] font-normal">May 25,2025</p>
        </div>
        <div className=" flex flex-col gap-2">
          <img src={img1} alt="" />
          <h1 className=" text-[16px] text-[#2D333F] font-bold">
            LGBTQ-Owned and - Operated Restaurants to…
          </h1>
          <p className=" text-[16px] font-normal">
            OpenTable gives restaurants the ability to celebrate their identity
            on their…
          </p>
          <p className=" text-[#6F737B] text-[13px] font-normal">May 25,2025</p>
        </div>
      </div>
    </div>
  );
};

export default Inspired;
