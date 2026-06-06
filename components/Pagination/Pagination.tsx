'use client';

import { useState, useEffect, useCallback } from 'react';
import { getStories } from '@/services/api/clientApi';
import StoryCard from '@/components/StoryCard/StoryCard';
import Button from '@/components/Button/Button';
import type { Story } from '@/types/story';
import toast from 'react-hot-toast';

const Pagination = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadStories = useCallback(async () => {
    setLoading(true);

    try {
      const res = await getStories({ page });

      setStories((prev) => [...prev, ...res.stories]);

      setHasMore(page < res.totalPages);
    } catch (error) {
      toast.error('Помилка завантаження історій');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (!hasMore) return;

    loadStories();
  }, [page, hasMore, loadStories]);

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

export default Pagination;