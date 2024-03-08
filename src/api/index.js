import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

export const login = (userInfo) => {
  return axios.get(`${BASE_URL}/users/login`, userInfo);
};

export const logout = () => {
  return axios.get(`${BASE_URL}/users/logout`);
};
