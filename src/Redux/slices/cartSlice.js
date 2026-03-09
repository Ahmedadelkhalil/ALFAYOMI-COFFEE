import { createSlice } from "@reduxjs/toolkit";

// CHECKING FOR LOCALSTORAGE
const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalCost =
  localStorage.getItem("totalCost") !== null
    ? localStorage.getItem("totalCost")
    : 0;

const handleLocalStorageAfterOp = (cartItems, totalCost) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalCost", totalCost);
};

const initialState = {
  cartItems: cartItems,
  totalCost: totalCost,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add Products To Cart
    addProductToCart: (state, action) => {
      const productInCart = state.cartItems.find(
        (pro) => pro.id === action.payload.id
      );
      if (action.payload.quantity > 0) {
        if (productInCart) {
          productInCart.quantity =
            productInCart.quantity + action.payload.quantity;
          const currAmount = productInCart.quantity;
          productInCart.productTotalCost = currAmount * productInCart.price;
        } else {
          state.cartItems.push({ ...action.payload });
        }
      }
      state.totalCost = state.cartItems.reduce((acc, curr) => {
        return Number(acc + curr.quantity * curr.price);
      }, 0);
      handleLocalStorageAfterOp(state.cartItems, state.totalCost);
    },
    // Delete Products From Cart
    delProductFromCart: (state, action) => {
      const deletingPro = state.cartItems.filter(
        (pro) => pro.id !== action.payload.id
      );
      state.cartItems = deletingPro;
      state.totalCost = state.cartItems.reduce((acc, curr) => {
        return Number(acc + curr.quantity * curr.price);
      }, 0);
      handleLocalStorageAfterOp(deletingPro, state.totalCost);
    },
    // Increment Product Quantity
    incrementQuantity: (state, action) => {
      const targetingProduct = state.cartItems.find(
        (pro) => pro.id === action.payload.id
      );
      if (targetingProduct) {
        targetingProduct.quantity++;
        const currQNT = targetingProduct.quantity;
        targetingProduct.productTotalCost = targetingProduct.price * currQNT;
        state.totalCost = state.cartItems.reduce((acc, curr) => {
          return Number(acc + curr.quantity * curr.price);
        }, 0);
        handleLocalStorageAfterOp(state.cartItems, state.totalCost);
      }
    },
    // Decrement Product Quantity
    decrementQuantity: (state, action) => {
      const targetingProduct = state.cartItems.find(
        (pro) => pro.id === action.payload.id
      );
      if (targetingProduct) {
        if (targetingProduct.quantity === 1) {
          const itemsToStay = state.cartItems.filter(
            (pro) => pro.id !== targetingProduct.id
          );
          state.cartItems = itemsToStay;
          state.totalCost = state.cartItems.reduce((acc, curr) => {
            return Number(acc + curr.quantity * curr.price);
          }, 0);
          handleLocalStorageAfterOp(state.cartItems, state.totalCost);
        } else {
          targetingProduct.quantity--;
          const currQNT = targetingProduct.quantity;
          targetingProduct.productTotalCost = targetingProduct.price * currQNT;
          state.totalCost = state.cartItems.reduce((acc, curr) => {
            return Number(acc + curr.quantity * curr.price);
          }, 0);
          handleLocalStorageAfterOp(state.cartItems, state.totalCost);
        }
      }
    },
    // Remove All Cart
    removeCartProducts: (state) => {
      state.cartItems = [];
      state.totalCost = 0;
      handleLocalStorageAfterOp(state.cartItems, state.totalCost);
    },
  },
});

export const {
  addProductToCart,
  delProductFromCart,
  incrementQuantity,
  decrementQuantity,
  removeCartProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
