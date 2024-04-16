// import React from 'react'
// import { Link, ScrollRestoration } from "react-router-dom";

// const Signin = () => {
//    const handleFormSubmit = ()=>{

//    }
//   return (
//     <div className='flex flex-col items-center justify-center gap-5 '>
//       <ScrollRestoration />
//       <h1 className=' text-[#000] text-[24px] font-bold pt-28'>Sign In or create an account</h1>
//       <form onSubmit={handleFormSubmit} className='flex flex-col gap-5 '>
//         <input className='input py-3 px-3 md:w-[500px] w-[322px]' type="email" placeholder='Email' />
//         <input className='input py-3 px-3 md:w-[500px] w-[322px]' type="password" placeholder='Password' />
//         <Link className='mx-auto button' to='/halls'>Login</Link>
//       </form>
//     </div>
//   )
// }

// export default Signin
import React, { useState } from "react";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const requestData = {
      email,
      password,
    };
    const result = await login(requestData);
    if (result.success) {
      setEmail("");
      setPassword("");
      showToast(result.message, "success", true);
      navigate("/");
    } else {
      showToast(result.message, "error", true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <ScrollRestoration />
      <h1 className=" text-[#000] text-[24px] font-bold pt-28">
        Sign In or create an account
      </h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 ">
        <input
          className="input py-3 px-3 md:w-[500px] w/[322px]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input py-3 px-3 md:w/[500px] w/[322px]"
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
