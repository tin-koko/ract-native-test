import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../graphql/client";
import { GET_COUNTRIES } from "../graphql/queries";

export const loadCountries = createAsyncThunk(
  "countries/loadCountries",
  async () => {
    const { data } = await client.query({
      query: GET_COUNTRIES,
    });
    console.log(data);
    return data.countries;
  }
);

interface IAuthProps {
  loading: boolean;
  error: any;
  countries: [];
}

const initialState: IAuthProps = {
  loading: false,
  error: null,
  countries: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
