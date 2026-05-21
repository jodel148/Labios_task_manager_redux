import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

// This is the central store that holds all app data
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
