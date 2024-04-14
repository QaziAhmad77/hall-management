import React from "react";
import main from '../../assets/images/Ellipse 16.png'
import { BsThreeDotsVertical } from "react-icons/bs";
const Owner = () => {
  return <div className='w-[80%] ml-60 mb-12'>
    <div className='w-full flex flex-col gap-7 mt-12 bg-[#f8f8f8] p-4 rounded-2xl'>
      <h1 className='text-[22px] font-bold'>List of Halls</h1>

      <table className='w-full bg-white mx-auto rounded-2xl'>
        <tr>
          <th className=' text-[#949494] text-[14px] font-normal'>Owner Name</th>
          <th className=' text-[#949494] text-[14px] font-normal'>Hall Name</th>
          <th className=' text-[#949494] text-[14px] font-normal'>Phone Number</th>
          <th className=' text-[#949494] text-[14px] font-normal'>Email Address</th>
          <th className=' text-[#949494] text-[14px] font-normal'>Address</th>
          <th className=' text-[#949494] text-[14px] font-normal'>Request</th>
        </tr>
        <tr className=' hover:bg-[#f4eeea94] text-[14px]'>
          <td className='flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
          <td>Serena Hall</td>
          <td>+9921487982487</td>
          <td>curtis.weaver@example.com</td>
          <td>GT Road Peshawar</td>
          <td className="flex gap-2">
            <button className="bg-green-500 text-white p-2.5 rounded-[6px]">Accept</button>
            <button className="bg-red-500 text-white p-2.5 rounded-[6px]">Reject</button>
          </td>
        </tr>

        <tr className=' hover:bg-[#f4eeea94] text-[14px]'>
          <td className='flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
          <td>Serena Hall</td>
          <td>+9921487982487</td>
          <td>curtis.weaver@example.com</td>
          <td>GT Road Peshawar</td>
          <td className="flex gap-2">
            <button className="bg-green-500 text-white p-2.5 rounded-[6px]">Accept</button>
            <button className="bg-red-500 text-white p-2.5 rounded-[6px]">Reject</button>
          </td>
        </tr>

        <tr className=' hover:bg-[#f4eeea94] text-[14px]'>
          <td className='flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
          <td>Serena Hall</td>
          <td>+9921487982487</td>
          <td>curtis.weaver@example.com</td>
          <td>GT Road Peshawar</td>
          <td className="flex gap-2">
            <button className="bg-green-500 text-white p-2.5 rounded-[6px]">Accept</button>
            <button className="bg-red-500 text-white p-2.5 rounded-[6px]">Reject</button>
          </td>
        </tr>

        <tr className=' hover:bg-[#f4eeea94] text-[14px]'>
          <td className='flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
          <td>Serena Hall</td>
          <td>+9921487982487</td>
          <td>curtis.weaver@example.com</td>
          <td>GT Road Peshawar</td>
          <td className="flex gap-2">
            <button className="bg-green-500 text-white p-2.5 rounded-[6px]">Accept</button>
            <button className="bg-red-500 text-white p-2.5 rounded-[6px]">Reject</button>
          </td>
        </tr>
      </table>
    </div>
  </div>;
};

export default Owner;
