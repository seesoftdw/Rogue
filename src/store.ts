import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./slices/userSlice";
import artistSlice from "./slices/artistSlice";

export const store = configureStore({
    reducer: {
        auth: userSlice,
        artist: artistSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
