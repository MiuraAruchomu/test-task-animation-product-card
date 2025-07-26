'use client';

import StoreProvider from './StoreProvider';
import ProductsProvider from './ProductsProvider';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </StoreProvider>
  );
}
