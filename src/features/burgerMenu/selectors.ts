import { RootState } from '@/shared/store/store';

export const selectBurgermenuIsOpen = (state: RootState) =>
  state.burgermenu.isOpen;
