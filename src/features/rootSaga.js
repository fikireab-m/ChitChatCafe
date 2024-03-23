import { all } from "redux-saga/effects";
import authWatcher from "./auth/authSaga";
import postWatcher from "./post/postSaga";

export default function* rootSaga() {
    yield all([authWatcher(), postWatcher()]);
}