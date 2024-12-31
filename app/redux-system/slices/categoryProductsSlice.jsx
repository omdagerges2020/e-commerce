import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryProducts = createAsyncThunk(
  "getcollections",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",

      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/getProductByCategory/${id}`,
      headers: {
        "token": "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios(options);
      // console.log(response.data.categoryData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const cateoryProductsSlice = createSlice({
  name: "getCategoryProducts",
  initialState: {
    categoryProductsLoading: false,
    erorr: null,
    categoryDataProducts: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryProducts.pending, (state) => {
      state.categoryProductsLoading = true;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.categoryProductsLoading = false;
      state.categoryDataProducts = action.payload;
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.categoryProductsLoading = false;
      state.erorr = action.payload;
    });
  },
});


export const categoryProductsData = cateoryProductsSlice.reducer;

