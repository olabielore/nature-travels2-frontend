'use client'

import { User } from "@/types/user";
import Image from "next/image";
import { getUserById } from '@/services/api/clientApi';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import css from '@/components/TravellerInfo/TravellerInfo.module.css';

interface TravellerInfoProps {
    travellerId: string;
}

const TravellerInfo = ({ travellerId }: TravellerInfoProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserById(travellerId)
          .then(setUser)
          .catch(() => toast.error('Помилка завантаження'));
    }, [travellerId]);
    
    if (!user) return null;

    return (
      <div className={css.card}>
        <Image alt={user.name} src={user.avatarUrl} width={145} height={145} className={css.avatar}/>
        <div className={css.content}>
          <div className={css.titleWrapper}>
            <h3 className={css.name}>{user.name}</h3>
            <p className={css.stories}>Статей:{user.storiesAmount}</p>
          </div>
        </div>
      </div>
    )
}

export default TravellerInfo;