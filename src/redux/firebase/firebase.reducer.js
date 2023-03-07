import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userId: 0, 
    email: 'diego.martignoni@my-mail.com'
}

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {}
});

export default firebaseSlice.reducer;