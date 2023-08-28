import { combineReducers } from "@reduxjs/toolkit";

import Countries from "./countries";

// register reducers
const reducers = combineReducers({
  countries: Countries.reducer,
});

export default reducers;
