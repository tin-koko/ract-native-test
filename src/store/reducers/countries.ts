import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "src/types";

const initialState = [] as Country[];

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (_state, action: PayloadAction<Country[]>) => action.payload,
  },
});

export const { setCountries } = countrySlice.actions;

export default countrySlice;
