import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { showToast } from '../../utils/showToast';
import { getMyHalls } from '../../services/auth';

const MyHalls = () => {
    const [element, setElement] = useState(6);
    const [myHalls, setMyHalls] = useState([])
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const loadMore = () => {
        setElement(element + 3);
    };
    const slice = myHalls.slice(0, element);
    // console.log(slice, "slice")

    const getData = async (e) => {
        const result = await getMyHalls(user?._id);
        if (result.success) {
            setMyHalls(result.halls);
        } else {
            // showToast(result.message, "error", true);
        }
    };

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className=" w-[90%] mx-auto">
            <h1
                id="pac"
                className=" text-[#222] text-[25px] font-bold text-center pt-24"
            >
                My Halls
            </h1>
            {
                myHalls.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-10">
                        <h1 className=" text-[28px] font-normal text-[#222] text-center pt-24">
                            No Hall Found
                        </h1>
                    </div>
                )
            }
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11 pt-16 mx-auto">
                {slice.map((item) => {
                    return (
                        <Link className="cursor-pointer hover:scale-105 duration-300" to={`/my-hall-detail/${item._id}`}>
                            <div className="relative">
                                <img src={item.files[0]?.url} alt="" />
                                <div className=" absolute top-0">
                                    <p className=" bg-black py-1 px-2 text-white w-fit">
                                        {item?.name}
                                    </p>
                                </div>
                            </div>
                            <div className=" flex items-center justify-between gap-40">
                                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                                    {item?.area} Kanal
                                </h1>

                                <h1 className=" text-[14px] font-normal flex gap-3 items-center">
                                    <p className=" text-[#F39D12]"><FaLocationDot /></p>
                                    {item?.location}
                                </h1>
                            </div>
                            <div className=" flex items-center md:gap-[7rem] gap-[6rem] mt-3 justify-between">
                                <p className=" bg-[#F39D12] text-sm text-white h-10 px-3 rounded-md flex justify-between items-center w-[120px] max-w-[120px]">
                                    Capacity
                                    {item.capacity}
                                </p>
                                <p className="bg-[#F39D12] text-white h-10 flex items-center justify-center px-3 rounded-md whitespace-nowrap w-[120px]  max-w-[120px]">
                                    Rs {item.rentCharge}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {
                myHalls.length > 3 && (
                    <button onClick={() => loadMore()} className=" mx-auto mt-7 button">
                        Load More
                    </button>
                )
            }
        </div>
    );
}

export default MyHalls
