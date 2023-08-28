import { combineReducers } from "@reduxjs/toolkit";

import Countries from "./countries";

const reducers = combineReducers({
  countries: Countries.reducer,
});

export default reducers;
