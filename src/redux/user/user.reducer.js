import { createSlice } from "@reduxjs/toolkit"

const initialState =  {id: 0, name: 'Diego Martignoni', email: 'diego.martignoni@my-mail.com'}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export default userSlice.reducer;