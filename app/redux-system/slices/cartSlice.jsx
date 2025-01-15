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

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const cartSlice = createSlice({
  name: "cartproducts",
  initialState: {
    cartLoading: false,
    erorr: null,
    cartProducts: null,
    cartArr: [],
  },
  // reducers: {
  //   addToCart: (state, action) => {
  //     const quantityToAdd = action.payload?.count;
  //     const productToAdd = action.payload?.productDetails?.data?.data;

  //     const formatedProducts = {
  //       id: productToAdd.id,
  //       name: productToAdd.product_description?.name || "", // إضافة الاسم من تفاصيل المنتج
  //       price: productToAdd.price,
  //       quantity: quantityToAdd, // العدد الذي تم إضافته
  //       image: productToAdd.image, // الصورة
  //       category: productToAdd.category?.name || "", // اسم التصنيف
  //       count: quantityToAdd,
  //       totalPrice: typeof(action.payload?.productDetails?.data?.productSpecial) == "object" ?  +action.payload?.productDetails?.data?.productSpecial?.price * quantityToAdd : productToAdd?.price,
  //       ...productToAdd,
  //     }

  //     // console.log(formatedProducts);

  //     const checkArr = state.cartArr.some((prod) => {
  //       return prod.id === productToAdd?.id;
  //     });
  //     if (!checkArr) {
  //       // adding product to state.cartArr
  //       state.cartArr = [...state.cartArr, {...productToAdd, formatedProducts}]
  //       axios
  //         .post(
  //           `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/addToCart`,
  //           {
  //             product_id: productToAdd.id,
  //             quantity: quantityToAdd,
  //             options: {
  //               color: action.payload?.selectedColor,
  //               size: action.payload?.selectedSize,
  //             },
  //             name: productToAdd?.product_description?.name
  //           },
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         )
  //         .then((response) => {
  //           console.log("Updated on server successfully:", response.data);
  //         })
  //         .catch((error) => {
  //           console.error("Error updating cart on server:", error);
  //         });
  //     } else {
  //     }
  //   },
  //   deleteProduct: (state, action) => {
  //     // console.log(action.payload);
  //     const updatedProducts3 = state.cartArr.filter(
  //       (product) => product.id !== action.payload.id
  //     );
  //     state.cartArr = updatedProducts3;

  //     axios
  //       .delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/deleteCart`, {
  //         data: {
  //           id: action.payload.id,
  //           cart_id: action.payload.cart_id,
  //         },
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         // console.log("Updated on server successfully:", response);
  //       })
  //       .catch((error) => {
  //         // console.error("Error updating cart on server:", error);
  //       });
  //   },
  //   increment: (state, action) => {
  //     const updatedProducts = state.cartProducts.cartData.map((product) =>
  //       product.id === action.payload.id
  //         ? {
  //             ...product,
  //             quantity: product.quantity + 1,
  //             totalPrice:
  //               product.special == "0.00"
  //                 ? product.price * (product.quantity + 1)
  //                 : product.special * (product.quantity + 1),
  //           }
  //         : product
  //     );

  //     state.cartProducts = { ...state.cartProducts, cartData: updatedProducts };
  //     axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/updateCart`,
  //         {
  //           cart_id: action.payload.cart_id,
  //           product_id: action.payload.id,
  //           quantity: action.payload.quantity + 1,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         // console.log("Updated on server successfully:", response.data);
  //       })
  //       .catch((error) => {
  //         // console.error("Error updating cart on server:", error);
  //       });
  //   },
  //   decrement: (state, action) => {
  //     if (action.payload.quantity > 1) {
  //       const updatedProducts2 = state.cartProducts.cartData.map((product) =>
  //         product.id === action.payload.id
  //           ? {
  //               ...product,
  //               quantity: product.quantity - 1,
  //               totalPrice:
  //                 product.special == "0.00"
  //                   ? product.price * (product.quantity - 1)
  //                   : product.special * (product.quantity - 1),
  //             }
  //           : product
  //       );

  //       state.cartProducts = {
  //         ...state.cartProducts,
  //         cartData: updatedProducts2,
  //       };
  //       axios.post(
  //         `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/updateCart`,
  //         {
  //           cart_id: action.payload.cart_id,
  //           product_id: action.payload.id,
  //           quantity: action.payload.quantity - 1,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //     }
  //   },
  // },
  reducers: {
    // add product
    addToCart: (state, action) => {
      const quantityToAdd = action.payload?.count;
      const productToAdd = action.payload?.productDetails?.data?.data;

      const formatedProducts = {
        id: productToAdd.id,
        name: productToAdd.product_description?.name || "",
        price: productToAdd.price,
        quantity: quantityToAdd,
        image: productToAdd.image,
        category: productToAdd.category?.name || "",
        count: quantityToAdd,
        totalPrice:
          typeof action.payload?.productDetails?.data?.productSpecial ==
          "object"
            ? +action.payload?.productDetails?.data?.productSpecial?.price *
              quantityToAdd
            : productToAdd?.price,
        ...productToAdd,
      };
      // console.log(formatedProducts);
      const checkArr = state.cartArr.some((prod) => {
        return prod.id === productToAdd?.id;
      });
      if (!checkArr) {
        // adding product to state.cartArr
        state.cartArr = [
          ...state.cartArr,
          { ...productToAdd, formatedProducts },
        ];
        axios
          .post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/addToCart`,
            {
              product_id: productToAdd.id,
              quantity: quantityToAdd,
              options: {
                color: action.payload?.selectedColor,
                size: action.payload?.selectedSize,
              },
              name: productToAdd?.product_description?.name,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log("Cart updated successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error updating cart on server:", error);
          });
      }
    },
    
    // increment
    increment: (state, action) => {
      const { id, cart_id, count } = action.payload;
      // Update the cartArr to increment quantity
      state.cartArr = state.cartArr.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.formatedProducts
                ? product.formatedProducts.count + 1
                : +product.quantity + 1, // Increment quantity
              totalPrice: product.formatedProducts
                ? product.formatedProducts.totalPrice
                : product.special !== "0.00"
                ? +product.special * (+product.quantity + 1)
                : +product.price * (+product.quantity + 1), // Update totalPrice
            }
          : product
      );

      // Update the cart on the server
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/updateCart`,
          {
            cart_id,
            product_id: id,
            quantity: action.payload.formatedProducts
              ? action.payload.formatedProducts.count + 1
              : action.payload.quantity + 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("Cart updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating cart:", error);
        });
    },

    // decrement
    decrement: (state, action) => {
      if (action.payload.quantity > 1) {
        const { id, cart_id } = action.payload;
        // Update the cartArr to increment quantity
        state.cartArr = state.cartArr.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity - 1, // Increment quantity
                totalPrice: product.formatedProducts
                  ? product.formatedProducts.totalPrice
                  : product.special !== "0.00"
                  ? +product.special * (product.quantity - 1)
                  : product.price * (product.quantity - 1), // Update totalPrice
              }
            : product
        );

        // Update the cart on the server
        axios
          .post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/updateCart`,
            {
              cart_id,
              product_id: id,
              quantity: action.payload.quantity - 1,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log("Cart updated successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error updating cart:", error);
          });
      }
    },

    // delete product
    deleteProduct: (state, action) => {
      // console.log(action.payload);
      const updatedProducts3 = state.cartArr.filter(
        (product) => product.id !== action.payload.id
      );
      state.cartArr = updatedProducts3;

      axios
        .delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/deleteCart`, {
          data: {
            id: action.payload.id,
            cart_id: action.payload.cart_id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // console.log("Updated on server successfully:", response);
        })
        .catch((error) => {
          // console.error("Error updating cart on server:", error);
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending, (state) => {
      state.cartLoading = true;
    });
    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.cartLoading = false;
      state.cartProducts = action.payload;
      state.cartArr = action.payload.cartData;
    });
    builder.addCase(getCartProducts.rejected, (state, action) => {
      state.cartLoading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const cartDataProducts = cartSlice.reducer;
export const { addToCart, deleteProduct, increment, decrement } =
  cartSlice.actions;
