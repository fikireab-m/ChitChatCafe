import { 
    removeCredError, 
    removeCredSuccess, 
    setCredError, 
    setCredSuccess 
} from "./authSlice";

import { call, put, takeEvery } from "redux-saga/effects";

function* loginUser(action) {
    try {
        const userInfo = action.payload;
        const response = yield call(
            // Api login method,
            userInfo
          );
        const token = response.data;
        yield put(setCredSuccess(token));
        return token;
    } catch (e) {
        yield put(setCredError(e));
    }
    return;
}

// eslint-disable-next-line no-unused-vars
function* logoutUser(_action) {
    try {
        const response = yield call(
            // Api logout method
          );
        const res = response.data;
        yield put(removeCredSuccess(res));
        return;
    } catch (e) {
        yield put(removeCredError(e));
    }
    return;
}

export default function* authWatcher() {
    yield takeEvery("auth/setCredRequest", loginUser);
    yield takeEvery("auth/removeCredRequest", logoutUser);
  }