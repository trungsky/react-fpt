import axios from "axios";
import { isAuthenticated } from "../auth";
const user = isAuthenticated();
export const axiosClient = axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + user.token,
  },
});
