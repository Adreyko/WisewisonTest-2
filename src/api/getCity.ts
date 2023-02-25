import axios from "axios";
import { url } from "../constants/url";

const key = process.env.REACT_APP_API_KEY;
export const getCity = (city: string) =>
  axios.get(`${url}${city}&appid=${key}`);
