import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CitySlice from "../slices/CitySlice/CitySlice";

export const store = configureStore({
  reducer: {
    city: CitySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
