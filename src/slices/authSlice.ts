import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addUser, getUser } from '../services/authService';

interface UserState {
    list: {
        isLoading: boolean;
        status: string;
        values: any[];
    };
    save: {
        isSaving: boolean;
        isDeleting: boolean;
    };
}

const initialState: UserState = {
    list: {
        isLoading: false,
        status: '',
        values: [],
    },
    save: {
        isSaving: false,
        isDeleting: false,
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearSuccessMessage: (state) => {
            // TODO: Update state to clear success message
            state.list.status = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.list.status = 'pending';
                state.list.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.list.status = 'success';
                state.list.values = action.payload;
                state.list.isLoading = false;
            })
            .addCase(getUser.rejected, (state) => {
                state.list.status = 'failed';
                state.list.isLoading = false;
            })
            .addCase(addUser.pending, (state) => {
                state.save.isSaving = true;
            })
            .addCase(addUser.fulfilled, (state) => {
                state.save.isSaving = false;
            })
            .addCase(addUser.rejected, (state) => {
                state.save.isSaving = false;
            });
    },
});

export const { clearSuccessMessage } = userSlice.actions;
export default userSlice.reducer;
