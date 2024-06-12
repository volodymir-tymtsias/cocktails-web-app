'use client';

import { UilHeart, UilPlus } from '@iconscout/react-unicons';
import classNames from 'classnames';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type Props = {
  isMobile?: boolean;
  setMobileMenuIsOpen?: Dispatch<SetStateAction<boolean>>;
  mobileMenuIsOpen?: boolean;
};

const HeaderMenu: React.FC<Props> = ({ isMobile, setMobileMenuIsOpen, mobileMenuIsOpen }) => {
  const menuRef: React.RefObject<HTMLElement> = useRef(null);

  const handleClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      if (mobileMenuIsOpen && setMobileMenuIsOpen) {
        setMobileMenuIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return (
    <nav
      className={classNames({
        'hidden md:flex': !isMobile,
        'absolute right-0 top-9 z-10 flex md:hidden': isMobile,
      })}
      ref={menuRef}
    >
      <ul
        className={classNames('flex', {
          'bg-paynes-gray flex-col gap-2 rounded-xl p-4': isMobile,
          'gap-7': !isMobile,
        })}
      >
        <li>
          <button type="button" className="header_btn">
            <UilHeart size="24" color="currentColor" />
            My list
          </button>
        </li>

        <li>
          <button type="button" className="header_btn">
            <UilPlus size="24" color="currentColor" />
            Add new
          </button>
        </li>

        <li>
          <button type="button" className="header_btn-border">
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
