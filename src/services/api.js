import axios from "axios";
export const api = axios.create({
  baseURL: "https://rocketmovies-api-v2.onrender.com"
});