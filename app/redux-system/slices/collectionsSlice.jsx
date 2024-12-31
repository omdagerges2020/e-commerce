import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClollections = createAsyncThunk(
  "getcollections",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/getCategories`,
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

const getCollectionsSlice = createSlice({
  name: "getcollectionsslice",
  initialState: {
    collections: {},
    collectionsLoading: false,
    erorr: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getClollections.pending, (state) => {
      state.collectionsLoading = true;
    });
    builder.addCase(getClollections.fulfilled, (state, action) => {
      state.collectionsLoading = false;
      state.collections = action.payload;
    });
    builder.addCase(getClollections.rejected, (state, action) => {
      state.collectionsLoading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const collectionData = getCollectionsSlice.reducer;
