import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/posts.reducer";
import userReducer from "./user/user.reducer";

export default configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer
    }
})