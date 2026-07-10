
import Image from 'next/image';
import { getMe } from '@/services/api/serverApi';
import type { Metadata } from 'next';
import ProfileTabs from '@/components/ProfileTabs/ProfileTabs';
import css from './ProfilePage.module.css';

export const metadata: Metadata = {
    title: 'Мій профіль | Природні Мандри',
    description: 'Мій профіль мандрівника',
};
  
const Profile = async () => {
    const user = await getMe();

return (
    <div className={css.page}>
        <div className={css.userInfo}>
            <Image
                src={user.avatarUrl ?? '/default-avatar.jpg'}
                alt={user.name}
                width={145}
                height={145}
                className={css.avatar}
            />
            <div className={css.userDetails}>
                <h2>{user.name}</h2>
                <p>Статей: {user.storiesAmount}</p>
            </div>
        </div>
        <ProfileTabs />
    </div>
    )
};

export default Profile;