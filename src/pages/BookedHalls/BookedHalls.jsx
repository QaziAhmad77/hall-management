/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { getMyBookings, getSingleHall } from '../../services/auth';
import { showToast } from '../../utils/showToast';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';

const BookedHalls = () => {
    const [myBookings, setMyBookings] = useState([])
    const [halls, setHalls] = useState([])
    const [element, setElement] = useState(6);
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const getData = async (e) => {
        const result = await getMyBookings(user?._id);
        if (result.success) {
            setHalls(result?.halls);
            setMyBookings(result?.myBookings);
        } else {
            // showToast(result.message, "error", true);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const loadMore = () => {
        setElement(element + 3);
    };
    const slice = halls.slice(0, element);

    return (
        <div className=" w-[80%] mx-auto">
            <h1
                id="pac"
                className=" text-[#222] text-[25px] font-bold text-center pt-24"
            >
                My Booked Halls
            </h1>
            <p className="text-start font-semibold text-[18px] mt-10">
                Below are the halls I booked
            </p>
            {
                halls?.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-10">
                        <h1 className=" text-[28px] font-normal text-[#222] text-center pt-24">
                            No Booking History
                        </h1>
                    </div>
                )
            }
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11 pt-16 mx-auto">
                {slice.map((item) => {
                    return (
                        <Link to={`/my-hall-detail/${item?.hall?._id}`} className="cursor-pointer hover:scale-105 duration-300 border rounded-2xl p-4">
                            <div className="relative">
                                <img className='h-[250px] w-full' src={item?.hall?.files[0]?.url} alt="" />
                                <div className=" absolute top-0">
                                    <p className=" bg-black py-1 px-2 text-white w-fit">
                                        {item?.hall?.name}
                                    </p>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between gap-40 mt-4">
                                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                                    {item?.hall?.area} Kanal
                                </h1>

                                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                                    <p className=" text-[#F39D12]"><FaLocationDot /></p>
                                    {item?.hall?.location}
                                </h1>
                            </div>
                            <div className=" flex items-center md:gap-[7rem] gap-[6rem] mt-3 justify-between">
                                <p className=" bg-[#F39D12] text-sm text-white h-10 px-3 rounded-md flex justify-between items-center w-[120px] max-w-[120px]">
                                    Capacity
                                    {item?.hall?.capacity}
                                </p>
                                <p className="bg-[#F39D12] text-white h-10 flex items-center justify-center px-3 rounded-md whitespace-nowrap w-[120px]  max-w-[120px]">
                                    Rs {item?.hall?.rentCharge}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {
                halls.length > 3 && (
                    <button onClick={() => loadMore()} className=" mx-auto mt-7 button">
                        Load More
                    </button>
                )
            }
        </div>
    )
}

export default BookedHalls
