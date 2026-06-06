import HeaderNav from '../HeaderNav/HeaderNav';
import UserBar from '../UserBar/UserBar';
import AuthBar from '@/components/AuthBar/AuthBar';
import { useAuthStore } from '@/services/store/authStore';
import Link from 'next/link';
import css from '@/components/BurgerMenu/BurgerMenu.module.css';

type BurgerMenuProps = {
    onClose: () => void;
};
  
const BurgerMenu = ({ onClose } : BurgerMenuProps) => {
    
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
        
    return (
        <div className={css.menu}>
            <button onClick={onClose} className={css.closeButton}>
                <svg width="32" height="32">
                   <use href="/sprite.svg#icon-close"></use>
                </svg>
            </button>

            <HeaderNav />
            
            {isAuthenticated ? (
                <div className={css.userSection}>
                    <Link
                        href="/stories/new"
                        className={css.publishButton}
                        onClick={onClose}
                    >
                        Опублікувати статтю
                    </Link>

                    <UserBar />
                </div>
                ) : (
                <AuthBar />
            )}
        </div>
    )
}

export default BurgerMenu;