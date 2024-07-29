import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";
import axios from "axios";
import { createUser } from "../models/User";
import { RootState } from "../store";

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  isArtist: string;
}


export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {

    const response = await axiosInstance.get("account/all");
    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const getUser = createAsyncThunk("user/getuser", async () => {
  try {

    const response = await axiosInstance.get("account/profile");
    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
});


export const getUserById = createAsyncThunk<User, string>(
  'users/getUserById',
  async (userId: string) => {
    try {
      const response = await axiosInstance.get(`users/${userId}`);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
    }
  }
);


export const addUser = createAsyncThunk("account/create", async (user: createUser) => {
  try {

    const response = await axiosInstance.post("account/create", user);
    console.log("hit adduser function");
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const loginUser = createAsyncThunk("auth/login", async ({ username, password }: { username: string, password: string }) => {
  try {
    const response = await axiosInstance.post("/auth/login", { username, password });

    // Check if the response is successful, no need to manually handle the token
    if (response.status === 200) {
      // Assuming the server sets the `access_token_cookie` and no additional data is needed
      return { user: response.data };
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const resetPassword = createAsyncThunk("user/reset-password", async ({ email, new_password }: { email: string, new_password: string }) => {
  try {

    const response = await axiosInstance.post("reset-password", { email, new_password });
    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}
);

export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async (
    userData: { username: string; email: string },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    const authToken = state.auth.authState; // Adjust according to your state structure

    try {
      const response = await axios.patch(`baseURL/account/profile`, userData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  });

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (userId: number, { rejectWithValue }) => {
    try {
      await axios.delete(`users/${userId}`);
      return { id: userId };
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
