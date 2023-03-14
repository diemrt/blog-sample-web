import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import firebaseReducer from "./firebase/firebase.reducer";
import postsReducer from "./posts/posts.reducer";
import usersReducer from "./users/users.reducer";

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        firebase: firebaseReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:  getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})