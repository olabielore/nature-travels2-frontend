
import Link from 'next/link';
import css from './Join.module.css';

export default function Join() {
    return (
      <section id="join" className={css.section}>
        <div className={css.overlay}>
          <picture className={css.bgImage}>
            <source media="(min-width: 1440px)" srcSet='/joinIMG/join_desktop.webp' width='1312'
            height='436' />
            <source media="(min-width: 768px)" srcSet='/joinIMG/join_tablet.webp' width='704'
            height='284'/>
            <img src='/joinIMG/join_mobile.webp' alt='join picture' width='335'
            height='397'/>
          </picture>
        </div>
        <div className={css.content}>
          <h2>Приєднуйся до спільноти свідомих мандрівників</h2>
          <p>Стань частиною ком’юніті, де подорожі стають не лише пригодою, а й внеском у збереження природи. Тут ти знайдеш однодумців, поради для сталих мандрів та натхнення для нових маршрутів Україною.</p>
          <Link href="/register" className={css.button}>
              Зареєструватися
          </Link>
        </div>
      </section>
    );
  }