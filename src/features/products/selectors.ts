import { RootState } from '@/shared/store/store';

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductInfo =
  ({ id }: { id: string }) =>
  (state: RootState) => {
    return state.products.products?.find((el) => el.id === id);
  };
