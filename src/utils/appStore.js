import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const appStore = configureStore({
  reducer: {
    // modifies appStore and is a combination of the reducers of the slices
    cart: cartReducer,
  },
});

export default appStore;
