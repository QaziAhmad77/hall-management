import React, { useState, useCallback } from "react";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import { FaRegUser } from "react-icons/fa";

const Occation = ({ setHalls }) => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const admin = JSON.parse(localStorage.getItem("currentUser"));
  console.log(admin, "admin")
  const fetchHalls = async (searchValue) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/users/${admin?._id}/getAllHalls?name=${searchValue}&location=${searchValue}`
      );
      const data = await response.json();
      if (data.success) {
        setHalls(data.halls);
      } else {
        setHalls([]);
      }
    } catch (error) {
      console.error("Error fetching halls:", error);
      setHalls([]);
    }
  };

  const debouncedFetchHalls = useCallback(debounce(fetchHalls, 300), []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchVal(value);
    debouncedFetchHalls(value);
  };

  return (
    <div className="bg12 w-full md:h-[348px] h-[544px]">
      <ScrollRestoration />
      <div className="flex items-center justify-between w-full px-8 pt-8 pb-4 border-b-[1px] border-orange-500">
        <div className="flex items-center gap-4">
          <Link
            to="/my-halls"
            className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
          >
            My Halls
          </Link>
          <Link
            to="/booked-halls"
            className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
          >
            Booked Halls
          </Link>
          <Link
            to="/create-hall"
            className="bg-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
          >
            Create Your Own Hall
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {admin?.role === "admin" && (
            <Link
              to="/dashboard"
              className="border-[1px] border-orange-500 flex items-center justify-center h-[56px] rounded-[8px] p-2 text-white w-[200px]"
            >
              Your Dashboard
            </Link>
          )}
          <h1
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="text-[18px] rounded-[8px] text-white border-[1px] border-orange-400 h-[56px] w-[100px] flex items-center justify-center cursor-pointer"
          >
            Logout
          </h1>
          <h1
            className="text-[18px] rounded-[8px] text-white border-[1px] border-orange-400 h-[56px] px-2 flex items-center gap-3 cursor-pointer"
          >
            <FaRegUser className="w-6 h-6" />
            <p className="flex flex-col">{admin?.fullName} <span className="text-[12px]">{admin?.email}</span></p>
          </h1>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <h1 className="md:text-[42px] sm:text-[32px] text-[29px] font-bold text-white text-center">
          Find your hall for any occasion
        </h1>
        <div className="items-center justify-center block gap-6 mt-6 md:flex">
          <input
            className="py-3 px-3 rounded-md outline-none w-[300px]"
            type="text"
            onChange={handleSearch}
            value={searchVal}
            placeholder="Search Hall By Name or Location ...."
          />
        </div>
      </div>
    </div>
  );
};

export default Occation;
