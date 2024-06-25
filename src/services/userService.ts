import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createUser } from "../models/User";

interface CreateCredentials {
    email: string;
    password: string;
}

interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    isArtist: string;
}


export const getUser = createAsyncThunk("user/getusers", async () => {
    try {

        const response = await axiosInstance.get("users");
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


export const addUser = createAsyncThunk("users", async (user: createUser) => {
    try {

        const response = await axiosInstance.post("register", user);
        return response.data;

    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const loginUser = createAsyncThunk("user/login", async ({ email, password }: { email: string, password: string }) => {
    // const navigate = useNavigate();
    try {

        const response = await axiosInstance.post("login", { email, password });
        return response.data;

    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const resetPassword = createAsyncThunk("user/reset-password", async ({ email, new_password }: { email: string, new_password: string }) => {
    // const navigate = useNavigate();
    try {

        const response = await axiosInstance.post("reset-password", { email, new_password });
        return response.data;

    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const updateUser = createAsyncThunk(
    'user/update',
    async ({ userId, userData }: { userId: number, userData: { username: string, email: string } }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`users/${userId}`, userData);
            return response.data;

        } catch (error: any) {
            console.error(error);
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    'user/delete',
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




