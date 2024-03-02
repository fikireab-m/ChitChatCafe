import { apiSlice } from "../api/apiSlice";

const BASE_URL = "/api/users";

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${BASE_URL}/auth`,
                method: 'Post',
                body: data
            }),
        })
    })
});

export const { useLoginMutation } = usersSlice;