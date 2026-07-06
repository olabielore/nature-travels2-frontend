'use client';

import Link from 'next/link';
import css from './Join.module.css';

export default function Join() {
    return (
      <section id="join">
        <h2>Приєднуйся до спільноти свідомих мандрівників</h2>
        <p>Стань частиною ком’юніті, де подорожі стають не лише пригодою, а й внеском у збереження природи. Тут ти знайдеш однодумців, поради для сталих мандрів та натхнення для нових маршрутів Україною.</p>
        <Link href="/register" className={css.button}>
            Зареєструватися
        </Link>
      </section>
    );
  }