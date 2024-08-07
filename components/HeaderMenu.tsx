'use client';

import classNames from 'classnames';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import HeartIcon from '../public/images/icons/heart.svg';
import PlusIcon from '../public/images/icons/plus.svg';
import { useOutsideClick } from '@/app/hooks';

type Props = {
  isMobile?: boolean;
  setMobileMenuIsOpen?: Dispatch<SetStateAction<boolean>>;
  mobileMenuIsOpen?: boolean;
};

const HeaderMenu: React.FC<Props> = ({ isMobile, setMobileMenuIsOpen, mobileMenuIsOpen }) => {
  const menuRef: React.RefObject<HTMLElement> = useRef(null);

  useOutsideClick(menuRef, () => {
    if (mobileMenuIsOpen && setMobileMenuIsOpen) {
      setMobileMenuIsOpen(false);
    }
  });

  // const handleClick = (e: MouseEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
  //     if (mobileMenuIsOpen && setMobileMenuIsOpen) {
  //       setMobileMenuIsOpen(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClick);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // });

  return (
    <nav
      className={classNames({
        'hidden lg:flex': !isMobile,
        'absolute right-0 top-9 z-10 flex lg:hidden': isMobile,
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
            <HeartIcon className="icons"/>
            My list
          </button>
        </li>

        <li>
          <button type="button" className="header_btn">
            <PlusIcon className="icons"/>
            Add new
          </button>
        </li>

        <li>
          <button type="button" className="btn_border px-10">
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
