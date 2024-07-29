import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArtistProps, ReleaseProps } from "../types/Types";
import artistData from '../ArtistsDataFile'
import releasesData from "../ReleasesDataFile";
import { createArtist } from "../models/Artist";
import { axiosInstance } from "../api";



export const fetchArtists = createAsyncThunk<ArtistProps[], void>(
  'artists/fetchArtists',
  async () => {
    try {
      // const response = await axiosInstance.get('/account/artist/all ');
      // return response.payload
      return artistData;
    } catch (error) {
      console.error('Error fetching artists:', error);
      throw error;
    }
  }
);

export const fetchReleases = createAsyncThunk<ReleaseProps[], void>(
  'releases/fetchReleases',
  async () => {
    try {
      // const response = await axiosInstance.get('/releases');
      return releasesData;
    } catch (error) {
      console.error('Error fetching releases:', error);
      throw error;
    }
  }
);

export const createArtistProfile = createAsyncThunk(
  'createArtistProfile',
  async (artistsData: createArtist) => {
    try {
      const response = await axiosInstance.post('account/artist/create', artistsData);
      return response.data;
    } catch (error) {
      console.error('error creating artist profile');
      throw error;
    }
  }
);

export const getArtist = createAsyncThunk("user/getArtist", async () => {
  try {

    const response = await axiosInstance.get("account/artist/profile ");
    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const getAllArtists = createAsyncThunk("user/artists-list", async () => {
  try {

    const response = await axiosInstance.get("account/artist/all");
    return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const getArtistById = createAsyncThunk<createArtist, string>(
  'users/getUserById',
  async (artist_id: string) => {
    try {
      const response = await axiosInstance.get(`account/artist/${artist_id}`);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
    }
  }
);

