import {configureStore} from "@reduxjs/toolkit";
import {userCreateReducer} from "../feature/userSlice";
export const store = configureStore({
  reducer: {
    userCreate: userCreateReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;