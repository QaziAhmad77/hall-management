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
