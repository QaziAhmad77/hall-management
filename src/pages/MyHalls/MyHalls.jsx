import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { showToast } from "../../utils/showToast";
import { getMyHalls } from "../../services/auth";

const MyHalls = () => {
  const [element, setElement] = useState(6);
  const [myHalls, setMyHalls] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));

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
  }, []);

  return (
    <div className='w-[80%] mx-auto'>
      <h1
        id='pac'
        className=' text-[#222] text-[25px] font-bold text-center pt-24'
      >
        My Halls
      </h1>
      <p className='text-start font-semibold text-[18px] mt-10'>
        Below are the halls I have created ........
      </p>
      {myHalls.length === 0 && (
        <div className='flex flex-col items-center justify-center gap-10'>
          <h1 className=' text-[28px] font-normal text-[#222] text-center pt-24'>
            No Hall Found
          </h1>
        </div>
      )}
      <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11 pt-16 mx-auto'>
        {slice.map((item) => {
          return (
            <Link
              to={`/my-hall-detail/${item._id}`}
              className='relative border p-3 rounded-[8px] h-[400px]'
            >
              <div className='relative h-[250px] w-[100%] bg-cover object-cover'>
                <img
                  className='h-full w-full'
                  src={item.files[0]?.url}
                  alt=''
                />
                <p className=' bg-black py-1 px-2 text-white w-fit absolute top-0'>
                  {item?.name}
                </p>
              </div>
              <div className='flex flex-col h-[120px] justify-between'>
                <div className='flex items-center h-[50%] flex-1 justify-between gap-40 mt-4'>
                  <h1 className=' text-[14px] font-normal whitespace-nowrap'>
                    {item?.area} Kanal
                  </h1>
                  <h1 className=' text-[14px] font-normal flex gap-3 items-center'>
                    <p className=' text-[#F39D12]'>
                      <FaLocationDot />
                    </p>
                    {item?.location}
                  </h1>
                </div>
                <div className='flex items-center h-[50%] justify-between flex-1 md:gap-[7rem] gap-[6rem] mt-3'>
                  <p className=' bg-[#F39D12] text-sm text-white h-10 px-3 rounded-md flex justify-between items-center w-[120px] max-w-[120px]'>
                    Capacity
                    {item.capacity}
                  </p>
                  <p className='bg-[#F39D12] text-white h-10 flex items-center justify-center px-3 rounded-md whitespace-nowrap w-[120px]  max-w-[120px]'>
                    Rs {item.rentCharge}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {myHalls.length > 3 && (
        <button onClick={() => loadMore()} className=' mx-auto mt-7 button'>
          Load More
        </button>
      )}
    </div>
  );
};

export default MyHalls;
