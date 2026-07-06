import css from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroWrapper}>
        <div className={css.imageWrapper}>
          <picture>
            <source media="(min-width: 1440px)" srcSet='/heroIMG/hero_desktop.webp' width='644'
            height='580' />
            <source media="(min-width: 768px)" srcSet='/heroIMG/hero_tablet.webp' width='704'
            height='469'/>
            <img src='/heroIMG/hero_mobile.webp' alt='hero picture' className={css.heroImg} width='335'
            height='469'/>
          </picture>
        </div>
        <div className={css.textWrapper}>
          <h1 className={css.heroTitle}>
            Відкрий Україну заново — еко-мандри для натхнення
          </h1>
          <p className={css.heroText}>
            Подорожуй екологічно, відкривай заповідні місця, гори та річки
            України. Ми зібрали маршрути, які допоможуть побачити красу природи
            без шкоди для неї.
          </p>
          <Link href="/#join" className={css.heroLink}>
            Доєднатись до мандрів
          </Link>
        </div>
      </div>
    </section>
  );
}