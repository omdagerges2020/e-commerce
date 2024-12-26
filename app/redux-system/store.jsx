import { configureStore } from "@reduxjs/toolkit";
import { collectionData } from "./slices/collectionsSlice";
import { categoriesData } from "./slices/categoriesSlice";
import { categoryProductsData } from "./slices/categoryProductsSlice";
import { login } from "./slices/loginSlice";
import { productDetailsData } from "./slices/productDetailsSlice";
import { headerCategoriesData } from "./slices/categoriesHeaderSlice";

const store = configureStore({
  reducer: {
    collectionData,
    categoriesData,
    categoryProductsData,
    productDetailsData,
    headerCategoriesData,
  },
});

export default store;
