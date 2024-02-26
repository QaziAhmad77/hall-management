import React from "react";
import img1 from "../../assets/images/restaurateurs-790981.png.png";
const Platform = () => {
  return (
    <div className=" back3 mt-28 md:py-0 py-6">
      <div className=" md:flex block items-center justify-between">
        <div className=" pl-12">
          <h1 className=" text-[26px] font-bold text-white">
            Restaurateurs: Dig into the world's most complete restaurant
            platform
          </h1>
          <div className=" flex gap-4 mt-4">
            <button className=" text-white bg-[#F39D12] py-2 px-3 rounded-md">
              Learn More
            </button>
            <button className=" border-[1px] border-[#F39D12] bg-none py-2 px-3 rounded-md text-white">
              View plans and pricing
            </button>
          </div>
        </div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Platform;
