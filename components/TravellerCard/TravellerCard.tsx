
import { User } from "@/types/user";
import Image from "next/image";
import Link from 'next/link';
import css from '@/components/TravellerCard/TravellerCard.module.css';

interface TravellerCardProps {
  user: User;
}

const TravellerCard = ({ user }: TravellerCardProps) => {

    return (
      <li className={css.card}>
        <Image alt={user.name} src={user.avatarUrl} width={310} height={335} />
        <div className={css.content}>
          <div className={css.titleWrapper}>
            <h3>{user.name}</h3>
            <p>Статей:{user.storiesAmount}</p>
          </div>

          <div className={css.buttonWrapper}>
            <Link href={`/traveller/${user._id}`} className={css.buttonMore}>
              Переглянути профіль
            </Link>
          </div>
        </div>
      </li>
    )
}

export default TravellerCard;