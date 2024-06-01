import { server } from "..";
import { axiosInstance } from "../../utils/axios";
export const login = async ({ email, password }) => {
  try {
    const { data } = await axiosInstance.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

//register (sign up) new user.
export const register = async (formdata) => {
  try {
    const { data } = await axiosInstance.post(`${server}/register`, formdata, {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

// create hall
export const createHall = async (formdata, id) => {
  try {
    const { data } = await axiosInstance.post(
      `${server}/users/${id}/createHall`,
      formdata,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    console.log(data, "data")
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

// fetch all halls
export const getHalls = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `${server}/users/${id}/getAllHalls`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

// get single user Halls
export const getMyHalls = async (id) => {
  console.log(id, "ID")
  try {
    const { data } = await axiosInstance.get(
      `${server}/users/${id}/getMyHalls`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

export const getSingleHall = async (userId, hallId) => {
  try {
    const { data } = await axiosInstance.get(
      `${server}/users/${userId}/getSingleHall/${hallId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};

// fetch all users
export const getUsers = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `${server}/getAllUsers`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.error(error.response.data);
    return error.response.data;
  }
};
