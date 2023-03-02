import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: 0, name: 'Diego Martignoni'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;