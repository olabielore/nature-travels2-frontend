
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import css from "@/app/(auth routes)/auth.module.css"

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
          <Image
            src="/icon-Company-Logo"
            alt="Company-Logo"
            width={124}
            height={36}
            priority
          />
        </Link>
      </header>

      <main>{children}</main>
    </div>
  );
}
