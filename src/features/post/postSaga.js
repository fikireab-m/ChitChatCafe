import { call, put, takeEvery } from "redux-saga/effects";
import { createPost } from "../../api";
import { addPostError, addPostSuccess } from "./postSlice";


function* createNewPost(action) {
    try {
        const response = yield call(createPost, action.payload);
        const post = response.data;
        yield put(addPostSuccess(post));
    } catch (error) {
        put(addPostError(error.message));
    }
}

export default function* postWatcher() {
    yield takeEvery("posts/addPostRequest", createNewPost);
}