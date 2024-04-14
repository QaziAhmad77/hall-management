import React, { useState } from 'react'
import { days } from '../Data/Data';

const Schedule = () => {
    const [weekDays, setWeekDays] = useState([]);

    const handleDays = (index, day, e) => {
        e.preventDefault()
        setWeekDays(prevWeekDays => {
            const dayExists = prevWeekDays.some(item => item.day === day);
            if (dayExists) {
                return prevWeekDays.filter(item => item.day !== day);
            } else {
                return [...prevWeekDays, { day: day, noon: "no", dinner: "no" }];
            }
        });
    }
    const handleCheckboxChange = (dayIndex, event) => {
        const { id, checked } = event.target;
        const updatedWeekDays = [...weekDays];
        updatedWeekDays[dayIndex][id] = checked ? "yes" : "no";
        setWeekDays(updatedWeekDays);
    };
    return (
        <div className="flex flex-col self-start relative h-full gap-8 flex-1">
            <h1 className="text-orange-500 text-2xl font-semibold">Hall Timing</h1>
            <div className="flex self-start gap-4 w-full">
                {days.map((item, index) => (
                    <button
                        onClick={(e) => handleDays(index, item.day, e)}
                        key={index}
                        className={`font-500 flex-grow text-sm px-[8px] py-[6px]
                            ${weekDays.some(ele => ele.day === item.day) ? "bg-orange-500  text-white" : "bg-orange-200  text-black"} rounded-[8px]`}
                    >
                        {item.day}
                    </button>
                ))}
            </div>
            {weekDays.map((day, index) => (
                <div key={index} className="flex items-center gap-3 duration-1000">
                    <p className="text-[12px] font-400 text-gray">{day.day}</p>
                    <span className="flex-grow bg-slate-300 w-full h-[1px]"></span>
                    <div className="text-[12px] flex gap-4">
                        <label
                            className="flex items-center gap-1 whitespace-nowrap"
                            htmlFor={`noon-${index}`}
                        >
                            Lunch event
                            <input
                                type="checkbox"
                                id="noon"
                                checked={day.noon === "yes"}
                                onChange={(e) => handleCheckboxChange(index, e)}
                            />
                        </label>
                        <label
                            className="flex items-center gap-1 whitespace-nowrap"
                            htmlFor={`dinner-${index}`}
                        >
                            Dinner event
                            <input
                                type="checkbox"
                                id="dinner"
                                checked={day.dinner === "yes"}
                                onChange={(e) => handleCheckboxChange(index, e)}
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button
                type="submit"
                className="h-[56px] absolute bottom-0 rounded-[16px] bg-orange-500 w-full text-[#F8F8F8] m-auto"
            >
                Request to Admin
            </button>
        </div>
    )
}

export default Schedule
