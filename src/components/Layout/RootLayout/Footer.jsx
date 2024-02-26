import React from "react";
const Footer = () => {
  return (
    <div className=" bg-black w-full mt-28">
      <div className="w-[90%] mx-auto">
        <div className=" md:flex block justify-between  py-14">
          <div className=" text-white flex flex-col gap-3">
            <h1 className=" text-[14px] font-semibold">Discover</h1>
            <p className=" text-[12px] font-normal">Dining Rewards</p>
            <p className=" text-[12px] font-normal">Private Dining</p>
            <p className=" text-[12px] font-normal">Reserve for Others</p>
            <p className=" text-[12px] font-normal">Restaurants Near Me</p>
            <p className=" text-[12px] font-normal">Delivery Near Me</p>
            <p className=" text-[12px] font-normal">Restaurants Open Now</p>
          </div>

          <div className=" text-white flex flex-col gap-3">
            <h1 className=" text-[14px] font-semibold">OpenTable</h1>
            <p className=" text-[12px] font-normal">About Us</p>
            <p className=" text-[12px] font-normal">Blog</p>
            <p className=" text-[12px] font-normal">Career</p>
            <p className=" text-[12px] font-normal">Pres</p>
          </div>

          <div className=" text-white flex flex-col gap-3">
            <h1 className=" text-[14px] font-semibold">More</h1>
            <p className=" text-[12px] font-normal">OpenTable for iOS</p>
            <p className=" text-[12px] font-normal">OpenTable for Android</p>
            <p className=" text-[12px] font-normal">Affiliate Program</p>
            <p className=" text-[12px] font-normal">Contact Us</p>
          </div>

          <div className=" text-white flex flex-col gap-3">
            <h1 className=" text-[14px] font-semibold">Our sites</h1>
            <p className=" text-[12px] font-normal">OpenTable.jp</p>
            <p className=" text-[12px] font-normal">OpenTable.de</p>
            <p className=" text-[12px] font-normal">OpenTable.es</p>
            
          </div>

          <div className=" text-white flex flex-col gap-3">
            <h1 className=" text-[14px] font-semibold">Businesses</h1>
            <p className=" text-[12px] font-normal">
              Restaurant reservation software
            </p>
            <p className=" text-[12px] font-normal">Industry insights</p>
            <p className=" text-[12px] font-normal">Hospitality resources</p>
            <p className=" text-[12px] font-normal">Marketing resources</p>
            <p className=" text-[12px] font-normal">Operation resources</p>
            <p className=" text-[12px] font-normal">How to open a restaurant</p>
          </div>
        </div>
        <div className="w-[90%] h-[1px] bg-white mt-12 mx-auto"></div>
        <p className=" text-[13px] font-normal text-center text-white py-4">
          Copyright © 2023 OpenTable, Inc. 1 Montgomery St Ste 500, San
          Francisco CA 94104 - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
