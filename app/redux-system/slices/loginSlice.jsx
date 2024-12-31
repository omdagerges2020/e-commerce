import { createSlice } from "@reduxjs/toolkit";

const data = {
    userToken: false,
    error: null,
    user: null,
};

// Cretae slice 
const loginSlice = createSlice({
    name: "login",
    initialState: data,
    reducers: {
        setLogin: (state,action)=>{
            // state.status = true;
            state.userToken = action.payload.authToken;
            state.user = action.payload;
            state.error = null;
        },
        setLogout: (state, action)=>{
            // state.status = false;
            state.userToken = false;
            state.error = null;
        },
        // setLoginError: (state, action) => {
        //     const error = action.payload;
        //     state.error = {
        //         message: error.message,
        //         name: error.name,
        //         code: error.code,
        //     };
        // }
    },
})

export const auth = loginSlice.reducer;
export const {setLogin, setLogout} = loginSlice.actions;

