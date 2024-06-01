import React, { useState } from "react";

const Timings = ({ hotelDetail }) => {
  const [eventDetails, setEventDetails] = useState({
    eventDate: "",
    eventTime: "",
  });

  console.log(eventDetails, "eventDetails`")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };


  const submitDateAndTime = async () => {
    if (eventDetails.eventDate && eventDetails.eventTime) {
      const dateTimeString = `${eventDetails.eventDate}T${eventDetails.eventTime}:00`;
      const date = new Date(dateTimeString);
      const unixTime = Math.floor(date.getTime() / 1000);
      console.log("Unix Timestamp:", unixTime);
      
      // try {
      //   const response = await fetch('', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ eventTimestamp: unixTime }),
      //   });

      //   const data = await response.json();
      //   console.log('Success:', data);
      // } catch (error) {
      //   console.error('Error:', error);
      // }
    }
  };

  return (
    <div className="flex justify-between gap-4 w-full mt-8">
      <div className="flex flex-col">
        <h1 className="font-semibold text-[24px]">Select Event Date and Time and Book Your Hall</h1>
        <div className="flex items-center justify-between gap-4 flex-grow w-full">
          <label className="flex flex-col gap-2 flex-1">
            Select Date
            <input
              type="date"
              name="eventDate"
              className="h-[56px] max-h-[56px] rounded-[16px] border-[1px] border-slate-300 outline-none px-2"
              value={eventDetails.eventDate}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex flex-col gap-2 flex-1">
            Select Time
            <input
              type="time"
              name="eventTime"
              className="h-[56px] max-h-[56px] rounded-[16px] border-[1px] border-slate-300 outline-none px-2"
              value={eventDetails.eventTime}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 w-1/3">
        <h1 className="text-[22px] font-semibold">Night Event</h1>
        <div className="flex flex-col gap-4">
          <p className="text-[15px] font-normal flex items-center justify-between">
            Hall Rent <span>{hotelDetail?.rentCharge}</span>
          </p>
          <p className="h-[1px] w-[90%] mx-auto bg-[#b0abab]"></p>
          <p className="text-[15px] font-bold flex items-center justify-between">
            Total with taxes <span>{hotelDetail?.rentCharge}</span>
          </p>
          <button className="bg-orange-400 text-white font-semibold rounded-[16px] h-[56px] p-3" onClick={submitDateAndTime}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Timings;
