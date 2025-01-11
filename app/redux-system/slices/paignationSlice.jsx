import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BtnsPaginationSlice = createSlice({
    name : "BtnsPaginationSlice",
    initialState : {
        productsBtnsNumber : 1,
    },
    reducers : {
        productsPaginationFirst : (state, action)=>{
            state.productsBtnsNumber = 1 
        },
        productsPaginationPrev : (state, action)=>{
            state.productsBtnsNumber -= 1 
        },
        productsPaginationNext : (state, action)=>{
            state.productsBtnsNumber += 1 
        },
        productsPaginationLast : (state, action)=>{
            state.productsBtnsNumber = 500
        },
    }
})

export const {
    productsPaginationFirst,
    productsPaginationPrev,
    productsPaginationNext,
    productsPaginationLast,
} = BtnsPaginationSlice.actions
export const BtnsPagination = BtnsPaginationSlice.reducer