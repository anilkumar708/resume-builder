import { configureStore } from "@reduxjs/toolkit";
import profileDetials from "./ProfileSlice";

const store = configureStore({
  reducer: { postProfile: profileDetials },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
