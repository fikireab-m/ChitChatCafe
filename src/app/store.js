import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import AuthReducer from "../features/auth/authSlice";
import rootSaga from "../features/rootSaga";

const saga = createSagaMiddleWare()
const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(saga),
    devTools:true,
});
saga.run(rootSaga)
export default store;
