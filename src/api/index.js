import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

export const login = (userInfo) => {
  return axios.post(`${BASE_URL}/users/login`, userInfo);
};

export const logout = () => {
  return axios.post(`${BASE_URL}/users/logout`);
};


export const createPost = (post) => {
  return axios.post(`${BASE_URL}/posts`, post);
}

export const getPostsApi = () => {
  return axios.get(`${BASE_URL}/posts`);
}