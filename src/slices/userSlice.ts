import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addUser, getUser, loginUser, deleteUser, getUserById, resetPassword } from '../services/userService';
import { createUser } from '../models/User';

interface UserState {
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
    authState: {
        isLoggedIn: boolean;
        user?: any;
        loginError?: string;
    };
}

const initialState: UserState = {
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
    authState: {
        isLoggedIn: false,
    },
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearSuccessMessage: (state) => {
            state.list.status = '';
        },
        logout: (state) => {
            state.authState.isLoggedIn = false;
            state.authState.user = undefined;
        },
        toggleLoggedIn: (state) => {
            state.authState.isLoggedIn = !state.authState.isLoggedIn;
        }
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
                state.list.error = "failed to fetch user";
            })
            .addCase(getUserById.pending, (state) => {
                state.list.status = 'pending';
                state.list.isLoading = true; 
            })
            .addCase(getUserById.fulfilled, (state, action: PayloadAction<any>) => {
                state.list.status = 'success';
                state.list.values = action.payload;
                state.list.isLoading = false;
            })
            .addCase(getUserById.rejected, (state) => {
                state.list.status = 'failed';
                state.list.isLoading = false;
                state.list.error = "failed to fetch user";
            })
            .addCase(addUser.pending, (state) => {
                state.save.isSaving = true;
            })
            .addCase(addUser.fulfilled, (state) => {
                state.save.isSaving = false;
                state.authState.isLoggedIn = true;
            })
            .addCase(addUser.rejected, (state) => {
                state.save.isSaving = false;
                state.save.error = "Failed to add user";
            })
            .addCase(loginUser.pending, (state) => {
                state.authState.loginError = undefined;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.authState.isLoggedIn = true;
                state.authState.user = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                state.authState.loginError = "Invalid email or password";
            })
            .addCase(deleteUser.pending, (state) => {
                state.save.isDeleting = true;
                state.save.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action: PayloadAction<{ id: number }>) => {
                state.save.isDeleting = false;
                state.list.values = state.list.values.filter(user => user.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action: PayloadAction<any>) => {
                state.save.isDeleting = false;
                state.save.error = action.payload || 'Failed to delete user';
            })
            .addCase(resetPassword.pending, (state) => {
                state.save.isSaving = true;
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.save.isSaving = false;
                state.save.error = null;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.save.isSaving = false;
                state.save.error = action.error.message || 'Failed to reset password';
            });
    },
});

export const { clearSuccessMessage, logout, toggleLoggedIn } = userSlice.actions;
export default userSlice.reducer;
