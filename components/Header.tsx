'use client';

import Image from 'next/image';
import Link from 'next/link';
import { UilBars, UilMultiply } from '@iconscout/react-unicons';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const menuIsOpenHandler = () => {
    setMobileMenuIsOpen((current) => !current);
  };

  return (
    <header className="flex h-20 w-full items-center justify-between space-x-4 bg-outer-space px-2.5 md:px-12 xl:px-28">
      <Link href="/" className="flex-center flex items-end gap-2">
        <Image src="/images/logo.svg" alt="CocktailsDB logo" width={40} height={40} className="object-contain" />
        <p className="logo_text">CocktailsDB</p>
      </Link>

      <HeaderMenu />

      <div className="relative flex md:hidden" onClick={menuIsOpenHandler}>
        {mobileMenuIsOpen ? (
          <>
            <UilMultiply size="30" color="#fff" />
            <HeaderMenu isMobile setMobileMenuIsOpen={setMobileMenuIsOpen} mobileMenuIsOpen={mobileMenuIsOpen} />
          </>
        ) : (
          <UilBars size="30" color="#fff" />
        )}
      </div>
    </header>
  );
};

export default Header;
