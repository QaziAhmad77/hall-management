import React, { useState } from "react";
import { parseISO, getUnixTime, isPast } from "date-fns";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/showToast";

const Timings = ({ hotelDetail }) => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    eventDate: "",
    // eventTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const submitDateAndTime = async () => {
    localStorage.setItem("hall", JSON.stringify(hotelDetail && hotelDetail));

    if (!eventDetails.eventDate) {
      showToast("Please select booking date", "error", true);
      return;
    }

    const selectedDate = parseISO(eventDetails.eventDate);

    if (isPast(selectedDate)) {
      showToast("Selected date cannot be in the past", "error", true);
      return;
    }

    const unixTime = getUnixTime(selectedDate);
    localStorage.setItem("bookingDateAndTime", JSON.stringify(unixTime));

    navigate(`/hall/${hotelDetail?._id}/book`);
  };

  return (
    <div className="flex justify-between w-full gap-4 mt-8">
      <div className="flex flex-col">
        <h1 className="font-semibold text-[24px]">
          Select Event Date and Time and Book Your Hall
        </h1>
        <div className="flex items-center justify-between flex-grow w-full gap-4">
          <label className="flex flex-col flex-1 gap-2">
            Select Date
            <input
              type="date"
              name="eventDate"
              className="h-[56px] max-h-[56px] rounded-[16px] border-[1px] border-slate-300 outline-none px-2"
              value={eventDetails.eventDate}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col w-1/3 gap-4 px-4">
        <h1 className="text-[22px] font-semibold">Night Event</h1>
        <div className="flex flex-col gap-4">
          <p className="text-[15px] font-normal flex items-center justify-between">
            Hall Rent <span>{hotelDetail?.rentCharge}</span>
          </p>
          <p className="text-[15px] font-normal flex items-center justify-between">
            Tax <span>10000</span>
          </p>
          <p className="h-[1px] w-[90%] mx-auto bg-[#b0abab]"></p>
          <p className="text-[15px] font-bold flex items-center justify-between">
            Total with taxes{" "}
            <span>{hotelDetail?.rentCharge + 10000}</span>
          </p>
          <button
            className="bg-orange-400 text-white font-semibold rounded-[16px] h-[56px] p-3"
            onClick={submitDateAndTime}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timings;
