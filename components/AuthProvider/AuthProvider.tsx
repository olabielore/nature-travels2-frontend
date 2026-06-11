
'use client';

import { refreshSession } from '@/services/api/clientApi';
import { useAuthStore } from '@/services/store/authStore';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type AuthProviderProps = {
  children: React.ReactNode;
};

const privateRoutes = ['/profile', '/stories/new'];

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await refreshSession();
        
        if (user) {
          setUser(user);
        } else {
          clearIsAuthenticated();
      
          const isPrivate = privateRoutes.some((r) =>
            pathname.startsWith(r)
          );
          if (isPrivate) {
            router.replace('/login');
          }
        };
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router, setUser, clearIsAuthenticated]);
      
  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default AuthProvider;
