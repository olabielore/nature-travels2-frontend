
import Link from 'next/link';
import css from '@/components/AuthBar/AuthBar.module.css'

const AuthBar = () => { 

    return (
        <div>
            <ul>
                <li className={css.navigationItem}>
                    <Link href="/login" className={css.navigationLink}>
                        Вхід
                    </Link>
                </li>
      
                <li className={css.navigationItem}>
                    <Link href="/register" className={css.navigationLink}>
                        Реєстрація
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AuthBar;
