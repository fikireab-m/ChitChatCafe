/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        isLoading: false,
        errorMessage: null
    },
    reducers: {
        // eslint-disable-next-line no-unused-vars
        setCredRequest: (state, _action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        setCredSuccess: (state, action) => {
            state.isLoading = false;
            const {user, accessToken} = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        setCredError: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        removeCredRequest: (state, _action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        removeCredSuccess: (state, _action) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
        },
        removeCredError: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },

    }
});

export const {
setCredRequest,
setCredSuccess,
setCredError,
removeCredRequest,
removeCredSuccess,
removeCredError
} = authSlice.actions;

export default authSlice.reducer;