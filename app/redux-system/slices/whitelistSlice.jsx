import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = process.env.NEXT_PUBLIC_API_TOKEN;


export const getWhiteProducts = createAsyncThunk(
  "getWhiteProducts",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/getWishlist`,
      headers: {
        Authorization: `Bearer ${token}`,
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

const whitelistSlice = createSlice({
  name: "getwhitelistproducts",
  initialState: {
    whiteLoading: false,
    erorr: null,
    whiteProducts: {},
  },
  reducers: {
    addToWhite: (state,action)=>{
      console.log(action.payload);  // object for click product
      const checkArr = state.whiteProducts?.data.some((prod)=>{
        return prod.id === action.payload?.data?.data?.id
      })
      if(!checkArr){
        state.whiteProducts.data.push({ id: action.payload?.data?.data });
        axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/addUpdateWishlist`,
          {
            product_id: action.payload?.data?.data?.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWhiteProducts.pending, (state) => {
      state.whiteLoading = true;
    });
    builder.addCase(getWhiteProducts.fulfilled, (state, action) => {
      state.whiteLoading = false;
      state.whiteProducts = action.payload;
    });
    builder.addCase(getWhiteProducts.rejected, (state, action) => {
      state.whiteLoading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const whitelistDataProducts = whitelistSlice.reducer;
export const {addToWhite} = whitelistSlice.actions;
