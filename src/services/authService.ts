import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { createUser } from "../models/User";

export const getUser = createAsyncThunk("user/getusers", async () => {
    try {
        const response = await API.get("users")
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const addUser = createAsyncThunk("users/addusers", async (user: createUser) => {
    try {
        const response = await API.post("users", user)
        return response.data
    } catch (error) {
        console.log(error)
    }
})
