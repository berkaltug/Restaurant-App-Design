import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state, action) => {
      state.items = [];
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = newCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      }
      state.items = newCart;
    },
  },
});

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = (state, id) => {
  const items = state.cart.items.filter((item) => item.id == id);
    console.log(state,id);
    return items;
};

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export const { emptyCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
