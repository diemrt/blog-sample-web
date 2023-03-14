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
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = state.posts.concat(action.payload);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    }
});

export const {
    postAdded, 
    postEdited
} = postsSlice.actions

export default postsSlice.reducer

export const getAllPosts = (state) => state.posts.posts
export const getPostById = (state, postId) => state.posts.posts.find(p => p.id === postId)