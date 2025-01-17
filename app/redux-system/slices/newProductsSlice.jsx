import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewProducts = createAsyncThunk(
  "getNewProducts",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/getHomePageInit`,
      headers: {
        "token": "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios(options);
      // console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const newProductsSlice = createSlice({
  name: "getNewProducts",
  initialState: {
    newProducts: {},
    newProductsLoading: false,
    erorr: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getNewProducts.pending, (state) => {
      state.newProductsLoading = true;
    });
    builder.addCase(getNewProducts.fulfilled, (state, action) => {
      state.newProductsLoading = false;
      state.newProducts = action.payload;
    });
    builder.addCase(getNewProducts.rejected, (state, action) => {
      state.newProductsLoading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const newProductsData = newProductsSlice.reducer;


