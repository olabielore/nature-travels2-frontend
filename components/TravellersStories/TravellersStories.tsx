import { Story } from "@/types/story";
import StoryCard from "../StoryCard/StoryCard";
import Pagination from '@/components/Pagination/Pagination';
import css from '@/components/TravellersStories/TravellersStories.module.css';

interface Props {
  stories: Story[];
  category?: string;
}

export default function TravellersStories({ stories, category }: Props) {
  return (
    <>
      <ul className={css.list}>
        {stories.map((story) => (
          <li key={story._id}>
            <StoryCard story={story} />
          </li>
        ))}
      </ul>
      <Pagination/>
    </>
  );
}
