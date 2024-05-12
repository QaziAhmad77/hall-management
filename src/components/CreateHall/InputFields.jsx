import React, { useState } from "react";
import camera from "../../assets/images/camera.jpeg"


const InputFields = () => {
  const [images, setImages] = useState([])
  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="font-semibold text-orange-500 text-2xl">
        Enter Hall Info and Register Your Hall here...
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="p-2 border-[1px] rounded-2xl max-h-[53px] h-[53px] border-[#E6E6E6] outline-none"
          type="text"
          id="hallName"
          placeholder="Enter Hall Name"
        />
        <input
          className="p-2 border-[1px] rounded-2xl max-h-[55px] h-[55px] border-[#E6E6E6] outline-none"
          type="text"
          id="hallLocation"
          placeholder="Enter Hall Location"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="text"
          id="area"
          placeholder="Area of the Hall (in square meters)"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="text"
          id="accomodate"
          placeholder="Capacity of the Hall (in number of people)"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="text"
          id="rent"
          placeholder="Rent Charges"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="email"
          id="email"
          placeholder="Email Address"
        />
        <textarea
          className="p-2 border-[1px] border-[#E6E6E6] outline-none rounded-[16px]"
          id="desc"
          placeholder="Describe your hall (at least 150 words)"
        />
        <label className="border bg-white rounded-lg w-full h-[206px] mt-[16px] flex flex-col items-center justify-center">
          <div className="items-center justify-center gap-2 flex cursor-pointer">
            <img src={camera} className="w-10 h-10 " alt="" />
            <h1 className="text-[14px] font-poppins-regular text-orange">
              Upload File/Url
            </h1>
          </div>
          <h1 className="text-[12px] text-[#949494] font-poppins-regular mt-[2px] capitalize text-center">
            {images?.length === 0 ? `${images?.length} images included ` : 'accept image,3d ,JPG'}
          </h1>
          <input
            type="file"
            className={`hidden`}
            // onChange={handleImages}
            multiple
          />
          {/* {errors.images && (
            <h1 className="text-red-500 font-poppins-medium text-[12px] my-2">
              Please Insert Some Product Images
            </h1>
          )} */}
        </label>
      </div>
    </div>
  );
};

export default InputFields;
