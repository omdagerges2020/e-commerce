import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = process.env.NEXT_PUBLIC_API_TOKEN;


export const getCartProducts = createAsyncThunk(
  "getcartproducts",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/getCart`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios(options);
      // console.log(response);
    
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
    cartProducts: {},
  },
  reducers: {
    addToCart: (state,action)=>{
      // console.log(action.payload);
      const checkArr = state?.cartProducts?.cartData.some((prod)=>{
        return prod.id === action.payload?.productDetails?.data?.data?.id
      }) 
      if(!checkArr){
        // console.log("not same")
        axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/addToCart`,
          {
            product_id: action.payload?.productDetails?.data?.data?.id,
            quantity: action.payload?.count,
            options: {
              color: action.payload?.selectedColor,
              size: action.payload?.selectedSize,
            }
            // color: action.payload.selectedColor,  // إضافة اللون
            // size: action.payload.selectedSize,    // إضافة المقاس
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log("Updated on server successfully:", response.data);
        })
        .catch((error) => {
          // console.error("Error updating cart on server:", error);
        });
        // state.cartProducts?.cartData.push(action.payload?.data?.data)
      }else {
        // console.log("same product");
      }
    },
    deleteProduct: (state,action)=>{
      // console.log(action.payload);
      const updatedProducts3 = state.cartProducts.cartData.filter((product) => 
        product.id !== action.payload.id)
    
      state.cartProducts = { ...state.cartProducts, cartData: updatedProducts3 };
      axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/deleteCart`,
        {
          data: {
            id: action.payload.id,
            cart_id: action.payload.cart_id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // console.log("Updated on server successfully:", response);
      })
      .catch((error) => {
        // console.error("Error updating cart on server:", error);
      });

      
    },
    increment: (state,action)=>{
      const updatedProducts = state.cartProducts.cartData.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1, totalPrice: product.special == "0.00" ? product.price * (product.quantity + 1) : product.special * (product.quantity + 1) }
          : product
      );      
    
      state.cartProducts = { ...state.cartProducts, cartData: updatedProducts };
        axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/updateCart`,
          {
            cart_id: action.payload.cart_id,
            product_id: action.payload.id,
            quantity: action.payload.quantity + 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log("Updated on server successfully:", response.data);
        })
        .catch((error) => {
          // console.error("Error updating cart on server:", error);
        });
    },
    decrement: (state,action)=>{
      if(action.payload.quantity > 1){
        const updatedProducts2 = state.cartProducts.cartData.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1, totalPrice: product.special == "0.00" ? product.price * (product.quantity - 1) : product.special * (product.quantity - 1) }
            : product
        );
      
        state.cartProducts = { ...state.cartProducts, cartData: updatedProducts2 };
          axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/updateCart`,
            {
              cart_id: action.payload.cart_id,
              product_id: action.payload.id,
              quantity: action.payload.quantity - 1,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
      }
    }
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

export const cartDataProducts = cartSlice.reducer;
export const {addToCart, deleteProduct, increment, decrement} = cartSlice.actions;
