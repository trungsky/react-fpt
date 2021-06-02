import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const UserApi = {
  signIn(user) {
    const url = `/signin`;
    return axiosClient.post(url, user);
  },
  signUp(user) {
    const url = `/signup`;
    return axiosClient.post(url, user);
  },
};
export default UserApi;
