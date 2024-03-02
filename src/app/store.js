import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
export default store;