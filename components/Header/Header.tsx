'use client';

import css from './Header.module.css';
import Link from 'next/link';
import { useAuthStore } from '@/services/store/authStore';
import { useState } from 'react';
import AuthBar from '@/components/AuthBar/AuthBar';
import UserBar from '@/components/UserBar/UserBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import HeaderNav from '../FooterNav/FooterNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  return (
  
    <header className={css.header}>
      <Link href="/">
          <svg width="124" height="36">
            <use href="/sprite.svg#icon-logo" />
          </svg>
      </Link>
        
      <HeaderNav />

        {isAuthenticated ? (
        <UserBar />
      ) : (
        <AuthBar />
      )}

      <button onClick={() => setIsOpen(true)}>
        <svg width="32" height="32">
          <use href="/sprite.svg#icon-burger"></use>
        </svg>
      </button>
      
      {isOpen && (
        <BurgerMenu onClose={() => setIsOpen(false)} />
      )}
    </header>
  )
};

export default Header;