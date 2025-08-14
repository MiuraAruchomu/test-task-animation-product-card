import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/slices/products/productsSlice';
import transitionReducer from '@/slices/transition/transitionSlice';
import burgerMenuReducer from '@/slices/burgerMenu/burgerMenuSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      transition: transitionReducer,
      burgermenu: burgerMenuReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
