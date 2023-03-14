import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { client } from "../api/client";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/posts');
    return response;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, description, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        userId
                    }
                }
            }
        },
        postEdited: {
            reducer(state, action) {
                const {id, title, description} = action.payload
                const existing = state.posts.find(post => post.id === id)
                if(existing) {
                    existing.title = title;
                    existing.description = description;
                }
            },
            prepare(id, title, description){
                return {
                    payload: {
                        id,
                        title,
                        description
                    }
                }
            }
        }
    }
});

export const {
    postAdded, 
    postEdited
} = postsSlice.actions

export default postsSlice.reducer

export const getAllPosts = (state, userId) => state.posts.posts.filter(p => p.userId === userId)
export const getPostById = (state, postId) => state.posts.posts.find(p => p.id === postId)