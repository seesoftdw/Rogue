import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtistProps, ReleaseProps } from '../types/Types';
import { fetchArtists, fetchReleases, createArtistProfile, getArtist, getAllArtists, getArtistById } from '../services/artistService';
import artistsData from '../ArtistsDataFile';
import releasesData from '../ReleasesDataFile';

interface ArtistState {
  list: {
    isLoading: boolean;
    status: string;
    values: any[];
    error: string | null;
  };

  save: {
    isSaving: boolean;
    isDeleting: boolean;
    error: string | null;
  };
  isArtist: boolean;
}

interface ReleaseState {
  list: {
    isLoading: boolean;
    status: string;
    values: ReleaseProps[];
    error: string | null;
  };
}

const initialArtistState: ArtistState = {
  list: {
    isLoading: false,
    status: '',
    values: [],
    error: null,
  },
  save: {
    isSaving: false,
    isDeleting: false,
    error: null,
  },
  isArtist: false,
};

const initialReleaseState: ReleaseState = {
  list: {
    isLoading: false,
    status: '',
    values: [],
    error: null,
  },
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState: initialArtistState,
  reducers: {
    setArtists(state, action: PayloadAction<ArtistProps[]>) {
      state.list.values = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state) => {
        state.list.status = 'pending';
        state.list.isLoading = true;
      })
      .addCase(fetchArtists.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.list.status = 'success';
        state.list.values = action.payload;
        state.list.isLoading = false;
      })
      .addCase(fetchArtists.rejected, (state) => {
        state.list.status = 'failed';
        state.list.isLoading = false;
        state.list.values = artistsData;
        state.list.error = 'Failed to fetch artists';
      })
      .addCase(createArtistProfile.pending, (state) => {
        state.save.isSaving = true;
      })
      .addCase(createArtistProfile.fulfilled, (state) => {
        state.save.isSaving = false;
        state.isArtist = true;
      })
      .addCase(createArtistProfile.rejected, (state) => {
        state.save.isSaving = false;
        state.save.error = 'Failed to save artist profile';
      })
      .addCase(getArtist.pending, (state) => {
        state.list.isLoading = true;
      })
      .addCase(getArtist.fulfilled, (state, action: PayloadAction<any>) => {
        state.list.isLoading = false;
        state.list.values = [action.payload];
      })
      .addCase(getArtist.rejected, (state) => {
        state.list.isLoading = false;
        state.list.error = 'Failed to fetch artist profile';
      })
      .addCase(getAllArtists.pending, (state) => {
        state.list.isLoading = true;
      })
      .addCase(getAllArtists.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.list.isLoading = false;
        state.list.values = action.payload;
      })
      .addCase(getAllArtists.rejected, (state) => {
        state.list.isLoading = false;
        state.list.error = 'Failed to fetch all artists';
      })
      .addCase(getArtistById.pending, (state) => {
        state.list.isLoading = true;
      })
      .addCase(getArtistById.fulfilled, (state, action: PayloadAction<any>) => {
        state.list.isLoading = false;
        state.list.values = [action.payload];
      })
      .addCase(getArtistById.rejected, (state) => {
        state.list.isLoading = false;
        state.list.error = 'Failed to fetch artist by ID';
      });
  },
});

const releasesSlice = createSlice({
  name: 'releases',
  initialState: initialReleaseState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReleases.pending, (state) => {
        state.list.status = 'pending';
        state.list.isLoading = true;
      })
      .addCase(fetchReleases.fulfilled, (state, action: PayloadAction<ReleaseProps[]>) => {
        state.list.status = 'success';
        state.list.values = action.payload;
        state.list.isLoading = false;
      })
      .addCase(fetchReleases.rejected, (state) => {
        state.list.status = 'failed';
        state.list.isLoading = false;
        state.list.values = releasesData;
        state.list.error = 'Failed to fetch releases';
      });
  },
});

export const { setArtists } = artistsSlice.actions;

export default artistsSlice.reducer;
export const releasesReducer = releasesSlice.reducer;
