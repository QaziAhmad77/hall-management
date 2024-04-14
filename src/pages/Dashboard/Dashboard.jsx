import React from "react";
import icon from "./../../assets/images/Icon12.png";
import Charts from "../../components/Dashboard/Charts";

const Dashboard = () => {
  return (
    <div className="ml-60 mx-12 w-full">
      <h1 className=" text-[22px] font-bold mt-5">Dashboard</h1>

      <div className=" grid grid-cols-3 gap-11 mt-8">
        <div className=" bg-[#F39D12] py-6 pl-6 pr-32 rounded-md">
          <div className=" flex items-center gap-3">
            <img src={icon} alt="" />
            <div>
              <h1 className=" text-[#2b2b2b] text-[14px] font-medium">
                Users
              </h1>
              <p className=" text-[18px] text-[#434343] font-[700]">104K</p>
            </div>
          </div>
        </div>

        <div className=" bg-[#F39D12] py-6 pl-6 pr-32 rounded-md">
          <div className=" flex items-center gap-3">
            <img src={icon} alt="" />
            <div>
              <h1 className=" text-[#2b2b2b] text-[14px] font-medium">
                Halls
              </h1>
              <p className=" text-[18px] text-[#434343] font-[700]">50</p>
            </div>
          </div>
        </div>

        <div className=" bg-[#F39D12] py-6 pl-6 pr-32 rounded-md">
          <div className=" flex items-center gap-3">
            <img src={icon} alt="" />
            <div>
              <h1 className=" text-[#2b2b2b] text-[14px] font-medium">
                Owners
              </h1>
              <p className=" text-[18px] text-[#434343] font-[700]">30</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-12">
        <Charts heading="Users" />
        <Charts heading="Hotels" />
      </div>
    </div>
  );
};

export default Dashboard;
