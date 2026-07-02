'use client';

import { useState, useEffect } from 'react';
import StoryCard from '@/components/StoryCard/StoryCard';
import { getRecommendedStories } from '@/services/api/clientApi';
import type { Story } from '@/types/story';
import toast from 'react-hot-toast';

interface RecommendedStoriesProps {
    storyId: string;
    category: string;
}

export default function RecommendedStories({ storyId, category }: RecommendedStoriesProps) {

    const [stories, setStories] = useState<Story[]>([]);
    
    useEffect(() => {
        getRecommendedStories(storyId, category)
            .then((res) => setStories(res.stories))
            .catch(() => toast.error('Помилка завантаження рекомендацій'));
    }, [storyId, category]);

    
    return (
        <>
          <h2>Вам також сподобається</h2>
          <ul>
            {stories.map((story) => (
              <li key={story._id}>
                <StoryCard story={story} />
              </li>
            ))}
          </ul>
        </>
      );
};