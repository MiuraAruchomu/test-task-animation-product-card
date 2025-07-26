import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectBurgermenuIsOpen } from '@/features/burgerMenu/selectors';

export default function DropdownMenu() {
  const isOpen = useAppSelector(selectBurgermenuIsOpen);

  return (
    <ul className='absolute right-0 top-[175%] -translate-y-1/2 h-5'>
      <li
        className={`uppercase text-neutral-900 text-md font-bold text-end cursor-pointer select-none invisible ${isOpen ? 'animate-extension-down' : ''} animate-fill-both will-change-auto`}
      >
        отзывы
      </li>
      <li
        className={`uppercase text-neutral-900 text-md font-bold text-end cursor-pointer select-none invisible ${isOpen ? 'animate-extension-down-delay-02' : ''} animate-fill-both will-change-auto`}
      >
        корзина
      </li>
    </ul>
  );
}
