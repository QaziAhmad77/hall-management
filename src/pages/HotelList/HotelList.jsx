import React, { useEffect, useState } from "react";
import {
  Inspired,
  Messages,
  Occation,
  Packages,
  Platform,
} from "../../components";
import { getHalls } from "../../services/auth";
import { showToast } from "../../utils/showToast";
import { useNavigate } from "react-router-dom";

const HotelList = () => {
  const navigate = useNavigate();
  const [halls, setHalls] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));

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
  }, []);

  return (
    <div>
      <Occation setHalls={setHalls} />
      <Packages halls={halls} />
      {/* <Messages /> */}
      {/* <Inspired /> */}
      <Platform />
    </div>
  );
};

export default HotelList;
