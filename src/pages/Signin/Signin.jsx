import React from 'react'
import { Link, ScrollRestoration } from "react-router-dom";
const Signin = () => {
  return (
    <div className=' flex flex-col items-center gap-5 justify-center'>
       <ScrollRestoration />
    <h1 className=' text-[#000] text-[24px] font-bold pt-28'>Sign In or create an account</h1>
       <form className=' flex flex-col gap-5 '>
       <input className='input py-2 px-3 md:w-[500px] w-[322px]  ' type="email" placeholder='Email' />
       <input className='input py-2 px-3 md:w-[500px] w-[322px]  ' type="password" placeholder='Password' />
       <Link  className='mx-auto' to='/hotel'><button className=' button'>Sign In</button></Link>
       </form>
</div>
  )
}

export default Signin