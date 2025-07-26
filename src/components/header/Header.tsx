'use client';

import HeaderLogo from './Logo';
import HeaderBurgerMenu from './BurgerMenu';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  return (
    <div className='fixed left-0 right-0 py-5 z-[996] backdrop-blur-md'>
      <div className='container mx-auto relative flex justify-start sm:justify-center w-[90%] sm:w-full'>
        <HeaderLogo />
        <HeaderBurgerMenu />
        <DropdownMenu />
      </div>
    </div>
  );
}
