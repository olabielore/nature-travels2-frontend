'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import StoryCard from '@/components/StoryCard/StoryCard';
import { getPopularStories } from '@/services/api/clientApi';
import type { Story } from '@/types/story';
import Link from 'next/link';
import toast from 'react-hot-toast';
import css from './PopularStories.module.css';

export default function PopularStories() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    getPopularStories()
      .then((res) => setStories(res.stories))
      .catch(() => toast.error('Помилка завантаження'));
  }, []);

  return (
    <section className={css.section}>
      <div className={css.header}>
        <h2 className={css.title}>Популярні статті</h2>
        <Link href="/stories" className={css.link}>
          Всі статті
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
      >
        {stories.map((story) => (
          <SwiperSlide key={story._id}>
            <StoryCard story={story} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}