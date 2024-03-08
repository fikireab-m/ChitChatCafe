/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem('userInfo');

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userInfo ? JSON.parse(userInfo) : null,
        isLoading: false,
        errorMessage: null
    },
    reducers: {
        setCredRequest: (state, _action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        setCredSuccess: (state, action) => {
            state.isLoading = false;
            const { userIfo } = action.payload;
            state.user = userIfo;
            localStorage.setItem('userInfo', JSON.stringify(userIfo));
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
            state.userIfo = null;
            localStorage.removeItem('userInfo');
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