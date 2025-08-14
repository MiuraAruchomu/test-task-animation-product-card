import { IBurgerMenuState } from './burgerMenu.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IBurgerMenuState = {
  isOpen: false,
};

export const burgerMenuSlice = createSlice({
  name: 'burgermenu-slice',
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
