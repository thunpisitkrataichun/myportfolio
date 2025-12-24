import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const userCreateSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});
export const userCreateReducer = userCreateSlice.reducer;
export const {setUsername} = userCreateSlice.actions;


