import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeaderCategories = createAsyncThunk(
  "",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getCategories`,
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

const categoriesHeaderSlice = createSlice({
  name: "categoriesHeaderSlice",
  initialState: {
    loading: false,
    erorr: null,
    headerCategories: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getHeaderCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHeaderCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.headerCategories = action.payload;
    });
    builder.addCase(getHeaderCategories.rejected, (state, action) => {
      state.loading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const headerCategoriesData = categoriesHeaderSlice.reducer;
