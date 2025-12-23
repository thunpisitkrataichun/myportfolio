import {configureStore} from "@reduxjs/toolkit";
import {userCreateReducer} from "../feature/userSlice";
export const store = configureStore({
  reducer: {
    userCreate: userCreateReducer,
  },
});