import React, { useEffect } from "react";
import main from "../../assets/images/Ellipse 16.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { getHalls } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const BookedHalls = () => {
    const [halls, setHalls] = useState([]);
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const getData = async (e) => {
        const result = await getHalls(user?._id);
        if (result.success) {
            setHalls(result.halls);
        } else {
            showToast(result.message, "error", true);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="w-[80%] ml-60 mb-12">
            <div className="w-full flex flex-col gap-7 mt-12 bg-[#f8f8f8] p-4 rounded-2xl">
                <h1 className="text-[22px] font-bold">Booked Halls</h1>

                <table className="w-full bg-white mx-auto rounded-2xl">
                    <tr>
                        <th className=" text-[#949494] text-[14px] font-normal">
                            Owner Name
                        </th>
                        <th className=" text-[#949494] text-[14px] font-normal">
                            Hall Name
                        </th>
                        <th className=" text-[#949494] text-[14px] font-normal">
                            Address
                        </th>
                        <th className=" text-[#949494] text-[14px] font-normal">
                            Email Address
                        </th>
                        <th className=" text-[#949494] text-[14px] font-normal">Rent Charges</th>
                        <th className=" text-[#949494] text-[14px] font-normal">Capacity</th>
                        <th className=" text-[#949494] text-[14px] font-normal">Action</th>
                    </tr>

                    {
                        halls.map((hall, index) => (
                            <tr key={index} className=" hover:bg-[#f4eeea94] text-[14px]">
                                <td className="flex gap-4 items-center">
                                    <img src={main} alt="" />
                                    {hall?.ownerName}
                                </td>
                                <td>{hall?.name}</td>
                                <td>{hall?.location}</td>
                                <td>{hall?.email}</td>
                                <td>{hall?.rentCharge}</td>
                                <td>{hall?.capacity}</td>
                                <td className="flex gap-2">
                                    <button className="bg-green-500 text-white p-2.5 rounded-[6px]">
                                        Accept
                                    </button>
                                    <button className="bg-red-500 text-white p-2.5 rounded-[6px]">
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </div>
    );
};

export default BookedHalls;
