import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5078'}),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
})
export const {
    useGetPostsQuery
} = apiSlice