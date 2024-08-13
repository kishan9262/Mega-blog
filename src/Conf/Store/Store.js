import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authslice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;
