import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosArtistApiInstance } from "../api";
import { CreateUploadAsset } from "../models/Upload";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: sessionStorage.getItem("token"),
};

interface TrackList {
    title: string,
    time: string,
    status: string,
    price: number,
    owners: string,
    listeners: string,
    streams: string,
    dateAdded: string,

}

export const getTrackList = createAsyncThunk(
  "track/getTrackList",
  async () => {
    const response = await axiosArtistApiInstance.get("/asset?orh_account_id=abc1234", { headers: headers });

    return response.data;
  }
);
