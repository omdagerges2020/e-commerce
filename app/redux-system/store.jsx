import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { collectionData } from "./slices/collectionsSlice";
import { categoriesData } from "./slices/categoriesSlice";
import { categoryProductsData } from "./slices/categoryProductsSlice";
import { auth } from "./slices/loginSlice";
import { productDetailsData } from "./slices/productDetailsSlice";
import { headerCategoriesData } from "./slices/categoriesHeaderSlice";
import { newProductsData } from "./slices/newProductsSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { cartDataProducts } from "./slices/cartSlice";
import { whitelistDataProducts } from "./slices/whitelistSlice";
import { BtnsPagination } from "./slices/paignationSlice";
import { searchProducts } from "./slices/searchSlice";


const config = {
  key: "root",
  storage,
  whitelist: ["auth", "cartDataProducts", "whitelistDataProducts"],
};

const mainReducer = combineReducers({
  auth,
  collectionData,
  categoriesData,
  categoryProductsData,
  productDetailsData,
  headerCategoriesData,
  newProductsData,
  cartDataProducts,
  whitelistDataProducts,
  BtnsPagination,
  searchProducts,
});

const persistRed = persistReducer(config, mainReducer);

export const store = configureStore({
  reducer: persistRed,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // تجاهل القيم غير القابلة للتسلسل
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register'], // إذا كان المسار المسبب للمشكلة هو `register`
      },
    }),
});

export const mainStore = persistStore(store);
