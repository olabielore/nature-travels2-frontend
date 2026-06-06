import Link from 'next/link';

const SocialList = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <svg width="24" height="24">
                            <use href="/sprite.svg#icon-facebook" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <svg width="24" height="24">
                            <use href="/sprite.svg#icon-instagram" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <svg width="24" height="24">
                            <use href="/sprite.svg#icon-x" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <svg width="24" height="24">
                            <use href="/sprite.svg#icon-youtube" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialList;