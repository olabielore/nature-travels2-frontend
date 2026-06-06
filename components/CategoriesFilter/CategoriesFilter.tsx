'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCategories } from '@/services/api/clientApi';
import type { Category } from '@/types/category';
import toast from 'react-hot-toast';
import css from './CategoriesFilter.module.css';

const CategoriesFilter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const activeCategory =
    searchParams.get('category') ?? '';

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch {
        toast.error('Помилка завантаження категорій');
      }
    };

    fetchCategories();
  }, []);

  const handleSelect = (categoryId: string) => {
    if (categoryId === '') {
      router.push('/stories');
    } else {
      router.push(`/stories?category=${categoryId}`);
    }
  };

  return (
    <div>
      <ul className={css.list}>
        <li>
          <button
            type="button"
            onClick={() => handleSelect('')}
            className={
              activeCategory === ''
                ? css.activeButton
                : css.button
            }
          >
            Всі статті
          </button>
        </li>

        {categories.map((item) => (
          <li key={item._id}>
            <button
              type="button"
              onClick={() => handleSelect(item._id)}
              className={
                activeCategory === item._id
                  ? css.activeButton
                  : css.button
              }
            >
              {item.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesFilter;