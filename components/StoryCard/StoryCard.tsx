'use client';

import { Story } from "@/types/story";
import Image from "next/image";
import Button from "../Button/Button";
import css from '@/components/StoryCard/StoryCard.module.css';

interface Props {
  story: Story;
}

const StoryCard = ({story} : Props) => {

  return (
    <li className={css.card}>
      <Image alt={story.title} src={story.img} width={340} height={340} />
      <div className={css.content}>
        <div className={css.titleWrapper}>
          <p>{story.ownerId}</p>
          <span className={css.point}></span>
          <svg width="16" height="16" className={css.icon}>
            <use href="/sprite.svg#icon-bookmark" />
          </svg>
        </div>

        <h3 className={css.title}>{story.title}</h3>
        <div className={css.buttonWrapper}>
          <Button variant="neutral" className={css.buttonMore}>
            Переглянути статтю
          </Button>
          <Button variant="neutral" className={css.buttonFav}>
            <svg width="24" height="24" className={css.buttonIcon}>
              <use href="/sprite.svg#icon-bookmark" />
            </svg>
          </Button>
        </div>
      </div>
    </li>
  )
};

export default StoryCard;