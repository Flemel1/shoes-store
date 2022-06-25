import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
  },
  reducers: {
    addToCart(state, payload) {
      const newItem = payload.payload;

      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        if (existingItem.disc !== 0) {
          const newPrice = existingItem.price * (existingItem.disc / 100);
          existingItem.total += newPrice;
        } else {
          existingItem.total += existingItem.price;
        }
      } else {
        if (newItem.disc === 0) {
          state.itemList.push({
            id: newItem.id,
            name: newItem.name,
            slug: newItem.slug,
            price: newItem.price,
            disc: newItem.disc,
            rating: newItem.rating,
            image: newItem.image,
            quantity: newItem.quantity,
            total: newItem.price * newItem.quantity,
          });
        } else {
          const newPrice = newItem.price * (newItem.disc / 100);
          state.itemList.push({
            id: newItem.id,
            name: newItem.name,
            slug: newItem.slug,
            price: newItem.price,
            disc: newItem.disc,
            rating: newItem.rating,
            image: newItem.image,
            quantity: newItem.quantity,
            total: newPrice * newItem.quantity,
          });
        }
      }
    },
    decrementItemOnCart(state, payload) {
      const oldItem = payload.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === oldItem.id
      );
      existingItem.quantity--;
      if (existingItem.disc !== 0) {
        const newPrice = existingItem.price * (existingItem.disc / 100);
        existingItem.total -= newPrice;
      } else {
        existingItem.total -= existingItem.price;
      }
    },
    removeProduct(state, payload) {
      const product = payload.payload;
      
      const newCart = state.itemList.filter((item) => item.id !== product.id);

      state.itemList = newCart;
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
