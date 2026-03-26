import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

// CHECKING FOR LOCALSTORAGE
const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

// Assign cartItemId to existing items if missing
let nextId = 1;
cartItems.forEach((item) => {
  if (!item.cartItemId) {
    item.cartItemId = nextId++;
  }
});

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
  nextCartItemId: nextId,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add Products To Cart
    addProductToCart: (state, action) => {
      let productInCart = state.cartItems.filter(
        (pro) => pro.id === action.payload.id,
      );
      if (action.payload.quantity > 0) {
        if (productInCart.length > 0) {
          // Check if the exact same product (including options except quantity and calculated totals) already exists
          let existingProduct = null;
          const newProductWithoutExtras = { ...action.payload };
          delete newProductWithoutExtras.quantity;
          delete newProductWithoutExtras.onePriceProductTotalCost;
          delete newProductWithoutExtras.productTotalCost;
          delete newProductWithoutExtras.cartItemId;
          for (let i = 0; i < productInCart.length; i++) {
            const existingWithoutExtras = { ...productInCart[i] };
            delete existingWithoutExtras.quantity;
            delete existingWithoutExtras.onePriceProductTotalCost;
            delete existingWithoutExtras.productTotalCost;
            delete existingWithoutExtras.cartItemId;
            if (_.isEqual(existingWithoutExtras, newProductWithoutExtras)) {
              existingProduct = productInCart[i];
              break;
            }
          }
          if (existingProduct) {
            // Same product with same options: increase quantity
            existingProduct.quantity += action.payload.quantity;
            const currAmount = existingProduct.quantity;
            if (existingProduct.price === undefined) {
              existingProduct.onePriceProductTotalCost =
                currAmount * existingProduct.oneprice;
            } else {
              existingProduct.productTotalCost =
                currAmount * existingProduct.price;
            }
          } else {
            // Same product but different options: add as new item
            const newItem = {
              ...action.payload,
              cartItemId: state.nextCartItemId,
            };
            state.cartItems.push(newItem);
            state.nextCartItemId++;
          }

          // ================================================================================
          state.totalCost = state.cartItems.reduce((acc, curr) => {
            if (curr.price === undefined) {
              return Number(acc + curr.quantity * curr.oneprice);
            } else {
              return Number(acc + curr.quantity * curr.price);
            }
          }, 0);
          // ================================================================================
        } else {
          const newItem = {
            ...action.payload,
            cartItemId: state.nextCartItemId,
          };
          state.cartItems.push(newItem);
          state.nextCartItemId++;
          state.totalCost = state.cartItems.reduce((acc, curr) => {
            if (curr.price === undefined) {
              return Number(acc + curr.quantity * curr.oneprice);
            } else {
              return Number(acc + curr.quantity * curr.price);
            }
          }, 0);
        }
      }

      handleLocalStorageAfterOp(state.cartItems, state.totalCost);
    },
    // Delete Products From Cart
    delProductFromCart: (state, action) => {
      const deletingPro = state.cartItems.filter(
        (pro) => pro.cartItemId !== action.payload.cartItemId,
      );
      state.cartItems = deletingPro;
      state.totalCost = state.cartItems.reduce((acc, curr) => {
        if (curr.price === undefined) {
          return Number(acc + curr.quantity * curr.oneprice);
        } else {
          return Number(acc + curr.quantity * curr.price);
        }
      }, 0);
      handleLocalStorageAfterOp(deletingPro, state.totalCost);
    },
    // Increment Product Quantity
    incrementQuantity: (state, action) => {
      const targetingProduct = state.cartItems.find(
        (pro) => pro.cartItemId === action.payload.cartItemId,
      );
      if (targetingProduct) {
        targetingProduct.quantity++;
        const currQNT = targetingProduct.quantity;
        if (targetingProduct.price === undefined) {
          targetingProduct.onePriceProductTotalCost =
            targetingProduct.oneprice * currQNT;
        } else {
          targetingProduct.productTotalCost = targetingProduct.price * currQNT;
        }
        state.totalCost = state.cartItems.reduce((acc, curr) => {
          if (curr.price === undefined) {
            return Number(acc + curr.quantity * curr.oneprice);
          } else {
            return Number(acc + curr.quantity * curr.price);
          }
        }, 0);
        handleLocalStorageAfterOp(state.cartItems, state.totalCost);
      }
    },
    // Decrement Product Quantity
    decrementQuantity: (state, action) => {
      const targetingProduct = state.cartItems.find(
        (pro) => pro.cartItemId === action.payload.cartItemId,
      );
      if (targetingProduct) {
        if (targetingProduct.quantity === 1) {
          const itemsToStay = state.cartItems.filter(
            (pro) => pro.cartItemId !== targetingProduct.cartItemId,
          );
          state.cartItems = itemsToStay;

          state.totalCost = state.cartItems.reduce((acc, curr) => {
            if (curr.price === undefined) {
              return Number(acc + curr.quantity * curr.oneprice);
            } else {
              return Number(acc + curr.quantity * curr.price);
            }
          }, 0);
          handleLocalStorageAfterOp(state.cartItems, state.totalCost);
        } else {
          targetingProduct.quantity--;
          const currQNT = targetingProduct.quantity;
          if (targetingProduct.price === undefined) {
            targetingProduct.onePriceProductTotalCost =
              targetingProduct.oneprice * currQNT;
          } else {
            targetingProduct.productTotalCost =
              targetingProduct.price * currQNT;
          }
          state.totalCost = state.cartItems.reduce((acc, curr) => {
            if (curr.price === undefined) {
              return Number(acc + curr.quantity * curr.oneprice);
            } else {
              return Number(acc + curr.quantity * curr.price);
            }
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
