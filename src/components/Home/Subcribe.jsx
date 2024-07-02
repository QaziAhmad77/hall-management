import React, { useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../utils/axios";
import { server } from "../../services";
import { showToast } from "../../utils/showToast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post(
        `${server}/save-email`,
        { email },
      );
      if (data.success) {
        setMessage(data.message);
        setEmail("");
        setTimeout(() => {
          setError("");
        }, 3000);
        showToast("Email Saved Successfully!", "success", true);
      } else {
        setError(data.message);
        // Clear error after 3 seconds
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div id="contact" className="bg-[#7F5A23] w-full py-9">
      <div className="w-[80%] mx-auto flex flex-col gap-5">
        <h1 className="text-white text-[24px] font-normal">
          Save Time Save Money
        </h1>
        <p className="text-[#BDBDBD] text-[16px] font-normal">
          Sign up and we'll send the best deals to you
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            className="px-16 rounded-md py-2"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="bg-orange-400 p-2 rounded-xl text-[#FFFFFF]"
          >
            Subscribe
          </button>
        </form>
        {/* {message && <p className="text-green-500">{message}</p>} */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Subscribe;
