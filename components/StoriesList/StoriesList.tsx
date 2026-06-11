"use client";

import type { Story } from "@/types/story";
import StoryCard from "../StoryCard/StoryCard";
import css from "./StoriesList.module.css";

interface StoryListProps {
  stories: Story[];
}

export default function StoriesList({ stories }: StoryListProps) {

  return (
    <>
        <ul className={css.list}>
        {stories.map((story) => (
          <li key={story._id}>
            <StoryCard story={story} />
          </li>
        ))}
        </ul>
    </>
  );
}
