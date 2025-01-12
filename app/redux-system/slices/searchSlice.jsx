import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const token = "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB";


// Data
const searchData = {
    searchResult: [],
    loadingSearch: true,
    errorSearch: null
}

// get search data function
export const getSearchData = createAsyncThunk("getsearchdata", async (id, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;

    try{
        const response = await axios ({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/searchProducts?q=${id}`,
            headers: {
                token: `${token}`,
              },
        })
        return response.data;
        
    }catch(er){
        return rejectWithValue(er.response?.data || er.message);
    }
})

// create slice
const searchSlice = createSlice({
    name: "searchdata",
    initialState: searchData,
    extraReducers: (builder)=>{
        builder.addCase(getSearchData.pending, (state, action)=>{
            state.loadingSearch = true;
        })
        builder.addCase(getSearchData.fulfilled, (state, action)=>{
            state.loadingSearch = false;
            state.searchResult = action.payload.data;
            console.log(action.payload);
            
        })
        builder.addCase(getSearchData.rejected, (state, action)=>{
            state.loadingSearch = false;
            state.errorSearch = action.payload;
        })
    }
})

export const searchProducts = searchSlice.reducer;