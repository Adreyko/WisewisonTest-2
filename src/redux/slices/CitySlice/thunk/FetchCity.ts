import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCity } from "../CitySlice";
import { getCity } from "../../../../api/getCity";
import { ICity } from "../../../../intarfaces/intarfaces";

export const fetchCity = createAsyncThunk(
  "repo/fetchCity",
  async (userName: string, { dispatch }) => {
    const { data } = await getCity(userName);
    const cityInfo: ICity = {
      name: data.name,
      tempInfo: data.main,
      weather: data.weather,
      wind: data.wind,
    };
    dispatch(setCity(cityInfo));
  }
);
