import { RootState } from '@/store/store';

export const selectBurgermenuIsOpen = (state: RootState) =>
  state.burgermenu.isOpen;
