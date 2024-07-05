'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import MultiplyIcon from '../public/images/icons/multiply.svg';
import BarsIcon from '../public/images/icons/bars.svg';
import SearchIcon from '../public/images/icons/search.svg';

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const menuIsOpenHandler = () => {
    setMobileMenuIsOpen((current) => !current);
  };

  const filterIsOpenHandler = () => {
    setFilterIsOpen((current) => !current);
  };

  return (
    <header className="flex h-20 w-full items-center justify-between space-x-4 bg-outer-space px-4 sm:px-12 xl:px-28">
      <Link href="/" className="flex-center flex items-end gap-2">
        <Image src="/images/logo.svg" alt="CocktailsDB logo" width={40} height={40} className="object-contain" />
        <p className="logo_text">CocktailsDB</p>
      </Link>

      <HeaderMenu />

      <div className="relative flex lg:hidden gap-2">
        <button type="button" className="h-7 w-7" onClick={filterIsOpenHandler}>
          <SearchIcon className="fill-white" />
        </button>
        {mobileMenuIsOpen ? (
          <button type="button" className="h-7 w-7" onClick={menuIsOpenHandler}>
            <MultiplyIcon className="fill-white" />
          </button>
        ) : (
          <button type="button" className="h-7 w-7" onClick={menuIsOpenHandler}>
            <BarsIcon className="fill-white" />
          </button>
        )}
        {mobileMenuIsOpen && (
          <HeaderMenu isMobile setMobileMenuIsOpen={setMobileMenuIsOpen} mobileMenuIsOpen={mobileMenuIsOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
