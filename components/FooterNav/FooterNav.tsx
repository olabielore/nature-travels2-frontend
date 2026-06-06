import Link from 'next/link';

const FooterNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
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
            </ul>
        </nav>
    )
}

export default FooterNav;