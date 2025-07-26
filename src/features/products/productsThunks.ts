import { IProduct } from './products.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<IProduct[]>(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/products');
      return response.json();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  },
);
