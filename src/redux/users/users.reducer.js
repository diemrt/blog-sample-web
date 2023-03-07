import { createSlice } from "@reduxjs/toolkit"

const initialState =  [
    {id: 0, name: 'Diego Martignoni', email: 'diego.martignoni@my-mail.com', role: 'Admin', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar id augue eget rutrum. Curabitur in auctor lacus, et porta nisl. In porttitor dictum dui, non euismod enim laoreet eu. Vivamus semper elementum tempor.'},
    {id: 1, name: 'Mario Rossi', email: 'mario.rossi@my-mail.com', role: 'Utente', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar id augue eget rutrum. Curabitur in auctor lacus, et porta nisl. In porttitor dictum dui, non euismod enim laoreet eu. Vivamus semper elementum tempor.'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;