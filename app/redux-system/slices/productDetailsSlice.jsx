import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "getproductdetails",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/productDetail/${id}`,
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

const productDetailsSlice = createSlice({
  name: "getproductdetails",
  initialState: {
    productDetails: {},
    loading: false,
    erorr: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetails = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const productDetailsData = productDetailsSlice.reducer;
