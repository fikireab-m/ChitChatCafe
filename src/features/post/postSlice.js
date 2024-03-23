import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false,
        errorMessage: null
    },
    reducers: {
        getPostsRequest: (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        getPostsSuccess: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsError: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },

        // Add new post
        // eslint-disable-next-line no-unused-vars
        addPostRequest: (state, _action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        addPostSuccess: (state, action) => {
            state.isLoading = false;
            state.posts.push(action.payload);
        },
        addPostError: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        }
    }
});

export const {
    getPostsRequest,
    getPostsSuccess,
    getPostsError,
    addPostRequest,
    addPostSuccess,
    addPostError
} = postSlice.actions;
export default postSlice.reducer;