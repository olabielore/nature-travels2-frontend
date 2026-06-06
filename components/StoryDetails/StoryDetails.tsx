
"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getStoryById } from "@/services/api/clientApi";
import Image from "next/image";
import Link from "next/link";
import SaveStory from '@/components/SaveStory/SaveStory';
import RecommendedStories from '@/components/story/RecommendedStories/RecommendedStories';
import Loader from '@/components/Loader/Loader';
import css from "./StoryDetails.module.css"

const StoryDetails = () => {
	const { storyId } = useParams<{ storyId: string }>();

  const { data: story, isLoading, error } = useQuery({
    queryKey: ["story", storyId],
    queryFn: () => getStoryById(storyId),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;

  if (error || !story) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
        <div className={css.item}>
          <Link href="/stories">
            <svg width="24" height="24" className={css.buttonIcon}>
              <use href="/sprite.svg#icon-arrow_back" />
            </svg>
            Всі статті
          </Link>
          <h1>{story.title}</h1>
          <div className={css.header}>
            <h4>Автор статті</h4>
            <p>{story.ownerId.name}</p>
            <h4>Опубліковано</h4>
            <p>{story.date}</p>
          </div>
          <span className={css.tag}>{story.category.category}</span>
          <Image alt={story.title} src={story.img} width={755} height={502} />
      </div>
      <div>
        <p className={css.content}>{story.article}</p>
        <SaveStory/>
      </div>
      <RecommendedStories/>
    </div>

  );
};

export default StoryDetails;
