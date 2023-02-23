import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts/posts.reducer";

export default configureStore({
    reducer: {
        posts: postsSlice.reducer
    }
})