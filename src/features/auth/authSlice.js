/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userVal = localStorage.getItem('userInfo');

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userVal ? JSON.parse(userVal) : null,
        isLoading: false,
        errorMessage: null
    },
    reducers: {
        setCredRequest: (state, action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        setCredSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        setCredError: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        removeCredRequest: (state, action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        removeCredSuccess: (state, action) => {
            localStorage.removeItem('userInfo');
            state.user = null;
            state.isLoading = false;
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