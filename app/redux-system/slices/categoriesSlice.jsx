import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "getcollections",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",

      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getHomePageInit`,

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

const getCategoriesSlice = createSlice({
  name: "getcategories",
  initialState: {
    loading: false,
    erorr: null,
    categories: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const categoriesData = getCategoriesSlice.reducer;
