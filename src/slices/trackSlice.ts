import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTrackList } from "../services/trackService";

const initialState: any = {};

interface CreateResponse {}

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrackList.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        getTrackList.fulfilled,
        (state, action: PayloadAction<CreateResponse>) => {
          state.status = "success";
        }
      )
      .addCase(getTrackList.fulfilled, (state) => {
        state.status = "failed";
      });
  },
});
