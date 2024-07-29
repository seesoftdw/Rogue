import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosArtistApiInstance } from "../api";
import { CreateUploadAsset } from "../models/Upload";
import axios from "axios";

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: sessionStorage.getItem("token"),
  };
};

export interface UploadAsset {
  chunk_number: string;
  uuid: string;
  uri: string;
}

interface UploadFile {
  uri: string;
  body: Uint8Array;
}

interface CompleteUploadAsset {
  uuid: string;
  uri: string;
}

export const createUpload = createAsyncThunk(
  "upload/createUpload",
  async (data: CreateUploadAsset) => {
    const headers = { ...getHeaders() };
    const response = await axiosArtistApiInstance.post("/asset/create", data, {
      headers,
    });
    return response.data;
  }
);

export const uploadFileChunk = createAsyncThunk(
  "upload/Upload",
  async (data: UploadAsset) => {
    const body = {
      chunk_number: data.chunk_number,
      uuid: data.uuid,
    };
    const headers = { ...getHeaders() };
    const response = await axios.post(data.uri, body, {
      headers,
    });
    return response.data;
  }
);

export const uploadFile = createAsyncThunk(
  "upload/UploadFile",
  async (data: UploadFile) => {
    const response = await axios.put(data.uri, data.body, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data;
  }
);

export const completeUpload = createAsyncThunk(
  "upload/UploadFile",
  async (data: CompleteUploadAsset) => {
    const headers = { ...getHeaders() };
    const response = await axios.post(
      data.uri,
      { uuid: data.uuid },
      {
        headers,
      }
    );
    return response.data;
  }
);
