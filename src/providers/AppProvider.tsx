'use client';

import StoreProvider from './StoreProvider';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}
