import { login, logout } from "../../api";
import { 
    removeCredError, 
    removeCredSuccess, 
    setCredError, 
    setCredSuccess 
} from "./authSlice";

import { call, put, takeLatest } from "redux-saga/effects";

function* loginUser(action) {
    try {
        const userInfo = action.payload;
        const response = yield call(
            login,
            userInfo
          );
        const user = response.data;
        yield put(setCredSuccess(user));
        return user;
    } catch (e) {
        yield put(setCredError(e));
    }
    return;
}

// eslint-disable-next-line no-unused-vars
function* logoutUser() {
    try {
        const response = yield call(logout);
        const res = response.data;
        yield put(removeCredSuccess(res));
        return;
    } catch (e) {
        yield put(removeCredError(e));
    }
    return;
}

export default function* authWatcher() {
    yield takeLatest("auth/setCredRequest", loginUser);
    yield takeLatest("auth/removeCredRequest", logoutUser);
  }