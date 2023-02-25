import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICity } from "../../../intarfaces/intarfaces";
import { fetchCity } from "./thunk/FetchCity";

interface IState {
  city: ICity | null;
  error: null | string;
  status: "loading" | "resolved" | "rejected" | null;
}

const initialState: IState = {
  city: {
    name: "",
    tempInfo: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    weather: [],
    wind: {
      speed: 0,
    },
  },
  error: null,
  status: null,
};

const CitySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity(state: IState, action: PayloadAction<ICity | null>) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCity.pending, (state: IState) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(fetchCity.fulfilled, (state: IState) => {
      state.error = null;
      state.status = "resolved";
    });
    builder.addCase(fetchCity.rejected, (state: IState, action: any) => {
      state.city = initialState.city;
      state.status = "rejected";
    });
  },
});

export const { setCity } = CitySlice.actions;
export default CitySlice.reducer;
