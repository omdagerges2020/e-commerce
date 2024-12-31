import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCartProducts = createAsyncThunk(
  "getcartproducts",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/getCart`,
      headers: {
        "token": "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios(options);
      console.log(response);
    
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const cartSlice = createSlice({
  name: "getcartproducts",
  initialState: {
    cartLoading: false,
    erorr: null,
    cartProducts: null,
  },
  reducers: {
    addToCart: ()=>{},
    deleteProduct: ()=>{},
    clearProducts: ()=>{},
    increment: ()=>{},
    decrement: ()=>{},
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending, (state) => {
      state.cartLoading = true;
    });
    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.cartLoading = false;
      state.cartProducts = action.payload;
    });
    builder.addCase(getCartProducts.rejected, (state, action) => {
      state.cartLoading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const cartData = cartSlice.reducer;
