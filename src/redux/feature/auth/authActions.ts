import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../constants/API";

export interface ISignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: ISignUp, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${API_URL}/auth/signUp`, userData, config);
    } catch (error: any) {
      
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
