'use client';

import { useAuthStore } from '@/services/store/authStore';
import Image from 'next/image';
import { logout } from '@/services/api/clientApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ConfirmModal from '@/components/ConfirmModal/ConfirmModal';
import css from '@/components/UserBar/UserBar.module.css';

const UserBar = () => { 
    const router = useRouter();
    const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuthenticated);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useAuthStore((state) => state.user);

    const handleLogout = async () => {
        await logout(); 
        clearIsAuthenticated(); 
        router.push('/');
      };

    return (
      <div>
        <Image
            src={user?.avatarUrl ?? '/default-avatar.jpg'}
            alt={user?.name ?? 'User avatar'}
            width={35}
            height={35}
        />

      <p className={css.userName}>{user?.name}</p>
   
        <button onClick={() => setIsModalOpen(true)} className={css.logoutButton}>
            <svg width="24" height="24">
                <use href="/sprite.svg#icon-logout" />
            </svg>
        </button>

        {isModalOpen && (
          <ConfirmModal
            title="Ви точно хочете вийти?"
            confirmButtonText="Вийти"
            cancelButtonText="Відмінити"
            onConfirm={handleLogout}
            onCancel={() => setIsModalOpen(false)}
          />
        )}
    </div>
  );
};

export default UserBar;