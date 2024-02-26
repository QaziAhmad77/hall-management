import React from "react";

const Subcribe = () => {
  return (
    <div id="contact" className=" bg-[#7F5A23] w-full py-9">
      <div className=" w-[80%] mx-auto flex flex-col gap-5">
        <h1 className=" text-white text-[24px] font-normal">
          Save Time Save Money
        </h1>
        <p className=" text-[#BDBDBD] text-[16px] font-normal">
          Sign up and we'll send the best deals to you
        </p>
        <div className=" flex gap-4">
          <input
            className=" px-16 rounded-md py-2"
            type="email"
            placeholder="Your Email Address"
          />
          {/* <button className="">Subscribe</button> */}
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
