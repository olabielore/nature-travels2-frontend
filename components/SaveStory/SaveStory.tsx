import css from "./CreateNote.module.css"
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Створити нову історію',
  description: 'Створити нову історію',
  openGraph: {
    title: 'Створити нову історію',
    description: 'Створити нову історію',
    url: 'https://notehub-public.goit.study/api/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Створити нову історію',
      },
    ],
  }
};

export default function CreateNewStory() {

  return (
    <main className={css.main}>
        <div className={css.container}>
            <p>Обкладинка статті</p>
            <h1 className={css.title}>Створити нову історію</h1>
            <Image alt={story.title} src={story.img} width={1091} height={726} />
            <button>Завантажити фото</button>
      </div>
    </main>
  )
};
