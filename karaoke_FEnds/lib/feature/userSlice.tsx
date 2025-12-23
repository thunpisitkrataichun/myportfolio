import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
export const registerUser = createAsyncThunk(
  "usersState/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users", // URL ให้ตรงกับ NestJS
        userData
      );
      return response.data; // ข้อมูลที่ return จะไปอยู่ที่ action.payload ใน fulfilled
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const initialState = {
  username: "",
  loading: false, // เพิ่มสถานะโหลด
  error: null as unknown,
};

export const userCreateSlice = createSlice({
  name: "userCreate",
  initialState,
  reducers: {
    setUsername: (state, action) => {
        state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.username = action.payload.username;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },

});

export const { setUsername } = userCreateSlice.actions;
export const userCreateReducer = userCreateSlice.reducer;
export default userCreateSlice;
