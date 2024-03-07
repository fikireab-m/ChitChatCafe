import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import AuthReducer from "../features/auth/authSlice";

const saga = createSagaMiddleWare()
const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(saga),
});

export default store;
