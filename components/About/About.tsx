import css from './About.module.css';

export default function About() {
  return (
    <section className={css.aboutSection}>
      <div className={css.aboutWrapper}>
        <div className={css.textWrapper}>
            <h2 className={css.aboutTitle}>
                Мандруй екологічно та відкривай нові горизонти
            </h2>
            <p className={css.aboutText}>
                Наш проєкт створений для тих, хто хоче досліджувати Україну відповідально. Ми допоможемо знайти унікальні маршрути, які поєднують красу природи, локальну культуру та принципи сталого туризму.
            </p>
            <div className={css.advantagesWrapper}>
                <div className={css.helperWrapper}>
                    <h3>Еко-маршрути по Україні</h3>
                    <p>Від Карпат до Чорного моря — добірка локацій, де можна подорожувати без шкоди для довкілля.</p>
                </div>
                <div className={css.helperWrapper}>
                    <h3>Практичні екологічні поради</h3>
                    <p>Дізнайся, як зменшити свій екологічний слід під час мандрів, та зробити подорож комфортною й свідомою.</p>
                </div>
            </div>
        </div>
        <div className={css.imageWrapper}>
          <picture>
            <source media="(min-width: 1440px)" srcSet='/aboutIMG/about_desktop.webp' width='644'
            height='686' />
            <source media="(min-width: 768px)" srcSet='/aboutIMG/about_tablet.webp' width='704'
            height='410'/>
            <img src='/aboutIMG/about_mobile.webp' alt='hero picture' className={css.aboutImg} width='335'
            height='410'/>
          </picture>
        </div>
      </div>
    </section>
  );
}