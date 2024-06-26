import React, { useState } from "react";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError(""); // Clear any previous error messages

    const requestData = {
      email,
      password,
    };
    const result = await login(requestData);
    if (result.success) {
      localStorage.setItem('currentUser', JSON.stringify(result?.user));
      setEmail("");
      setPassword("");
      showToast(result.message, "success", true);
      navigate("/halls");
    } else {
      showToast(result.message, "error", true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <ScrollRestoration />
      <h1 className="text-[#000] text-[24px] font-bold pt-28">
        Sign In or create an account
      </h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        <input
          className="input py-3 px-3 md:w-[500px] w-[322px]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <input
          className="input py-3 px-3 md:w-[500px] w/[322px]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="mx-auto button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
