import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducers from "./reducers";
import type { Country } from "src/types";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["countries"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persisted = persistStore(store);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<{ countries: Country[] }> =
  useSelector;
