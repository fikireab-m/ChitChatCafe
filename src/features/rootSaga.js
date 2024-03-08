import { all } from "redux-saga/effects";
import authWatcher from "./auth/authSaga";

export default function* rootSaga() {
    yield all([authWatcher()]);
}