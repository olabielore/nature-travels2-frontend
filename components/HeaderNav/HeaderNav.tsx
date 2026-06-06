'use client';

import Link from 'next/link';
import { useAuthStore } from '@/services/store/authStore';
import css from './HeaderNav.module.css';

const HeaderNav = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <nav className={css.nav}>
        <ul className={css.list}>
            <li className={css.item}>
                <Link href="/" className={css.link}>
                    Головна
                </Link>
            </li>
            <li>
                <Link href="/stories">
                    Статті
                </Link>
            </li>
            <li>
                <Link href="/travellers">
                    Еко-Мандрівники
                </Link>
              </li>

              {isAuthenticated && (
                <>
                    <li>
                        <Link href="/profile">
                            Мій профіль
                        </Link>
                    </li>
                    <li>
                        <Link href="/stories/new">
                            Опублікувати статтю
                        </Link>
                    </li>
                </>
            )}
        </ul>
    </nav>
  );
};

export default HeaderNav;