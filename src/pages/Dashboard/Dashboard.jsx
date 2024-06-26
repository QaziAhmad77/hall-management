import React, { useEffect, useState } from "react";
import icon from "./../../assets/images/Icon12.png";
import Charts from "../../components/Dashboard/Charts";
import { getAllBookings, getHalls, getUsers } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [halls, setHalls] = useState([]);
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const getUserData = async () => {
    const result = await getUsers();
    if (result.success) {
      setUsers(result.Users);
    } else {
      showToast(result.message, "error", true);
    }
  };

  const getHallData = async () => {
    const result = await getHalls(user?._id);
    if (result.success) {
      setHalls(result.halls);
    } else {
      showToast(result.message, "error", true);
    }
  };

  const getBookingData = async (e) => {
    const result = await getAllBookings();
    console.log(result, "result")
    if (result.success) {
      setBookings(result?.myBookings);
    } else {
      // showToast(result.message, "error", true);
    }
  };

  useEffect(() => {
    getUserData();
    getHallData();
    getBookingData()
  }, []);

  // Format data to match monthly chart data format
  const formatChartData = (data) => {
    const monthlyData = Array(12).fill(0).map((_, index) => ({
      name: new Date(0, index).toLocaleString('default', { month: 'short' }),
      count: 0
    }));

    data.forEach(item => {
      const month = new Date(item.createdAt).getMonth();
      monthlyData[month].count += 1;
    });

    return monthlyData;
  };

  const usersChartData = formatChartData(users);
  const hallsChartData = formatChartData(halls);

  return (
    <div className="ml-60 mx-12 w-full">
      <h1 className="text-[22px] font-bold mt-5">Dashboard</h1>

      <div className="grid grid-cols-3 gap-11 mt-8">
        <div className="bg-[#F39D12] py-6 pl-6 pr-32 rounded-md">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" />
            <div>
              <h1 className="text-[#2b2b2b] text-[14px] font-medium">Users</h1>
              <p className="text-[18px] text-[#434343] font-[700]">{users.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F39D12] py-6 pl-6 pr-32 rounded-md">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" />
            <div>
              <h1 className="text-[#2b2b2b] text-[14px] font-medium">Halls</h1>
              <p className="text-[18px] text-[#434343] font-[700]">{halls.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F39D12] py-6 pl-6 pr-32 rounded-md">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" />
            <div>
              <h1 className="text-[#2b2b2b] text-[14px] font-medium">Booked Halls</h1>
              <p className="text-[18px] text-[#434343] font-[700]">{bookings?.length}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex gap-6 mt-12">
        <Charts heading="Users" data={usersChartData} />
        <Charts heading="Halls" data={hallsChartData} />
      </div>
    </div>
  );
};

export default Dashboard;
