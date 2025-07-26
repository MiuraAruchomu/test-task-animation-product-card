import { IProductsState, IProduct } from './products.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from './productsThunks';

const initialState: IProductsState = {
  products: null,
};

export const productsSlice = createSlice({
  name: 'products-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
      },
    );
  },
});

export default productsSlice.reducer;
