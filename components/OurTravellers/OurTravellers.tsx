'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TravellerCard from '@/components/TravellerCard/TravellerCard';
import { getTravellers } from '@/services/api/clientApi';
import { User } from "@/types/user";
import Link from 'next/link';
import toast from 'react-hot-toast';
import css from './OurTravellers.module.css';

export default function OurTravellers() {
    const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getTravellers()
      .then((res) => setUsers(res.users))
      .catch(() => toast.error('Помилка завантаження'));
  }, []);

  return (
    <section className={css.section}>
      <div className={css.header}>
        <h2 className={css.title}>Наші Мандрівники</h2>
        <Link href="/travellers" className={css.link}>
            Всі мандрівники
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 4 },
          1440: { slidesPerView: 4 },
        }}
      >
        {users.map((user) => (
          <SwiperSlide key={user._id}>
            <TravellerCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}