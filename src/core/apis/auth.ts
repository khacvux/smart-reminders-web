import { ISignin, ISignup } from "../redux/auth/interfaces";
import AXIOS from "./axiosClient";

const subdirectory = "/auth";

export const signup = async (data: ISignup) => {
  try {
    return await AXIOS.post(`${subdirectory}/signup`, data);
  } catch (error) {
    return error;
  }
};

export const signin = async (data: ISignin) => {
  try {
    return await AXIOS.post(`${subdirectory}/signin`, data);
  } catch (error) {
    return error;
  }
};
