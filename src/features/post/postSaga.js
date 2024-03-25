import { call, put, takeEvery } from "redux-saga/effects";
import { createPost, getPostsApi } from "../../api";
import { addPostError, addPostSuccess, getPostsError, getPostsSuccess } from "./postSlice";


function* createNewPost(action) {
    try {
        const response = yield call(createPost, action.payload);
        const post = response.data;
        yield put(addPostSuccess(post));
    } catch (error) {
        put(addPostError(error.message));
    }
}

function* getPosts() {
    try {
        const response = yield call(getPostsApi);
        const posts = response.data;
        yield put(getPostsSuccess(posts));
    } catch (error) {
        put(getPostsError(error.message));
    }
}

export default function* postWatcher() {
    yield takeEvery("posts/addPostRequest", createNewPost);
    yield takeEvery("posts/getPostsRequest", getPosts);
}