import { createSlice } from "@reduxjs/toolkit"

const initialState = {sequential: 0, data: []}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.data.push({
                ...action.payload,
                id: state.sequential
            })
            state.sequential++
        }
    }
});

export const {postAdded} = postsSlice.actions

export default postsSlice