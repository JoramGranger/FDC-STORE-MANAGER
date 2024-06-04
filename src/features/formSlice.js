import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
    errors: {},
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
    },
});

export const { setUsername, setPassword, setErrors } = formSlice.actions;

export default formSlice.reducer;
