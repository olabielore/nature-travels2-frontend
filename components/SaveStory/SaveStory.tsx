import css from "./SaveStory.module.css"
import Image from "next/image";

export default function CreateNewStory() {

  return (
    <main className={css.main}>
        <div className={css.container}>
            <p>Обкладинка статті</p>
            <h1 className={css.title}>Створити нову історію</h1>
            <Image alt="Обкладинка статті" src={preview ?? '/placeholder.jpg'} width={1091} height={726} />
            <button>Завантажити фото</button>
      </div>
    </main>
  )
};
