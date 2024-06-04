import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/showToast";
import camera from "../../assets/images/camera.jpeg";
import { createHall } from "../../services/auth";

const InputFields = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([]);
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const [formData, setFormData] = useState({
    name: '',
    ownerName: '',
    location: '',
    area: '',
    capacity: '',
    rentCharge: '',
    email: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    images.forEach((image) => {
      data.append("files", image)
    });

    const result = await createHall(data, user?._id)
    if (result.success) {
      showToast(result.message, "success", true);
      navigate("/halls");
    } else {
      setLoading(false)
      showToast(result.message, "error", true);
    }
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="font-semibold text-orange-500 text-2xl">
        Enter Hall Info and Register Your Hall here...
      </h1>
      <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4">
        <input
          className="p-2 border-[1px] rounded-2xl max-h-[53px] h-[53px] border-[#E6E6E6] outline-none"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter Hall Name"
        />
        <input
          className="p-2 border-[1px] rounded-2xl max-h-[53px] h-[53px] border-[#E6E6E6] outline-none"
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleInputChange}
          placeholder="Enter Owner Name"
        />
        <input
          className="p-2 border-[1px] rounded-2xl max-h-[55px] h-[55px] border-[#E6E6E6] outline-none"
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Enter Hall Location"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="number"
          id="area"
          name="area"
          value={formData.area}
          onChange={handleInputChange}
          placeholder="Area of the Hall (in square meters)"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="number"
          id="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleInputChange}
          placeholder="Capacity of the Hall (in number of people)"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="number"
          id="rentCharge"
          name="rentCharge"
          value={formData.rentCharge}
          onChange={handleInputChange}
          placeholder="Rent Charges"
        />
        <input
          className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
        <textarea
          className="p-2 border-[1px] border-[#E6E6E6] outline-none rounded-[16px]"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your hall (at least 150 words)"
        />
        <label className="border bg-white rounded-lg w-full h-[206px] mt-[16px] flex flex-col items-center justify-center">
          <div className="items-center justify-center gap-2 flex cursor-pointer">
            <img src={camera} className="w-10 h-10" alt="" />
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
            name="images"
            onChange={handleImages}
            multiple
          />
        </label>
        <button className="bg-orange-400 text-white font-semibold rounded-[16px] h-[56px] p-3" type="submit">{loading ? "Loading....." : "Submit"}</button>
      </form>
    </div>
  );
};

export default InputFields;
