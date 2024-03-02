import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.get('userInfo') ? JSON.parse(localStorage.get('userInfo')) : null
}

const authSlice = createSlice({
    initialState: initialState,
    reducers: {
        setCredential: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        clearCredential: (state) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }

    }
});

export default authSlice.reducer;
export const { setCredential, clearCredential } = authSlice.actions;
