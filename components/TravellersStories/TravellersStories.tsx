'use client';

import { useState, useEffect, useCallback } from 'react';
import { getStories, getSavedStories, getMyStories } from '@/services/api/clientApi';
import StoryCard from '@/components/StoryCard/StoryCard';
import Button from '@/components/Button/Button';
import type { Story } from '@/types/story';
import toast from 'react-hot-toast';

interface TravellersStoriesProps {
    category?: string;
    ownerId?: string;
    type?: 'saved' | 'my' | 'all';
}
  
const TravellersStories = ({ category, ownerId, type = 'all'  }: TravellersStoriesProps) => {

  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  

  const loadStories = useCallback(async () => {
    setLoading(true);

    try {
        let res;
        if (type === 'saved') {
          res = await getSavedStories({ page });
        } else if (type === 'my') {
          res = await getMyStories({ page });
        } else {
          res = await getStories({ page, category, ownerId });
        }
        setStories((prev) => [...prev, ...res.stories]);
        setHasMore(page < res.totalPages);
      } catch {
        toast.error('Помилка завантаження історій');
      } finally {
        setLoading(false);
      }
    }, [page, category, ownerId, type]);

  useEffect(() => {
    if (!hasMore) return;

    loadStories();
  }, [page, hasMore, loadStories]);

  useEffect(() => {
    setPage(1);
    setStories([]);
    setHasMore(true);
  }, [category, ownerId, type]);

  return (
    <>
      <ul>
        {stories.map((story) => (
          <li key={story._id}>
            <StoryCard story={story} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <Button
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
          isLoading={loading}
          loadingText="Завантаження"
          variant="mantis"
        >
          Показати ще
        </Button>
      )}
    </>
  );
};

export default TravellersStories;