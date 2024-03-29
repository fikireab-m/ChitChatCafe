import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import AuthReducer from "../features/auth/authSlice";
import PostReducer from "../features/post/postSlice";
import Saga from "../features/rootSaga";

const saga = createSagaMiddleWare()
const store = configureStore({
    reducer: {
        auth: AuthReducer,
        posts:PostReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(saga),
    devTools:true,
});
saga.run(Saga)
export default store;
