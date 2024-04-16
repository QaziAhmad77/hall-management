import React, { useState } from "react";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { register } from "../../services/auth";
import { showToast } from "../../utils/showToast";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "phoneNumber" ? parseInt(value) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, phoneNumber: parseInt(formData.phoneNumber) });
    const result = await register(formData);
    if (result.success) {
      showToast(result.message, "success", true);
      navigate("/");
    } else {
      showToast(result.message, "error", true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <ScrollRestoration />
      <h1 className="text-[#000] text-[24px] font-bold pt-28">
        Sign up or create an account
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
        <input
          className="input py-3 px-3 md:w-[500px] w/[322px]"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <input
          className="input py-3 px-3 md:w/[500px] w/[322px]"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className="input py-3 px-3 md:w/[500px] w/[322px]"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          className="input py-3 px-3 md:w/[500px] w/[322px]"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          className="input py-3 px-3 md:w/[500px] w/[322px]"
          type="number"
          name="phoneNumber"
          placeholder="Phone No"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <button type="submit" className="mx-auto button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
