import axios from "axios";

const login = (user) => {
  return axios.post("http://localhost:5000/api/users/login", user);
};

const register = (user) => {
  return axios.post("http://localhost:5000/api/users/register", user);
};

const logout = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  return;
};

const getProfile = () => {
  return axios.get("http://localhost:5000/api/users/profile");
};

export default {
  login,
  register,
  getProfile,
  logout,
};
