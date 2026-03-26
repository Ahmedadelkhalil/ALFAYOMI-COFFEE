import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cartSlice";
import CustomerInfo from "./slices/customerInfo";
import ProductsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    customerInfo: CustomerInfo,
    products: ProductsSlice,
  },
});

export default store;
