import css from './Footer.module.css';
import Link from 'next/link';
import SocialList from '../SocialList/SocialList';
import FooterNav from '../FooterNav/FooterNav';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <Link href="/">
                    <svg width="124" height="36">
                        <use href="/sprite.svg#icon-logo" />
                    </svg>
                </Link>

                <SocialList />

                <FooterNav />

                <p>© {new Date().getFullYear()}Природні Мандри. Усі права захищені.</p>
                
            </div>
        </footer>
    )
}

export default Footer;