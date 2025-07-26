import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getProducts } from '@/features/products/productsThunks';
import { useEffect } from 'react';

export default function ProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return children;
}
