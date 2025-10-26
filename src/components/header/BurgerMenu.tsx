import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setIsOpen } from '@/slices/burgerMenu/burgerMenuSlice';
import { selectBurgermenuIsOpen } from '@/slices/burgerMenu/selectors';

export default function HeaderBurgerMenu() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectBurgermenuIsOpen);

  return (
    <div
      className={`absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 z-[997] cursor-pointer ${isOpen ? 'open' : ''}`}
      onClick={() => dispatch(setIsOpen())}
    >
      <span className='burger-menu-line' />
      <span className='burger-menu-line' />
      <span className='burger-menu-line' />
    </div>
  );
}
