import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducer";

const rootReducer = combineReducers({
  fetchmusic: fetchReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
