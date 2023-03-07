import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "./firebase/firebase.reducer";
import postsReducer from "./posts/posts.reducer";
import usersReducer from "./users/users.reducer";

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        firebase: firebaseReducer
    }
})