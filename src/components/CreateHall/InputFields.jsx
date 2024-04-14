import React from 'react'

const InputFields = () => {
    return (
        <div className='flex flex-col gap-4 flex-1'>
            <h1 className='font-semibold text-orange-500 text-2xl'>Enter Hall Info and Register Your Hall here...</h1>
            <input
                className="p-2 border-[1px] rounded-2xl max-h-[53px] h-[53px] border-[#E6E6E6] outline-none"
                type="text"
                id="hallName"
                placeholder="Enter Hall Name"
            />
            <input
                className="p-2 border-[1px] rounded-2xl max-h-[55px] h-[55px] border-[#E6E6E6] outline-none"
                type="text"
                id="hallLocation"
                placeholder="Enter Hall Location"
            />
            <input
                className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
                type="text"
                id="area"
                placeholder="Area of the Hall (in square meters)"
            />
            <input
                className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
                type="text"
                id="accomodate"
                placeholder="Capacity of the Hall (in number of people)"
            />
            <input
                className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
                type="text"
                id="rent"
                placeholder="Rent Charges"
            />
            <input
                className="p-2 border-[1px] max-h-[55px] h-[55px] border-[#E6E6E6] outline-none rounded-[16px]"
                type="email"
                id="email"
                placeholder="Email Address"
            />
            <textarea
                className="p-2 border-[1px] border-[#E6E6E6] outline-none rounded-[16px]"
                id="desc"
                placeholder="Describe your hall (at least 150 words)"
            />
        </div>
    )
}

export default InputFields
