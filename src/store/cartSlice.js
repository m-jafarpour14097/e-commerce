import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        toast.info(
          `You Increase Quantity of ${action.payload.title.substring(
            0,
            12
          )}... To Cart`,
          { position: "bottom-left", closeButton: false, autoClose: 700 }
        );
      } else {
        const temProduct = { ...action.payload, quantity: 1 };
        state.cart.push(temProduct);
        toast.success(
          `You Add ${action.payload.title.substring(0, 12)}... To Cart`,
          { position: "bottom-left", closeButton: false, autoClose: 700 }
        );
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cart = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(
        `You Remove ${action.payload.title.substring(0, 12)}...From Cart`,
        { position: "bottom-left", closeButton: false, autoClose: 700 }
      );
    },

    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
        toast.info(
          `You Decreased ${action.payload.title.substring(0, 12)}...From Cart`,
          { position: "bottom-left", closeButton: false, autoClose: 700 }
        );
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCartItems = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cart = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error(
          `You Remove ${action.payload.title.substring(0, 12)}...From Cart`,
          { position: "bottom-left", closeButton: false, autoClose: 700 }
        );
      }
    },
    increaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[itemIndex].quantity += 1;
      toast.info(
        `You Increased ${action.payload.title.substring(0, 12)}...To Cart`,
        { position: "bottom-left", closeButton: false, autoClose: 700 }
      );
    },
    clearCart(state, action) {
      state.cart = [];
    },
    getTotal(state, action) {
      let {total,quantity} =  state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
