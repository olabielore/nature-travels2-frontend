
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import css from "./auth.module.css"

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const router = useRouter();
  
  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div className={css.authLayout}>
      <header className={css.authHeader}>
        <Link href="/">
          <svg width="124" height="36">
            <use href="/sprite.svg#icon-logo" />
          </svg>
        </Link>
      </header>

      <main>{children}</main>
    </div>
  );
}
