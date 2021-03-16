import axios from "axios";

export const fetchUser = () => {
  return axios.get("/user");
};
export const sum = (a, b) => {
  return a + b;
};
