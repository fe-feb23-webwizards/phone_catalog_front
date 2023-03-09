/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  cartValue: number;
  favouritesValue: number;
}

const initialState: CounterState = {
  cartValue: 0,
  favouritesValue: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.cartValue += 1;
    },
    decrementCart: (state) => {
      state.cartValue -= 1;
    },
    setCartValue: (state, action: PayloadAction<number>) => {
      state.cartValue = action.payload;
    },

    incrementFavourites: (state) => {
      state.favouritesValue += 1;
    },
    decrementFavourites: (state) => {
      state.favouritesValue -= 1;
    },

    setFavouritesValue: (state, action: PayloadAction<number>) => {
      state.favouritesValue = action.payload;
    },
  },
});

export const {
  incrementCart,
  decrementCart,
  setCartValue,
  incrementFavourites,
  decrementFavourites,
  setFavouritesValue,
} = counterSlice.actions;

export default counterSlice.reducer;
