import React, { useEffect } from "react";
import main from "../../assets/images/Ellipse 16.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { getAllBookings, getHalls } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const BookedHallsDashboard = () => {
  const [halls, setHalls] = useState([]);
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(bookings, "bookings");

  const getData = async (e) => {
    const result = await getHalls(user?._id);
    if (result.success) {
      setHalls(result.halls);
    } else {
      showToast(result.message, "error", true);
    }
    const res = await getAllBookings();
    if (res.success) {
      setBookings(res.detailedBookings);
    } else {
      showToast(res.message, "error", true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className='w-[80%] ml-60 mb-12'>
      <div className='w-full flex flex-col gap-7 mt-12 bg-[#f8f8f8] p-4 rounded-2xl'>
        <h1 className='text-[22px] font-bold'>Booked Halls</h1>

        <table className='w-full bg-white mx-auto rounded-2xl'>
          <tr>
            <th className=' text-[#949494] text-[14px] font-normal'>
              Hall Name
            </th>
            <th className=' text-[#949494] text-[14px] font-normal'>
              Booked By
            </th>
            <th className=' text-[#949494] text-[14px] font-normal'>Date</th>
            <th className=' text-[#949494] text-[14px] font-normal'>
              Email Address
            </th>
            <th className=' text-[#949494] text-[14px] font-normal'>
              Rent Charges
            </th>
            <th className=' text-[#949494] text-[14px] font-normal'>
              Capacity
            </th>
          </tr>

          {bookings.map((item, index) => {
            console.log(item?.booking?.bookingDateAndTime, "Hello");
            const formattedDate = formatDate(item?.booking?.bookingDateAndTime);
            return (
              <tr key={index} className=' hover:bg-[#f4eeea94] text-[14px]'>
                <td className='flex gap-4 items-center'>
                  {/* <img src={main} alt='' /> */}
                  {item?.hall?.name}
                </td>
                <td>{item?.user?.fullName}</td>
                <td>{formattedDate}</td>
                <td>{item?.hall?.email}</td>
                <td>{item?.hall?.rentCharge}</td>
                <td>{item?.hall?.capacity}</td>
                {/* <td className="flex gap-2">
                                    <button className="bg-green-500 text-white p-2.5 rounded-[6px]">
                                        Accept
                                    </button>
                                    <button className="bg-red-500 text-white p-2.5 rounded-[6px]">
                                        Reject
                                    </button>
                                </td> */}
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default BookedHallsDashboard;
